import fs from "fs/promises";
import { checkFileExists } from "../util/checkFileExists.util.js";

const create = async () => {
  // Write your code here
  const errorMessage = "FS operation failed";
  const content = "I am fresh and young";
  const path = "./src/fs/files/fresh.txt";

  if (await checkFileExists(path)) {
    throw new Error(errorMessage);
  }

  await fs.writeFile(path, content);
};

await create();
