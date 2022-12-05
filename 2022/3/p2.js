import { readFileSync } from "fs";

const contents = readFileSync("data.txt", "utf-8");
const arr = contents.split(/\r?\n/);

function score(c) {
    let s = 0;
    if (c === c.toUpperCase()) {
        s = 26;
        c = c.toLowerCase();
    }
    s += c.charCodeAt(0) - 96;
    return s;
}

let scores = [];
for (let i = 0; i < arr.length; i+=3) {
    let s = arr[i];
    for (let sx = 0; sx < s.length; sx++) {
        let c = s.charAt(sx)
        if (arr[i+1].includes(c) && arr[i+2].includes(c)) {
            scores.push(score(c));
            break;
        }
    }
}

console.log(scores.reduce((partialSum, a) => partialSum + a, 0));
