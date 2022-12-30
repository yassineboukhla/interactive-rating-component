// #####################################################################
// This part of code controls the rating background change when clicking
let color = "rgb(149, 158, 172)";
let rating = "";
function changeBackground(element) {
  if (rating == "" || rating == element.textContent) {
    if (element.style.backgroundColor == color) {
      element.style.backgroundColor = "hsl(213, 14%, 25%)";
      rating = "";
    } else {
      element.style.backgroundColor = color;
      rating = element.textContent;
    }
  }
}
// ####################################################################
let card = document.querySelector(".card");
let cardThankyou = document.querySelector(".card-thankyou");
let ratingParagraph = document.querySelector(".card-thankyou-rating");
function showThankYou() {
  if (rating != "") {
    card.classList.add("hidden");
    cardThankyou.classList.remove("hidden");
    ratingParagraph.textContent = `You selected ${rating} out of 5`;
  } else {
    alert("You should select a rating first!");
  }
}
