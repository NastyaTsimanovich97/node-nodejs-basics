import fs from "fs";

const read = async () => {
  // Write your code here
  const rs = fs.createReadStream("./src/streams/files/fileToRead.txt");

  rs.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  // ------OTHER OPTIONS TO IMPLEMENT------
  // rs.on("readable", () => {
  //   let chunk;
  //   while ((chunk = rs.read()) !== null) {
  //     process.stdout.write(chunk);
  //   }
  // });

  // for await (const chunk of rs) {
  //   process.stdout.write(chunk);
  // }
};

await read();
