
/*  модалки при покупке */
let addButtons = document.querySelectorAll(".buy-button")
const buyPopup = document.querySelector(".modal-cart");
const buyPopupClose = document.querySelector(".modal-cart-close");
const continueBtn = buyPopup.querySelector(".continue-button");
for (let i = 0; i < addButtons.length; i++) {
  let addButton = addButtons[i];
  addButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
};
buyPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});
continueBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
  }
});
