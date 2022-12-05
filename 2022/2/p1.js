import {readFileSync} from "fs";

function play(a, b) {
    let score = 0;
    if (b === Sign.Rock) score = 1
    if (b === Sign.Paper) score = 2
    if (b === Sign.Scissors) score = 3

    if (a === Sign.Rock && b === Sign.Rock) score += 3
    if (a === Sign.Rock && b === Sign.Paper) score += 6
    if (a === Sign.Rock && b === Sign.Scissors) score += 0

    if (a === Sign.Paper && b === Sign.Rock) score += 0
    if (a === Sign.Paper && b === Sign.Paper) score += 3
    if (a === Sign.Paper && b === Sign.Scissors) score += 6

    if (a === Sign.Scissors && b === Sign.Rock) score += 6
    if (a === Sign.Scissors && b === Sign.Paper) score += 0
    if (a === Sign.Scissors && b === Sign.Scissors) score += 3

    return score;
}

const Sign = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
}

function decrypt(a) {
    let res;
    switch (a) {
        case "A":
        case "X":
            res = Sign.Rock;
            break;
        case "B":
        case "Y":
            res = Sign.Paper;
            break;
        case "C":
        case "Z":
            res = Sign.Scissors;
            break;
    }
    return res;
}

const contents = readFileSync("data.txt", "utf-8");
const arr = contents.split(/\r?\n/);

let totalScore = 0;
arr.forEach(item => {
    let signs = item.split(" ");
    let opponent = decrypt(signs[0]);
    let you = decrypt(signs[1]);
    totalScore += play(opponent, you);
})

console.log("Total Score: " + totalScore)

