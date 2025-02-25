import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { readFileSync } from "fs";
import "./files/c.js";

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(readFileSync("./src/modules/files/a.json"));
} else {
  unknownObject = JSON.parse(readFileSync("./src/modules/files/b.json"));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
