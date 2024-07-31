const form = document.getElementById("form");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.querySelector(".error");

const validateForm = (event) => {
  event.preventDefault();
  if (email.value === "") {
    errorMsg.style.visibility = "visible";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  } else {
    errorMsg.style.visibility = "hidden";
    email.style.border = "1px solid hsl(223, 100%, 88%)";
    form.reset();
  }
};

submitBtn.addEventListener("click", validateForm);
