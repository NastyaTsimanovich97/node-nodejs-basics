import fs from "fs/promises";
import { checkFileExists } from "../util/checkFileExists.util.js";

const copy = async () => {
  // Write your code here
  const errorMessage = "FS operation failed";
  const source = "./src/fs/files";
  const destination = "./src/fs/files_copy";

  if ((await checkFileExists(destination)) || !(await checkFileExists(source))) {
    throw new Error(errorMessage);
  }

  await fs.cp(source, destination, { recursive: true });
};

await copy();
