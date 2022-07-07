const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15", 
    port: 50541
  });

  conn.setEncoding('utf8'); //interpret data as txt
  conn.write(`spp`);

  conn.on('data', (data) => {
    console.log("Successfully connected to game server" ,data);
  })



  return conn;
};

module.exports = connect;