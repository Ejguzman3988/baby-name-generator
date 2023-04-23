const fs = require("fs");
const { getUsData } = require("../../lib/data/util/download");
const { formatBabyData } = require("../../lib/data/util/formatBabyData");

const usWriteBabyFiles = async () => {
  const usFolder = "./lib/data/us";

  fs.readdir(usFolder, async (err, files) => {
    if (files && files.length > 0) {
      return console.log("Data Exists: Check data folder");
    } else {
      console.log("Gathering data...🗄️🗃️📂...📁...📂🗃️🗄️...");
      await getUsData();
    }
  });
};

const getBabyNamesData = async () => {
  await usWriteBabyFiles();
  return await formatBabyData();
};

module.exports = { getBabyNamesData };
