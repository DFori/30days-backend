// #!/usr/bin/env node

// import chalk from "chalk";
// import inquirer from "inquirer";
// import gradient from "gradient-string";
// import chalkAnimation from "chalk-animation";
// import figlet from "figlet";
// import { createSpinner } from "nanospinner";

// async function welcome() {
//   let message = chalkAnimation.rainbow("Day 2 of gdsc 30 days of code");
// }
// welcome();

const request = require("request");

const options = {
  method: "GET",
  url: "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
  qs: {
    distance: "100",
    vehicle: "SmallDieselCar",
  },
  headers: {
    "x-rapidapi-key": "b43c82ddb8msh42d9282887f05e4p1afa30jsnf19288455e95",
    "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
