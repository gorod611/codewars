const Test = require("assert").strict;
const isValidWalk = require("./index");

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    Test.ok(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      "should return true"
    );
    Test.ok(
      !isValidWalk([
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
      ]),
      "should return false"
    );
    Test.ok(!isValidWalk(["w"]), "should return false");
    Test.ok(
      !isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
      "should return false"
    );
  });
});
