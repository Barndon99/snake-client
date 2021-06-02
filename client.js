const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connected to server...');
  });
  // send name to the server
  conn.on('connect', () => {
    conn.write('Name: BR');
  });

  conn.on('connect', () => {
    conn.write('Move: up');
    setTimeout(() => {conn.write('Move: left')}, 1000);
  });

  conn.on('data', (data) => {
    console.log('This data is coming from server: ', data);
  });

  return conn;
};

module.exports = {connect};