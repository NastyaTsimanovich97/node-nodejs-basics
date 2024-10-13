import fs from "fs/promises";
import { checkFileExists } from "../util/checkFileExists.util.js";

const remove = async () => {
  // Write your code here
  const errorMessage = "FS operation failed";
  const path = "./src/fs/files/fileToRemove.txt";

  if (!(await checkFileExists(path))) {
    throw new Error(errorMessage);
  }

  await fs.rm(path);
};

await remove();
