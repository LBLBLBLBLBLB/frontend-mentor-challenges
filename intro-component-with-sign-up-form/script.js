const submitBtn = document.getElementById("submit-btn");
const inputs = document.querySelectorAll(".input");
const form = document.getElementById("form");
const errorMessage = document.querySelectorAll(".error");

const validateInputs = (event) => {
  event.preventDefault();
  let allFilled = true;

  inputs.forEach((inp, index) => {
    if (inp.value === "") {
      allFilled = false;
      inp.style.border = "1px solid hsl(0, 100%, 74%)";
      errorMessage[index].style.visibility = "visible";
    } else {
      inp.style.border = "none";
      errorMessage[index].style.visibility = "hidden";
    }
  });
  allFilled && form.reset();
};

submitBtn.addEventListener("click", validateInputs);
