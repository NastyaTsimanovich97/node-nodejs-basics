import fs from "fs/promises";
import { checkFileExists } from "../util/checkFileExists.util.js";

const read = async () => {
  // Write your code here
  const errorMessage = "FS operation failed";
  const path = "./src/fs/files/fileToRead.txt";

  if (!(await checkFileExists(path))) {
    throw new Error(errorMessage);
  }

  const content = await fs.readFile(path, "utf-8");

  console.log(content);
};

await read();
