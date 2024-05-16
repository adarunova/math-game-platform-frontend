import { writeDownScore } from "./write-down-score.js"

const scoreFirstTeam = document.querySelector(".score_team-1");
const scoreSecondTeam = document.querySelector(".score_team-2");


function win(teamNumber, gameInfo, currentTask, task) {
    task.style.fill = "var(--square-passed-color)";
    task.classList.add("passed");
    console.log(gameInfo)
    if (teamNumber === 1) {
        return writeDownScore(scoreFirstTeam, 1, gameInfo.teamsScores[0] + (currentTask[1]+1)*10,
            gameInfo, "win")
    } else if (teamNumber === 2) {
        return writeDownScore(scoreSecondTeam, 2, gameInfo.teamsScores[1] + (currentTask[1]+1)*10,
            gameInfo, "win")
    }
}

export { win }