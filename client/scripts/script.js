const namePattern = /^[а-яёА-ЯЁa-zA-Z]+$/;
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errorMessage = "Обязательное поле!";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const textInput = document.getElementById("text");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const textError = document.getElementById("textError");
const errors = document.querySelectorAll(".error-message");

nameInput.addEventListener("input", onInputHandler);
emailInput.addEventListener("input", onInputHandler);
textInput.addEventListener("input", onInputHandler);

const form = document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    //onSubmit Validation
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const textValue = textInput.value.trim();

    errors.forEach((err) => (err.innerHTML = ""));
    nameInput.style.borderColor = "black";
    emailInput.style.borderColor = "black";
    textInput.style.borderColor = "black";

    if (!nameValue) {
      nameError.textContent = errorMessage;
      applyErrorStyles(nameError);
    } else if (!nameValue.match(namePattern)) {
      nameError.textContent = "Имя не должно содержать цифры!";
      applyErrorStyles(nameError);
    }

    if (!emailValue) {
      emailError.textContent = errorMessage;
      applyErrorStyles(emailError);
    } else if (!emailValue.match(emailPattern)) {
      emailError.textContent = "Неверный формат почты!";
      applyErrorStyles(emailError);
    }

    if (!textValue) {
      textError.textContent = errorMessage;
      applyErrorStyles(textError);
    }

    const errArr = [];

    errors.forEach((err) => {
      const innerHTML = err.innerHTML.trim();
      errArr.push(innerHTML);
    });

    if (errArr.join("").length === 0) {
      try {
        const response = await fetch("http://localhost:3000/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            message: textValue,
          }),
        });
        const data = await response.text();
        console.log("Ответ сервера:", data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }
  });

function applyErrorStyles(err) {
  const errorStyles = {
    color: "red",
    fontFamily: "sans-serif",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
  };

  if (err.id === "nameError") {
    nameInput.style.borderColor = "red";
    nameInput.style.outline = "red";
  } else if (err.id === "emailError") {
    emailInput.style.borderColor = "red";
    emailInput.style.outline = "red";
  } else if (err.id === "textError") {
    textInput.style.borderColor = "red";
    textInput.style.outline = "red";
  } else {
    console.log("empty");
  }

  for (const property in errorStyles) {
    err.style[property] = errorStyles[property];
  }
}

function onInputHandler(event) {
  const inputValue = event.target.value;
  const targetId = event.target.id;

  if (!inputValue >= 0) {
    if (targetId === "name") {
      nameError.innerHTML = "";
      nameInput.style.borderColor = "black";
    }
    if (targetId === "email") {
      emailError.innerHTML = "";
      emailInput.style.borderColor = "black";
    }
    if (targetId === "text") {
      textError.innerHTML = "";
      textInput.style.borderColor = "black";
    }
  }
}
