const games = document.querySelectorAll(".game-object");
const popUpInfo = document.querySelector(".popup_info");
const gameTitleDOM = document.querySelector(".game-title");
const popUpClose = document.querySelector(".popup__close");

games.forEach((element) => {
    element.addEventListener("click", () => {
        const gameTitle = element.querySelector("h2")
        // console.log(gameTitle.textContent);
        
        popUpInfo.classList.add("popup_info-active");
        gameTitleDOM.textContent = gameTitle.textContent;

    })
});

popUpInfo.addEventListener('click', function (event) {
    if ( event.target.classList.contains("popup_info") ) {
        popUpInfo.classList.remove("popup_info-active");
    }
})

popUpClose.addEventListener("click", () => {
    popUpInfo.classList.remove("popup_info-active");
})