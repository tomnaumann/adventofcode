import { readFileSync } from "fs";

const contents = readFileSync("data.txt", "utf-8");
const arr = contents.split(/\r?\n/);

function between(x, min, max) {
    return x >= min && x <= max;
}

let pairs = arr.map(item => {
    let elves = item.split(",");
    let e1 = elves[0].split("-");
    let e2 = elves[1].split("-");
    e1 = Object.freeze({ min: parseInt(e1[0]), max: parseInt(e1[1]) });
    e2 = Object.freeze({ min: parseInt(e2[0]), max: parseInt(e2[1]) });

    if (between(e1.min, e2.min, e2.max) ||
        between(e1.max, e2.min, e2.max) ||
        between(e2.min, e1.min, e1.max) ||
        between(e2.max, e1.min, e1.max)) return 1;
    return 0;
});

console.log(pairs.reduce((partialSum, a) => partialSum + a, 0));


