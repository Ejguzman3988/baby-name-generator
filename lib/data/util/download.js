const fs = require("fs");
const util = require("util");
const { pipeline } = require("node:stream");
const streamPipeline = util.promisify(require("stream").pipeline);
const StreamZip = require("node-stream-zip");

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  const zipPath = "./lib/data/util/names.zip";

  if (!fs.existsSync(zipPath)) {
    await streamPipeline(
      response.body,
      fs.createWriteStream("./lib/data/util/names.zip")
    );

    console.log(`Zip Downloaded`);
  }

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
}

const getUsData = () => getData("https://www.ssa.gov/oact/babynames/names.zip");

module.exports = { getUsData };
