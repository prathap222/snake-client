const net = require('net');


    const connect = () => {
      const name = 'Name: SP';
      const moveUp = 'Move: up';
      const moveRight = 'Move: right';
      const moveDown = 'Move: down';
      const moveLeft = 'Move: left';

  const conn = net.createConnection({
    host: "10.0.2.15", 
    port: 50541
  });

  conn.setEncoding('utf8'); 
  
  conn.write(`${name}`);


  setInterval(() => { conn.write(`${moveUp}`)}, 3000);
  setInterval(() => { conn.write(`${moveRight}`)}, 1000);
  setInterval(() => { conn.write(`${moveDown}`)}, 1000);
  setInterval(() => { conn.write(`${moveLeft}`)}, 1000);

  conn.on('data', (data) => {
    console.log("Received: " + data);
  });

  conn.on('connect', (data) => {
    console.log("You are connected :)");
  });



  return conn;
}

module.exports = connect;