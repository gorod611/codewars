// https://www.codewars.com/kata/54acc128329e634e9a000362
const traverseTCPStates = (eventList) => {
  const [
    CLOSED,
    LISTEN,
    SYN_SENT,
    SYN_RCVD,
    ESTABLISHED,
    CLOSE_WAIT,
    LAST_ACK,
    FIN_WAIT_1,
    FIN_WAIT_2,
    CLOSING,
    TIME_WAIT,
  ] = [
    "CLOSED",
    "LISTEN",
    "SYN_SENT",
    "SYN_RCVD",
    "ESTABLISHED",
    "CLOSE_WAIT",
    "LAST_ACK",
    "FIN_WAIT_1",
    "FIN_WAIT_2",
    "CLOSING",
    "TIME_WAIT",
  ];
  const EVENTS = {
    APP_PASSIVE_OPEN: { [CLOSED]: LISTEN },
    APP_ACTIVE_OPEN: { [CLOSED]: SYN_SENT },
    APP_SEND: { [LISTEN]: SYN_SENT },
    APP_CLOSE: {
      [LISTEN]: CLOSED,
      [SYN_RCVD]: FIN_WAIT_1,
      [SYN_SENT]: CLOSED,
      [ESTABLISHED]: FIN_WAIT_1,
      [CLOSE_WAIT]: LAST_ACK,
    },
    APP_TIMEOUT: { [TIME_WAIT]: CLOSED },
    RCV_SYN: { [LISTEN]: SYN_RCVD, [SYN_SENT]: SYN_RCVD },
    RCV_ACK: {
      [SYN_RCVD]: ESTABLISHED,
      [FIN_WAIT_1]: FIN_WAIT_2,
      [CLOSING]: TIME_WAIT,
      [LAST_ACK]: CLOSED,
    },
    RCV_SYN_ACK: { [SYN_SENT]: ESTABLISHED },
    RCV_FIN: {
      [ESTABLISHED]: CLOSE_WAIT,
      [FIN_WAIT_1]: CLOSING,
      [FIN_WAIT_2]: TIME_WAIT,
    },
    RCV_FIN_ACK: { [FIN_WAIT_1]: TIME_WAIT },
  };
  var state = "CLOSED";

  return eventList.reduce((startState, event, index, array) => {
    if (Object.keys(EVENTS[event]).includes(startState)) {
      return EVENTS[event][startState];
    } else {
      return "ERROR";
    }
  }, state);
};

module.exports = traverseTCPStates;
