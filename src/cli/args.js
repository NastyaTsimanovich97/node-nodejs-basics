const parseArgs = () => {
  // Write your code here
  const processArgs = process.argv.slice(2);
  const prefix = "--";

  const names = processArgs
    .filter((arg) => arg.startsWith(prefix))
    .map((arg) => arg.replace(prefix, ""));
  const values = processArgs.filter((arg) => !arg.startsWith(prefix));

  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} is ${values[i]}`);
  }
};

parseArgs();
