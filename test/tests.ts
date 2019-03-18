import { BuidlerRuntimeEnvironment } from "@nomiclabs/buidler/types";
import { assert } from "chai";

declare module "mocha" {
  interface Context {
    env: BuidlerRuntimeEnvironment;
  }
}

describe("BuidlerRuntimeEnvironment extension", function() {
  let exampleBuidlerRuntimeEnvironmentFieldClass: any;

  before("Buidler project setup", async function() {
    process.chdir(__dirname + "/buidler-project");
    process.env.BUIDLER_NETWORK = "develop";

    this.env = require("@nomiclabs/buidler");

    // The plugins' index must not be imported before the lib,
    // as it needs Buidler to be initialized.
    const {
      ExampleBuidlerRuntimeEnvironmentField
    } = await import("../src/index");

    exampleBuidlerRuntimeEnvironmentFieldClass = ExampleBuidlerRuntimeEnvironmentField;
  });

  it("It should add the example field", async function() {
    assert.instanceOf(
      this.env.example,
      exampleBuidlerRuntimeEnvironmentFieldClass
    );
  });

  it("The example filed should say hello", function() {
    assert.equal(this.env.example.sayHello(), "hello");
  });
});
