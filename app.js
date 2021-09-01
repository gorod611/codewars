const traverseTCPStates = require("./tasks/20210901-fsm/index");

console.log(
  traverseTCPStates([
    "APP_PASSIVE_OPEN",
    "RCV_SYN",
    "RCV_ACK",
    "APP_CLOSE",
    "APP_SEND",
  ])
);
