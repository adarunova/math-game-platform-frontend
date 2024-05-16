const messages = {
    win: "ОГО ВАУ",
    loss: "НЕ ПРАВИЛЬНО :(",
    decided: "ЭТУ ЗАДАЧУ УЖЕ РЕШИЛИ!"
}

const taskConditions = ["Задача 1", "Задача 2", "Задача 3",
                        "Задача 4", "Задача 5", "Задача 6",
                        "Задача 7", "Задача 8", "Задача 9",
                        "Задача 10", "Задача 11", "Задача 12",
                        "Задача 13", "Задача 14", "Задача 15",
                        "Задача 16", "Задача 17", "Задача 18",
                        "Задача 19", "Задача 20", "Задача 21",
                        "Задача 22", "Задача 23", "Задача 24"
];

const gameOverWiners = {
    firstWin: "Победила 1 команда!",
    secondWin: "Победила 2 команда!",
    draw: "Ничья!",
    score: "Количество баллов: "
};

const scoreZeroSetting = {
    teamFirst: "Команда 1 Счет 000",
    teamSecond: "Команда 2 Счет 000",
    oneTeam: "Счет 000"
}

const writeDownScoreWords = {
    team: "Команда ",
    score: " Счет "
}

const flowersColors = [
    "#cf3636", "#de6868", "#eba97a", "#f5771d",
    "#f5cf45", "#3dbfab", "#76c6e3", "#3d9cbf",
    "#3e67b5", "#8b72b8", "#8a4df7", "#7e18a8",
    "#cd91e6", "#d175c3", "#a61f91"
]

const tasksByThemes = {
    theme1: ["Задача 1.1", "Задача 1.2", "Задача 1.3", "Задача 1.4", "Задача 1.5", "Задача 1.6"],
    theme2: ["Задача 2.1", "Задача 2.2", "Задача 2.3", "Задача 2.4", "Задача 2.5", "Задача 2.6"],
    theme3: ["Задача 3.1", "Задача 3.2", "Задача 3.3", "Задача 3.4", "Задача 3.5", "Задача 3.6"],
    theme4: ["Задача 4.1", "Задача 4.2", "Задача 4.3", "Задача 4.4", "Задача 4.5", "Задача 4.6"]
}

const themeNames = ["Тема 1", "Тема 2", "Тема 3", "Тема 4"]


export {messages, taskConditions, gameOverWiners, scoreZeroSetting, writeDownScoreWords, flowersColors, tasksByThemes, themeNames }