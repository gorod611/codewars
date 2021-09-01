const traverseTCPStates = require("./index");
const Test = require("assert").strict;

describe("traverseTCPStates", function () {
  it("should work for the examples", function () {
    Test.equal(
      traverseTCPStates(["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "RCV_FIN"]),
      "CLOSE_WAIT"
    );
    Test.equal(
      traverseTCPStates(["APP_PASSIVE_OPEN", "RCV_SYN", "RCV_ACK"]),
      "ESTABLISHED"
    );
    Test.equal(
      traverseTCPStates([
        "APP_ACTIVE_OPEN",
        "RCV_SYN_ACK",
        "RCV_FIN",
        "APP_CLOSE",
      ]),
      "LAST_ACK"
    );
    Test.equal(traverseTCPStates(["APP_ACTIVE_OPEN"]), "SYN_SENT");
    Test.equal(
      traverseTCPStates([
        "APP_PASSIVE_OPEN",
        "RCV_SYN",
        "RCV_ACK",
        "APP_CLOSE",
        "APP_SEND",
      ]),
      "ERROR"
    );
  });
});
