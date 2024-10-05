import { fork, spawn } from "child_process";

const __dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
  // Write your code here

  spawn("node", [`${__dirname}/files/script.js`, ...args], {
    stdio: "inherit",
  });

  // -----OTHER SOLUTION WITH fork-----
  // fork(`${__dirname}/files/script.js`, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", "test", "IPC", "fork"]);
