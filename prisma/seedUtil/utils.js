const fs = require("fs");
const { getUsData } = require("../../lib/data/util/download");

const usWriteBabyFiles = () => {
  if (filesExists())
    return console.log("Data Already Exists: Check data folder");
  console.log("Gathering data...🗄️🗃️📂...📁...📂🗃️🗄️...");
  getUsData();
};

const filesExists = () => {
  const usFolder = "./lib/data/us";
  fs.readdir(usFolder, (err, files) => {
    if (files && files.length > 0) {
      return true;
    }
    return false;
  });
};

module.exports = { usWriteBabyFiles };
