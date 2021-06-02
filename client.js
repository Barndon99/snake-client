const net = require("net");
const consts = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: consts.IP,
    port: consts.PORT
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

  conn.on('data', (data) => {
    console.log('This data is coming from server: ', data);
  });

  return conn;
};

module.exports = connect;