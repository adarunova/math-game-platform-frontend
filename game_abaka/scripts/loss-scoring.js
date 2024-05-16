import { writeDownScore } from "./write-down-score.js"

const scoreFirstTeam = document.querySelector(".score_team-1");
const scoreSecondTeam = document.querySelector(".score_team-2");

function loss(gameInfo, currentTask, task, teamNumber, themeContainer) {
    task.style.fill = "var(--square-no-passed-color)";
    task.classList.add("passed");
    if (teamNumber === 1) {
        return writeDownScore(scoreFirstTeam, 1, gameInfo.teamsScores[0],
            gameInfo, "loss")
    } else if (teamNumber === 2) {
        return writeDownScore(scoreSecondTeam, 2, gameInfo.teamsScores[1],
            gameInfo, "loss")
    }
}

export { loss }