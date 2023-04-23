const fs = require("fs");
const { getUsData } = require("../../lib/data/util/download");

const usWriteBabyFiles = async () => {
  if (_filesExists())
    return console.log("Data Already Exists: Check data folder");
  console.log("Gathering data...🗄️🗃️📂...📁...📂🗃️🗄️...");
  await getUsData();
};



const getBabyNamesData = async () => {
  await usWriteBabyFiles();

  // Once all baby names have been written to the directory then we need to do something else


}

const _filesExists = () => {
  const usFolder = "./lib/data/us";
  fs.readdir(usFolder, (err, files) => {
    if (files && files.length > 0) {
      return true;
    }
    return false;
  });
};

module.exports = { getBabyNamesData };
