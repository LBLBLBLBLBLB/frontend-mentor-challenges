const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const pmIc = document.querySelectorAll(".pm-ic");

questions.forEach((question, index) =>
  question.addEventListener("click", () => {
    answers[index].classList.toggle("show");
    pmIc[index * 2].classList.toggle("hide");
    pmIc[index * 2 + 1].classList.toggle("hide");
  })
);
