import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  // Write your code here
  const unzip = createUnzip();
  const source = createReadStream("./src/zip/files/archive.gz");
  const destination = createWriteStream("./src/zip/files/fileToCompress.txt");

  pipeline(source, unzip, destination, (err) => {
    if (err) throw err;
  });
};

await decompress();
