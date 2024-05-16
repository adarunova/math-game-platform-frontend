const eventField = document.querySelector(".popup_event");
const eventInfoPopUp = document.querySelector(".popup_user_info");

const games = document.querySelector(".game-list");
const gamesList = Array.from(games.querySelectorAll("li"));
const gameCount = 4;

const events = document.querySelector(".event-list");
const eventsList = Array.from(events.querySelectorAll("li"));
// прописать отдельную функцию создания ивентов, где можно было бы вешать
// открытие поп-апа и прописать заполнение попапов в зависимости от параметров ивента

for (let i = 0; i < gameCount; ++i) {
    gamesList[i].addEventListener('click', () => {
        eventField.style.visibility = "visible";
        eventField.style.opacity = "1";
    })
}

eventField.addEventListener('click', function (event) {
    if ( event.target.classList.contains("popup") ) {
        eventField.style.visibility = "hidden";
        eventField.style.opacity = "0";
    }
})


