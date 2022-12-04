import {readFileSync} from "fs";

function play(opponent, result) {
    let you;

    if (opponent === Sign.Rock && result === PlayResult.Win)  you = Sign.Paper
    if (opponent === Sign.Rock && result === PlayResult.Lose) you = Sign.Scissors
    if (opponent === Sign.Rock && result === PlayResult.Draw) you = Sign.Rock

    if (opponent === Sign.Paper && result === PlayResult.Win)  you = Sign.Scissors
    if (opponent === Sign.Paper && result === PlayResult.Lose) you = Sign.Rock
    if (opponent === Sign.Paper && result === PlayResult.Draw) you = Sign.Paper

    if (opponent === Sign.Scissors && result === PlayResult.Win)  you = Sign.Rock
    if (opponent === Sign.Scissors && result === PlayResult.Lose) you = Sign.Paper
    if (opponent === Sign.Scissors && result === PlayResult.Draw) you = Sign.Scissors

    let score = 0;
    if (you === Sign.Rock) score = 1
    if (you === Sign.Paper) score = 2
    if (you === Sign.Scissors) score = 3

    if (result === PlayResult.Win) score += 6
    if (result === PlayResult.Lose) score += 0
    if (result === PlayResult.Draw) score += 3

    return score;
}

const Sign = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
}


const PlayResult = {
    Win: "Win",
    Lose: "Lose",
    Draw: "Draw"
}

function decryptPlayResult(a) {
    let res;
    switch (a) {
        case "X":
            res = PlayResult.Lose;
            break;
        case "Y":
            res = PlayResult.Draw;
            break;
        case "Z":
            res = PlayResult.Win;
            break;
    }
    return res;
}

function decryptSign(a) {
    let res;
    switch (a) {
        case "A":
            res = Sign.Rock;
            break;
        case "B":
            res = Sign.Paper;
            break;
        case "C":
            res = Sign.Scissors;
            break;
    }
    return res;
}

const contents = readFileSync("2022/2/data.txt", "utf-8");
const arr = contents.split(/\r?\n/);

let totalScore = 0;
arr.forEach(item => {
    let chars = item.split(" ");
    let opponent = decryptSign(chars[0]);
    let playResult = decryptPlayResult(chars[1]);
    totalScore += play(opponent, playResult);
})

console.log("Total Score: " + totalScore)

