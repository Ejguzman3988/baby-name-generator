const fs = require("fs");
const util = require("util");
const streamPipeline = util.promisify(require("stream").pipeline);
const StreamZip = require("node-stream-zip");

async function getData(url) {
  await fetchBabyNames(url);
  await extractData();
}

const fetchBabyNames = async (url) => {
  const zipPath = "./lib/data/util/names.zip";

  if (!fs.existsSync(zipPath)) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`unexpected response ${response.statusText}`);
    await streamPipeline(
      response.body,
      fs.createWriteStream("./lib/data/util/names.zip")
    );

    console.log(`Zip Downloaded`);
  }
};

const extractData = async () => {
  const openZip = async () =>
    new StreamZip({
      file: "./lib/data/util/names.zip",
      storeEntries: true,
    });

  const zip = await openZip();

  zip.on("ready", () => {
    const dir = "./lib/data/us";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    zip.extract(null, "./lib/data/us", (err, count) => {
      console.log(err ? "Extract error" : `Extracted ${count} entries`);
      zip.close();
    });
  });
};

const getUsData = async () =>
  getData("https://www.ssa.gov/oact/babynames/names.zip");

module.exports = { getUsData };
