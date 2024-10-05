import fs from "fs";

const write = async () => {
  // Write your code here
  const ws = fs.createWriteStream("./src/streams/files/fileToWrite.txt");
  process.stdin.pipe(ws);
};

await write();
