// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "10.0.2.15", // IP address here,
//     port: 50541 // PORT number here,
//   });
//   conn.on('data', (data)=>{
//     console.log(data);
//   })

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

const connect = require('./client');

console.log("Connecting ...");
connect();