const signupForm = document.querySelector(".form-inputs");
const loginForm = document.querySelector(".form-login");
const signInBtn = document.querySelector(".signin-btn");
const logInBtn = document.querySelector(".login-btn");
const formHeader = document.querySelector(".form-header");

signInBtn.addEventListener("click", () => {
  loginForm.style.transform = "translateX(0px)";
  signupForm.style.transform = "translateX(-350px)";
  formHeader.innerHTML = `login here`;
});
logInBtn.addEventListener("click", () => {
  loginForm.style.transform = "translateX(330px)";
  signupForm.style.transform = "translateX(0px)";
  formHeader.innerHTML = `signup here`;
});
