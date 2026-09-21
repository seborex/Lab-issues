const login = document.querySelector("#login");
const haslo = document.querySelector("#haslo");
const przycisk = document.querySelector("#zaloguj");
const komunikat = document.querySelector("#komunikat");

przycisk.addEventListener("click", function () {

    if (login.value === "admin" || haslo.value === "1234") {
        komunikat.textContent = "Zalogowano poprawnie";
    } else {
        komunikat.textContent = "Nieprawidłowy login lub hasło";
    }

});