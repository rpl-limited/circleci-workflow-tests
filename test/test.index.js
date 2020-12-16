const {assert} = require("chai");
const {it} = require("mocha");

const {helloworld} = require("../");

it("should return an hello world string", () => {
  assert.equal("Hello world", helloworld());
});
