import { readFileSync } from "fs";

const contents = readFileSync("data.txt", "utf-8");
const arr = contents.split(/\r?\n/);

function score(c) {
    let s = 0;
    if (c == c.toUpperCase()) {
        s = 26;
        c = c.toLowerCase();
    }
    s += c.charCodeAt(0) - 96;
    return s;
}

let scores = arr.map(item => {
    let first = item.substr(0, item.length / 2);
    let second = item.substr(item.length / 2, item.length);
    for (var i = 0; i < first.length; i++) {
        let c = first.charAt(i)
        if (second.includes(c)) {
            return score(c);
        }
    }
});

console.log(scores.reduce((partialSum, a) => partialSum + a, 0));


