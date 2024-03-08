const burger = document.querySelector(".main-promo__burger");
const burgerCover = document.querySelector(".burger-cover");

const closeBtn = document.querySelector(".burger-cover__burger-menu__close");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  burgerCover.style.display = "block";
  burger.style.display = "none";
  body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  burgerCover.style.display = "none";
  burger.style.display = "flex";
  body.style.overflow = "auto";
});
