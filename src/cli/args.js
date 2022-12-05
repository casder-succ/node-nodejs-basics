const parseArgs = () => {
  const args = {};

  process.argv.slice(2)
    .forEach((value, index, array) => {
      if (value.startsWith('--')) {
        if (array[array.length - 1] !== value && !array[index + 1].startsWith('--')) {
          args[value.slice(2)] = array[index + 1];
        }
      }
    });

  const result = Object.entries(args)
    .map(([key, value]) => `${key} is ${value}`)
    .join(', ');

  console.log(result);
};

parseArgs();
