import { messages, writeDownScoreWords } from "../../common_scripts/messages.js"
import { isTheEnd } from "./main.js"

const taskText = document.querySelector(".task-text");
let scoreString = "";
const zeroCount = 3;

function writeDownScore(scoreText, teamNumber, score, gameInfo, result) {
    if (score < 0) {
        scoreText.textContent = writeDownScoreWords["team"] + teamNumber + writeDownScoreWords["score"] + score;
    } else {
        scoreString = String(score).padStart(zeroCount, "0");
        scoreText.textContent = writeDownScoreWords["team"] + teamNumber +
        writeDownScoreWords["score"] + scoreString;
    }
    if (result === "win") {
        taskText.textContent = messages["win"];
    } else {
        taskText.textContent = messages["loss"];
    }
    if (teamNumber === 1) {
        gameInfo.teamsScores[0] = score;
    } else {
        gameInfo.teamsScores[1] = score;
    }
    console.log("writeDownScore1", gameInfo)
    gameInfo = isTheEnd(gameInfo);
    console.log("writeDownScore2", gameInfo)
    return gameInfo;
}

export { writeDownScore };
