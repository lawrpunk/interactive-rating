const ratingContainer = document.querySelector(".rating-container");
const creditsContainer = document.querySelector(".credits-container");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const creditsRating = document.querySelector(".credits-rating");
let ratingNum = "";
let btnPressed = false;

function removeClicked() {
  ratingBtns.forEach((btn) => btn.classList.remove("rating-btn-clicked"));
}

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    removeClicked();
    this.classList.add("rating-btn-clicked");
    ratingNum = event.target.innerHTML;
    btnPressed = true;
  });
});

submitBtn.addEventListener("click", function (event) {
  if (btnPressed) {
    ratingContainer.classList.add("hide");
    creditsRating.textContent = `You selected ${ratingNum} out of 5`;
    creditsContainer.classList.remove("hide");
  }
});
