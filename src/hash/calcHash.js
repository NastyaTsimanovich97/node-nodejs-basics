import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  // Write your code here
  const hash = crypto.createHash("sha256");
  const file = "./src/hash/files/fileToCalculateHashFor.txt";

  fs.createReadStream(file)
    .on("data", (data) => {
      hash.update(data);
    })
    .on("end", () => {
      console.log(hash.digest("hex"));
    });
};

await calculateHash();
