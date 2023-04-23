const fs = require("fs");
const util = require("util");
const { pipeline } = require("node:stream");
const streamPipeline = util.promisify(require("stream").pipeline);
const StreamZip = require("node-stream-zip");

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  const writeZip = await streamPipeline(
    response.body,
    fs.createWriteStream("./lib/data/util/names.zip")
  );

  const zip = new StreamZip({
    file: "./lib/data/util/names.zip",
    storeEntries: true,
  });

  zip.on("ready", () => {
    fs.mkdirSync("extracted");
    zip.extract(null, "./lib/data/us", (err, count) => {
      console.log(err ? "Extract error" : `Extracted ${count} entries`);
      zip.close();
    });
  });
}

getData("https://www.ssa.gov/oact/babynames/names.zip");