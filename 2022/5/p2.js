import { readFileSync } from "fs";

const contents = readFileSync("data.txt", "utf-8");
const arr = contents.split(/\r?\n/);

let stacks = [
    ["Q", "W", "P", "S", "Z", "R", "H", "D"],
    ["V", "B", "R", "W", "Q", "H", "F"],
    ["C", "V", "S", "H"],
    ["H", "F", "G"],
    ["P", "G", "J", "B", "Z"],
    ["Q", "T", "J", "H", "W", "F", "L"],
    ["Z", "T", "W", "D", "L", "V", "J", "N"],
    ["D", "T", "Z", "C", "J", "G", "H", "F"],
    ["W", "P", "V", "M", "B", "H"],
]

let rearrangements = arr.slice(10, arr.length);

rearrangements.forEach(r => {
    let matches = r.match(/\d+/g);
    let amount = parseInt(matches[0]);
    let from = parseInt(matches[1]) - 1;
    let to = parseInt(matches[2]) - 1;

    let len = stacks[from].length;
    stacks[to].push(...stacks[from].splice(len - amount, len));
});

let result = stacks.map(s => {
    return s[s.length-1];
});

console.log(result.join(""));




