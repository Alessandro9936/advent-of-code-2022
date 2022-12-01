const path = require("path");
const fs = require("fs");

const elves = fs
  .readFileSync(path.join(__dirname, "data.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n\n");

function part1() {
  const calories = elves.map((elf) => {
    const caloriesPerMeal = elf
      .split("\n")
      .map((mealCalories) => +mealCalories);
    return caloriesPerMeal.reduce((prev, cur) => (prev += cur), 0);
  });
  console.log(Math.max(...calories));
}

function part2() {
  const calories = elves.map((elf) => {
    const caloriesPerMeal = elf
      .split("\n")
      .map((mealCalories) => +mealCalories);
    return caloriesPerMeal.reduce((prev, cur) => (prev += cur), 0);
  });

  const sortByCalories = calories.sort((a, b) => b - a);

  console.log(sortByCalories.slice(0, 3).reduce((prev, cur) => prev + cur, 0));
}

part1();
part2();
