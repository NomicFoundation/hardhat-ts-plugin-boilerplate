// If your plugin extends types from another plugin, you should import the plugin here.

// To extend one of Hardhat's types, you need to import the module where it has been defined, and redeclare it.
import "hardhat/types/config";
import "hardhat/types/runtime";

import { ExampleHardhatRuntimeEnvironmentField } from "./ExampleHardhatRuntimeEnvironmentField";

declare module "hardhat/types/config" {
  // This is an example of an extension to one of the Hardhat config values.

  // We extend the ProjectPathsUserConfig type, which represents the `paths`
  // property as written by the users.  This is part of the HardhatUserConfig
  // type, so things are normally optional here.
  export interface ProjectPathsUserConfig {
    newPath?: string;
  }

  // We also extend the ProjectPathsConfig type, which represents the `paths`
  // property after it has been resolved.  This is the type used during the
  // execution of tasks, tests, and scripts.
  // This is part of the HardhatConfig type; normally, you don't want things to
  // be optional here, as you can apply default values using the extendConfig
  // function.
  export interface ProjectPathsConfig {
    newPath: string;
  }
}

declare module "hardhat/types/runtime" {
  // This is an example of an extension to the Hardhat Runtime Environment.
  // This new field will be available in tasks' actions, scripts, and tests.
  export interface HardhatRuntimeEnvironment {
    example: ExampleHardhatRuntimeEnvironmentField;
  }
}
