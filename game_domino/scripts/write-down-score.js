import {isTheEnd, popUp} from "./button-click.js";
import { messages, writeDownScoreWords } from "../../common_scripts/messages.js"

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
    gameInfo = isTheEnd(gameInfo);
    if (teamNumber === 1) {
        gameInfo.teamScores[0] = score;
    } else {
        gameInfo.teamScores[1] = score;
    }
    return gameInfo;
}

export { writeDownScore };
