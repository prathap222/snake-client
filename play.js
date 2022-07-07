
const connect = require('./client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', userInput)
  return stdin;
};

const userInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
setupInput();
connect();