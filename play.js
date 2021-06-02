const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

let a = connect()
setupInput(a);