const emailInput = document.querySelector("#email");
const submit = document.querySelector("#form > .btn");
const newsletter = document.querySelector("#newsletter");
const successPopup = document.querySelector("#success");
const errorMessage = document.querySelector("#error");
const dismissBtn = document.querySelector("#close-btn");
let enteredEmail = document.querySelector(".entered-email");

emailInput.addEventListener("keyup", () => {
  if (emailInput.value == "") {
    removeErrors();
  }
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const email = emailInput.value;
  if (regEx.test(email)) {
    removeErrors();
  }
});

submit.addEventListener("click", () => {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const email = emailInput.value;
  if (regEx.test(email)) {
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
