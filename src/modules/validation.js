const login = document.forms["form"]["login"];
const password = document.forms["form"]["password"];

const loginError = document.getElementById("loginError");
const passwordError = document.getElementById("passwordError");
const form = document.getElementById("form");

const users = [
    {
        login: "Artyom111",
        password: "Artyom222",
    },
    {
        login: "Davit111",
        password: "Davit222",
    },
    {
        login: "Sahak111",
        password: "Sahak222",
    },
];

login.addEventListener("textInput", () => {
    if (login.value.length >= 6) {
        login.style.border = "1px solid silver";
        loginError.style.display = "none";
        return true;
    }
});
password.addEventListener("textInput", () => {
    if (password.value.length >= 6) {
        password.style.border = "1px solid silver";
        passwordError.style.display = "none";
        return true;
    }
});

const validation = () => {
    if (login.value.length < 6) {
        login.style.border = "1px solid red";
        loginError.style.display = "block";
        login.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        passwordError.style.display = "block";
        password.focus();
        return false;
    }
    for (let i = 0; i < users.length - 1; i++) {
        if (login === users[i].login && password === users[i].password) {
            return alert(`welcome ${login}`);
        }
    }
    alert(`User with login ${login.value} does not exist`);
};

form.addEventListener("submit", (e) => {
    validation();
    e.preventDefault();
});
