import fs from "fs/promises";
import { checkFileExists } from "../util/checkFileExists.util.js";

const list = async () => {
  // Write your code here
  const errorMessage = "FS operation failed";
  const path = "./src/fs/files";

  if (!(await checkFileExists(path))) {
    throw new Error(errorMessage);
  }

  const files = await fs.readdir(path);

  console.log(files);
};

await list();
