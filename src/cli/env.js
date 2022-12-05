const parseEnv = () => {
  const variablesString = Object.entries(process.env)
    .filter(([variable]) => variable.startsWith('RSS_'))
    .map(([variable, value]) => `${variable}=${value};`)
    .join(' ');

  console.log(variablesString);
};

parseEnv();
