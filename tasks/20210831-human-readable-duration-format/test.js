const formatDuration = require("./index");
const Test = require("assert").strict;

describe("Tests", () => {
  it("test", () => {
    Test.equal(formatDuration(1), "1 second");
    Test.equal(formatDuration(62), "1 minute and 2 seconds");
    Test.equal(formatDuration(120), "2 minutes");
    Test.equal(formatDuration(3600), "1 hour");
    Test.equal(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});
