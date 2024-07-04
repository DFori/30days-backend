#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
let playerName;

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow(
    "Who wants to be a JavaScript Millionaire?\n"
  );
  await sleep();
  rainbowTitle.start();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}
    I am a processor on your computer.
    If you get any question wrong i will be ${chalk.bgRed("KILLED")}
    So get all the questions right...
    `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "player name",
    type: "input",
    message: "what is your name",

    default() {
      return "Player";
    },
  });

  playerName = answers["player name"];
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "When was JavaScript released?\n",
    choices: [
      "May 23rd, 1995",
      "Nov 24th, 1995",
      "Dec 4th, 1995",
      "Dec 17th, 1996",
    ],
  });
  console.log(answers["question_1"]);
  return handleAnswer(answers["question_1"] == "Dec 4th, 1995");
}
async function question2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "How long did it take to create JavaScript\n",
    choices: ["10 weeks", "10 days", "10 years", "10 months"],
  });
  return handleAnswer(answers["question_2"] == "10 days");
}
async function question3() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "What is the real name of JavaScript",
    choices: ["EchmaScript", "TypeScript", "LavaScript", "Java"],
  });
  return handleAnswer(answers["question_3"] == "EchmaScript");
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("checking answer...").start();
  await sleep();
  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

function winner() {
  console.clear();
  const msg = `Congrats, ${playerName}\n$1,000,000`;
  figlet(msg, (err, data) => {
    console.clear();
    console.log(gradient.pastel.multiline(data));
  });
}

await welcome();
await askName();
await question1();
await question2();
await question3();
await winner();
console.log();
