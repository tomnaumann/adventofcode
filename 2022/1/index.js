import {readFileSync} from 'fs';

const topX = 3;

const contents = readFileSync("2022/1/data.txt", 'utf-8');
const arr = contents.split(/\r?\n/);

let calories = 0;
let elves = []
arr.forEach(item => {
    if (!item) {
        elves.push(calories);
        calories = 0;
        return;
    }
    calories += parseInt(item);
})
elves.push(calories);

elves = elves.sort(function (a, b) { return a - b });
let totalCalories = 0;
for (let i = 0; i < topX; i++) {
    totalCalories += elves.pop();
}

console.log("The top " + topX + " elves carry " + totalCalories + " calories.")