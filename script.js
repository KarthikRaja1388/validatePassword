let emailField = document.querySelector(".email");
let pwdField = document.querySelector(".pwd");
let btnSubmit = document.querySelector(".btn");
let display = document.querySelector(".display");

btnSubmit.addEventListener("click", (event) => {
  let email = emailField.value;
  let pwd = pwdField.value;
  event.preventDefault();
  validate(email, pwd);
});

function validate(email, password) {
  if (email.includes("@") && password.length >= 8) {
    display.innerHTML = "Valid Email and Password";
    display.style.color = "green";
  } else {
    display.innerHTML = "Invalid Email or Password";
    display.style.color = "red";
  }
}
