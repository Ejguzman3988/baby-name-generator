const fs = require("fs");
const { getUsData } = require("../../lib/data/util/download");

const usWriteBabyFiles = async () => {
  const usFolder = "./lib/data/us";
  fs.readdir(usFolder, (err, files) => {
    if (files && files.length > 0)
      return console.log("Data Already Exists: Check data folder");
    getUsData();
  });
};

module.exports = { usWriteBabyFiles };
