import { Transform, pipeline } from "stream";

const transform = async () => {
  // Write your code here
  const transformStream = new Transform({
    transform(chunk, _encoding, callback) {
      const value = chunk.toString().trim();
      callback(null, value.split("").reverse().join("") + "\n");
    },
  });

  pipeline(process.stdin, transformStream, process.stdout, (err) => {
    if (err) throw err;
  });
};

await transform();
