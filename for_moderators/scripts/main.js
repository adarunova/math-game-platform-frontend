const createEvent = document.querySelector(".add-new-event-svg");
const createEventPopUp = document.querySelector(".popup-add-event");

const eventfilters = document.querySelector(".filters");
const eventfiltersPopUp = document.querySelector(".popup-filter");

const eventInfo = document.querySelectorAll(".events-object");
const eventInfoPopUp = document.querySelector(".popup-event-info");

const eventEdit = document.querySelector(".edit-event");
const eventEditDone = document.querySelector(".edit-event-done");
const eventEditDelete = document.querySelector(".edit-event-delete");


function popUpHandle(popUp, btn) {
    btn.addEventListener("click", () => {
        if (Array.from(popUp.classList).includes("popup_active")) {
            popUp.classList.remove("popup_active");
            document.body.style.overflow = "visible";
        } else {
            popUp.classList.add("popup_active");
            document.body.style.overflow = "hidden";
        }
    });

    popUp.addEventListener('click', function (event) {
        if ( event.target.classList.contains("popup") ) {
            popUp.classList.remove("popup_active");
        }
    })
}

popUpHandle(createEventPopUp, createEvent)
popUpHandle(eventfiltersPopUp, eventfilters)
for (let i = 0; i < 9; i++) {
    popUpHandle(eventInfoPopUp, Array.from(eventInfo)[i])
}


eventEdit.addEventListener('click', () => {
    const inputElements = eventInfoPopUp.querySelectorAll(".popup-input");
    const inputElementsCount = 6;
    for (let i = 0; i < inputElementsCount; i++) {
        Array.from(inputElements)[i].removeAttribute("disabled");
        console.log(Array.from(inputElements)[i]);
    }
    eventEditDone.style.visibility = "visible";
    eventEdit.style.visibility = "hidden";
    eventEditDone.style.opacity = "1";
    eventEdit.style.opacity = "0";
    eventEditDelete.style.visibility = "visible";
    eventEditDelete.style.opacity = "1";
})
