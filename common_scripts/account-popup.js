const accountPopUp = document.querySelector(".popup-account-info");
const accountUsername = accountPopUp.querySelector(".account-username");
const accountEmail = accountPopUp.querySelector(".account-email");
const accountEdit = accountPopUp.querySelector(".edit-profile");
const accountEditDone = accountPopUp.querySelector(".edit-profile-done");
const inputElements = accountPopUp.querySelectorAll(".popup-input");

const accountMainInfo = accountPopUp.querySelector(".account-main-info");
const accountEditor = accountPopUp.querySelector(".editor-account");

const accountButton = document.querySelector(".account");

accountButton.addEventListener("click", () => {
    if (Array.from(accountPopUp.classList).includes("popup_active")) {
        accountPopUp.classList.remove("popup_active");
    } else {
        accountPopUp.classList.add("popup_active");
    }
});

accountPopUp.addEventListener('click', function (event) {
    if ( event.target.classList.contains("popup") ) {
        accountPopUp.classList.remove("popup_active");
    }
})

accountEdit.addEventListener('click', () => {
    accountEditDone.style.visibility = "visible";
    accountEdit.style.visibility = "hidden";
    accountEditDone.style.opacity = "1";
    accountEdit.style.opacity = "0";

    
    accountEditor.style.visibility = "visible";
    accountEditor.style.opacity = "1";
    accountMainInfo.style.visibility = "hidden";
    accountMainInfo.style.opacity = "0";
})



// примерно начиркать апи с добавлением имени и почты ну и поля для них
// сделать мобильную версию для side-bar