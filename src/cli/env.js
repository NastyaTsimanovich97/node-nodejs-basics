const parseEnv = () => {
  // Write your code here
  const prefix = "RSS_";
  const processEnv = process.env;

  for (const [key, value] of Object.entries(processEnv)) {
    if (key.startsWith(prefix)) {
      console.log(`${prefix}${key}=${value}`);
    }
  }
};

parseEnv();
