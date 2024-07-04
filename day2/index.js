#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

async function welcome() {
  let message = chalkAnimation.radar("Day 2 of gdsc 30 days of code");
}
welcome();
