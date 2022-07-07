let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  } else if( input === 'w') {
    connection.write('Move: up');
  } else if( input === 'a') {
    connection.write('Move: left');
  } else if( input === 's') {
    connection.write('Move: down');
  } else if( input === 'd') {
    connection.write('Move: right');
  }
};

module.exports = setupInput;