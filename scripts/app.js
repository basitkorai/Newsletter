const emailInput = document.querySelector("#email");
const form = document.querySelector("#form");
const newsletter = document.querySelector("#newsletter");
const successPopup = document.querySelector("#success");
const errorMessage = document.querySelector("#error");
const dismissBtn = document.querySelector("#close-btn");
let enteredEmail = document.querySelector(".entered-email");
const emailValue = emailInput.value;

emailInput.addEventListener("keyup", () => {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (emailValue == "" || regEx.test(emailValue)) {
    removeErrors();
  }

});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regEx.test(emailValue)) {
    removeErrors();
    dynamicEmail();

    successPopup.classList.add("show-success");
  } else {
    addErrors();
  }
});

dismissBtn.addEventListener("click", () => {
  emailInput.value = "";
  removeErrors();
  successPopup.classList.remove("show-success");
});

// FUNCTIONS
function addErrors() {
  errorMessage.classList.add("show-error");
  emailInput.classList.add("invalid-email");
}

function removeErrors() {
  errorMessage.classList.remove("show-error");
  emailInput.classList.remove("invalid-email");
}

function dynamicEmail() {
  enteredEmail.textContent = emailInput.value;
}
