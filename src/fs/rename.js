import fs from "fs/promises";
import { checkFileExists } from "../util/checkFileExists.util.js";

const rename = async () => {
  // Write your code here
  const errorMessage = "FS operation failed";
  const wrongFilePath = "./src/fs/files/wrongFilename.txt";
  const properFilenamePath = "./src/fs/files/properFilename.md";

  if (
    !(await checkFileExists(wrongFilePath)) ||
    (await checkFileExists(properFilenamePath))
  ) {
    throw new Error(errorMessage);
  }

  await fs.rename(wrongFilePath, properFilenamePath);
};

await rename();
