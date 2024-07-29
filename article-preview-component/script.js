const share = document.querySelector(".share-ic");
const popup = document.querySelector(".popup");

share.addEventListener("click", (event) => {
  const rect = share.getBoundingClientRect();
  popup.style.left = `${rect.left + rect.width / 2}px`;
  popup.style.top = `${rect.top - 10}px`;

  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
});

document.addEventListener("click", (event) => {
  if (!popup.contains(event.target) && event.target !== share) {
    popup.style.display = "none";
  }
});
