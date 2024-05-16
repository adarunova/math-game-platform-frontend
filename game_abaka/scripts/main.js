import { writeDownScore } from "./write-down-score.js"
import { messages, taskConditions, gameOverWiners, scoreZeroSetting, tasksByThemes, themeNames } from "../../common_scripts/messages.js"
import { win } from "./win-scoring.js"
import { loss } from "./loss-scoring.js"

const themeNameList = document.querySelectorAll(".theme__name");
const themeList = document.querySelectorAll(".theme");
const taskText = document.querySelector(".task-text");
const buttonTrue = document.querySelector(".win");
const buttonFalse = document.querySelector(".loss");
const popUp = document.querySelector(".popup");
const buttonFirstTeam = document.querySelector(".popup-first-team");
const buttonSecondTeam = document.querySelector(".popup-second-team");

const scoreFirstTeam = document.querySelector(".score_team-1");
const scoreSecondTeam = document.querySelector(".score_team-2");

const popUpGameOver = document.querySelector(".popup_game_over");
const popUpGameOverText = document.querySelector(".popup-text-winner");
const buttonRepeatGame = document.querySelector(".repeat");


const themeCount = 4
let currentTask = [];
let gameInfo = {
    teamsScores: [0, 0],
    passedTheme: [0, 0, 0, 0]

}
let teamsScores = [0, 0];
let passedTheme = [0, 0, 0, 0]

for (let i = 0; i < themeCount; ++i) {
    themeNameList[i].textContent = themeNames[i]
}

function isTheEnd(gameInfo) {
    if (!gameInfo.passedTheme.some((elem) => elem === 0)) {
        popUpGameOver.classList.add("popup_is-opened");
        if (gameInfo.teamsScores[0] > gameInfo.teamsScores[1]) {
            popUpGameOverText.textContent = gameOverWiners["firstWin"];
        } else if (gameInfo.teamsScores[0] < gameInfo.teamsScores[1]) {
            popUpGameOverText.textContent = gameOverWiners["secondWin"];
        } else {
            popUpGameOverText.textContent = gameOverWiners["draw"];
        }
        buttonRepeatGame.addEventListener("click", function (event) {
            themeList.forEach((theme) => {
                const themeContainer = theme.querySelector(".theme-container");
                const taskList = themeContainer.querySelectorAll(".task");
                taskList.forEach((task) => {
                    task.classList.remove("opened");
                    task.classList.remove("passed");
                    task.style.fill = "var(--square-color)"
                })
            });
            popUpGameOver.classList.remove("popup_is-opened");
            currentTask = [];
            teamsScores =  writeDownScore(scoreFirstTeam, 1, 0,
                gameInfo, "win");
            teamsScores =  writeDownScore(scoreSecondTeam, 2, 0,
                gameInfo, "win");
        });
        gameInfo.passedTheme = [0, 0, 0, 0]
    }
    return gameInfo
    
}

function openNextTask(themeContainer) {
    const taskList = themeContainer.querySelectorAll(".task");
    const taskIdxOpened = Array.from(taskList).findIndex(el => !Array.from(el.classList).includes("opened"));
    const taskIdxPassed = Array.from(taskList).findIndex(el => !Array.from(el.classList).includes("passed"));
    if (taskIdxOpened !== -1) {
        if (taskIdxOpened === taskIdxPassed) {
            taskList[taskIdxOpened].classList.add("opened");
            taskList[taskIdxOpened].style.fill = "var(--square-no-passed-color)";
        }
    }
    currentTask = ["theme"+Array.from(themeContainer.classList)[1].slice(-1), taskIdxPassed];
    taskText.textContent = tasksByThemes[currentTask[0]][currentTask[1]]
}

function scorePreprocessor(flag) {
    const theme = document.querySelector(".theme-"+currentTask[0].slice(-1))
    const themeContainer = theme.querySelector(".theme-container");
    const taskList = themeContainer.querySelectorAll(".task");

    popUp.classList.add("popup_is-opened");
    popUp.addEventListener("click", function (event) {
        popUp.classList.remove("popup_is-opened");
    });
    if (currentTask[1] === 5) {
        gameInfo.passedTheme[Number(Array.from(themeContainer.classList[1]).slice(-1)) - 1] = 1
    }
    if (flag === "win") {
        buttonFirstTeam.onclick = function() {
            gameInfo = win(1, gameInfo, currentTask, taskList[currentTask[1]], themeContainer);
            // isTheEnd(gameInfo);
        };
        buttonSecondTeam.onclick = function()  {
            gameInfo = win(2, gameInfo, currentTask, taskList[currentTask[1]], themeContainer);
            // isTheEnd(gameInfo);
        };
    } else {
        buttonFirstTeam.onclick = function() {
            gameInfo = loss(gameInfo, currentTask, taskList[currentTask[1]], 1, themeContainer);
            // isTheEnd(gameInfo);
        };
        buttonSecondTeam.onclick = function()  {
            gameInfo = loss(gameInfo, currentTask, taskList[currentTask[1]], 2, themeContainer);
            // isTheEnd(gameInfo);
        };
    }
    
}

// повесили слушатели на поля с темами, открывается каждый раз новая задача
//
// не работает переход на игру абака с некоторых игр, хотя есть ссылки на индекс страницы

themeList.forEach((theme) => {
    const themeContainer = theme.querySelector(".theme-container");
    themeContainer.onclick = () => openNextTask(themeContainer);
})

buttonTrue.onclick = () => scorePreprocessor("win");
buttonFalse.onclick = () => scorePreprocessor("loss");

export { isTheEnd }