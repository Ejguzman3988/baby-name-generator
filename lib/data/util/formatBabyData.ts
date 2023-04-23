const { readFileSync } = require("node:fs");
const { readFile, readdir } = require("node:fs/promises");
const { resolve } = require("node:path");

const getContent = async (filePath: string) => {
  const content = await readFile(filePath, { encoding: "utf-8" });
  return resolve(content);
};

async function formatBabyData() {
  const usFolder = "./lib/data/us";

  interface StringMap {
    [key: string]: string;
  }

  interface babyMap {
    [key: string]: string[];
  }

  const filesMap: StringMap = {};

  const files = await readdir(usFolder);

  files.slice(1).forEach(async (fileName: string) => {
    const filePath = usFolder + "/" + fileName;
    filesMap[fileName.slice(3, 7)] = readFileSync(filePath, {
      encoding: "utf-8",
    });
  });

  const babyNameMap = Object.keys(filesMap).map((year: string) =>
    filesMap[year]
      .split("\r\n")
      .map((line: string) => line.split(",").concat(year))
  );

  // const years: number[] = Object.keys(filesMap).map((y) => parseInt(y, 10));
  return babyNameMap;
}

module.exports = { formatBabyData };

/*
Have an object with a large string array that needs to be parsed.
Each year has over 2000+ babyNames and Quantity

go through each year and split the babyNames and Quantity accodingly
n^2




*/
