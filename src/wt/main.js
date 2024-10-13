import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  // Write your code here
  const cpus = os.cpus();
  const startNumber = 10;

  const result = Array(cpus).fill({ status: "pending", data: null });

  const promises = cpus.map((_, index) => {
    const n = startNumber + index;

    return new Promise((resolve) => {
      const worker = new Worker("./src/wt/worker.js", {
        workerData: n,
      });

      worker.on("message", (data) => {
        result[index] = {
          status: "resolved",
          data,
        };

        resolve();
      });

      worker.on("error", () => {
        result[index] = {
          status: "error",
          data: null,
        };

        resolve();
      });
    });
  });

  await Promise.all(promises);

  console.log(result);
};

await performCalculations();
