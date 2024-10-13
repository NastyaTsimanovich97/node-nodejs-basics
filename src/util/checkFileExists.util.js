import fs from "fs/promises";

export async function checkFileExists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}
