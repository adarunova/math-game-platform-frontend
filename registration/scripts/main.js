import { userInfo, UpdatePassword, UpdateProfile, RegistrateProfile, 
    UpdateEvent, DeleteEvent, GetAllEvent, CreateEvent } from "./api.js";
import { enableValidation, clearValidation } from "./validation.js";

const singUP = document.querySelector(".form-signup")
const singIN = document.querySelector(".form-signin")
const resetPassword = document.querySelector(".form-reset-password")
const resetButton = document.querySelector(".reset-password")


const sign = document.querySelector(".links")
const signObjects = sign.querySelectorAll("li")

const formSignIn = document.forms["sign-in-form"];
const formSignUp = document.forms["sign-up-form"];

const validationConfig = {
    formSelector: '.form-sign',
    inputSelector: '.form-styling',
    submitButtonSelector: '.submit-button',
    inactiveButtonClass: 'inactive__submit-button',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
};

function cleanFieldProperties(form) {
    const formElements = Array.from(form.querySelectorAll("input"));
    for (let i in formElements) {
        formElements[i].value = " ";
    }
    clearValidation(form, validationConfig)
}

signObjects[1].addEventListener("click", function () {
    if (Array.from(signObjects[1].classList).includes("signup-inactive")) {
        signObjects[1].classList.remove("signup-inactive");
        signObjects[1].classList.add("signup-active");
        if (Array.from(signObjects[0].classList).includes("signin-active")) {
            signObjects[0].classList.remove("signin-active");
            signObjects[0].classList.add("signin-inactive");
        }
        cleanFieldProperties(singIN)
        cleanFieldProperties(resetPassword)
        
        singUP.style.opacity = "1";
        singIN.style.opacity = "0";
        resetPassword.style.opacity = "0";
        singUP.style.visibility = "visible";
        singIN.style.visibility = "hidden";
        resetPassword.style.visibility = "hidden";
    }
})

signObjects[0].addEventListener("click", function () {
    if (Array.from(signObjects[0].classList).includes("signin-inactive")) {
        signObjects[0].classList.remove("signin-inactive");
        signObjects[0].classList.add("signin-active");
        if (Array.from(signObjects[1].classList).includes("signup-active")) {
            signObjects[1].classList.remove("signup-active");
            signObjects[1].classList.add("signup-inactive");
        }
        cleanFieldProperties(singUP)
        cleanFieldProperties(resetPassword)

        singUP.style.opacity = "0";
        singIN.style.opacity = "1";
        resetPassword.style.opacity = "0";
        singIN.style.visibility = "visible";
        singUP.style.visibility = "hidden";
        resetPassword.style.visibility = "hidden";
    }
})

resetButton.addEventListener("click", function () {
    console.log("here")
    if (Array.from(signObjects[0].classList).includes("signin-active")) {
        signObjects[0].classList.add("signin-inactive");
        signObjects[0].classList.remove("signin-active");
    }
    if (Array.from(signObjects[1].classList).includes("signup-active")) {
        signObjects[1].classList.remove("signup-active");
        signObjects[1].classList.add("signup-inactive");
    }
    cleanFieldProperties(singUP)
    cleanFieldProperties(singIN)
    
    singUP.style.opacity = "0";
    singIN.style.opacity = "0";
    resetPassword.style.opacity = "1";
    singIN.style.visibility = "hidden";
    singUP.style.visibility = "hidden";
    resetPassword.style.visibility = "visible";
})


// форма входа
const usernameInputSignIn = formSignIn.elements.username;
const passwordInputSignIn = formSignIn.elements.password;
const submitbuttonSignIn = formSignIn.querySelector(".btn-signin");

function handleSignInFormSubmit(evt) {
    evt.preventDefault();
    const username = usernameInputSignIn.value;
    const password = passwordInputSignIn.value;
    // LoginProfile(JSON.stringify({
    //     username: username,
    //     password: password
    // }))
    // .then((res) => {
    //     profileName.textContent = res.name;
    //     profileDescription.textContent = res.about;
    //     // submitbuttonEditProfile.disabled = true;
    //     // submitbuttonEditProfile.textContent = "Сохранение..."
    //     // closeModalWindow(editPopUp);

    //     //можно сделать запрос, чтобы увидеть фуллНейм и написать его где-нибудь
    // })
    // .catch((err) => { 
    //     console.log(err); 
    // })
    // .finally(() => {
    // });
    window.location.href = "../../index.html";
}

submitbuttonSignIn.addEventListener('click', handleSignInFormSubmit);




// форма регистрации
const fullnameInputSignUp = formSignUp.elements.fullname;
const emailInputSignUp = formSignUp.elements.email;
const passwordInputSignUp = formSignUp.elements.password;
const confirmpasswordInputSignUp = formSignUp.elements.confirmpassword;

const submitbuttonSignUp = formSignUp.querySelector(".btn-signup");

function handleSignUpFormSubmit(evt) {
    console.log("submit")
    evt.preventDefault();
    
    // const fullname = fullnameInputSignUp.value;
    // const email = emailInputSignUp.value;
    // if (passwordInputSignUp.value !== confirmpasswordInputSignUp.value) {
    //     //кинуть ошибку
    // }
    // const password = passwordInputSignUp.value;

    // RegistrateProfile(JSON.stringify({
    //     name: name,
    //     about: description
    // }))
    // .then((res) => {
    //     profileName.textContent = res.name;
    //     profileDescription.textContent = res.about;
    //     submitbuttonEditProfile.disabled = true;
    //     submitbuttonEditProfile.textContent = "Сохранение..."
    //     closeModalWindow(editPopUp);
    // })
    // .catch((err) => { 
    //     console.log(err); 
    // })
    // .finally(() => {
    //     submitbuttonEditProfile.textContent = "Сохранить";
    //     submitbuttonEditProfile.disabled = false
    // });
    window.location.href = "../../index.html";
}

submitbuttonSignUp.addEventListener('click', handleSignUpFormSubmit);

enableValidation(validationConfig)