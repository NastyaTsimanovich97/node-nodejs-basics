import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  // Write your code here
  const gzip = createGzip();
  const source = createReadStream("./src/zip/files/fileToCompress.txt");
  const destination = createWriteStream("./src/zip/files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) throw err;
  });
};

await compress();
