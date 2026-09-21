const login = document.querySelector("#login");
const haslo = document.querySelector("#haslo");
const wiek = document.querySelector("#wiek");
const email = document.querySelector("#email");
const przycisk = document.querySelector("#zaloguj");
const komunikat = document.querySelector("#komunikat");

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

przycisk.addEventListener("click", function () {

    if (haslo.value.length >= 8 && haslo.value.length <= 20 && login.value.length >=4 && login.value.length <=15 && parseInt(wiek.value) >=18 && regex.test(email.value)) {
        komunikat.textContent = "Zarejestrowano poprawnie";
    } else {
        komunikat.textContent = "Nieprawidłowy login lub hasło";
    }

});

