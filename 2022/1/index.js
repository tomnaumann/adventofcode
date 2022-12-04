import {readFileSync} from 'fs';

const contents = readFileSync("2022/1/data.txt", 'utf-8');
const arr = contents.split(/\r?\n/);

let elf = 1;
let calories = 0;
let maxElf = 0;
let maxCalories = 0;
arr.forEach(item => {
    if (!item) {
        if (calories > maxCalories) {
            maxElf = elf;
            maxCalories = calories;
        }
        elf++;
        calories = 0;
        return;
    }
    calories += parseInt(item);
})

console.log("Elf " + maxElf + " carries the most calories (" + maxCalories + ").")