const path = require("path");
const fs = require("fs");

const plays = fs
  .readFileSync(path.join(__dirname, "data.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n");

const combinations1 = {
  "A Y": 8,
  "A X": 4,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C Y": 2,
  "C Z": 6,
  "C X": 7,
};

const combinations2 = {
  "A Y": 4,
  "B Y": 5,
  "C Y": 6,
  "A X": 3,
  "B X": 1,
  "C X": 2,
  "A Z": 8,
  "B Z": 9,
  "C Z": 7,
};

function part1() {
  console.log(plays.reduce((acc, cur) => (acc += combinations1[cur]), 0));
}

function part2() {
  console.log(plays.reduce((acc, cur) => (acc += combinations2[cur]), 0));
}

part1();
part2();
