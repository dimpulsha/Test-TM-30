/*  модалка для формы ввода */
const getLostBtn = document.querySelector(".get-lost-button");
const getLostPopup = document.querySelector(".modal-write");
const uName = getLostPopup.querySelector("[name=name]")
getLostBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  getLostPopup.classList.add("modal-show")
  uName.focus();
});
const getLostClose = document.querySelector(".modal-write-close");
getLostClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  getLostPopup.classList.remove("modal-show");
});
/*  попап с картой */
const mapLink = document.querySelector(".contact-map");
const mapPopup = document.querySelector(".modal-map");
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
const mapPopupClose = document.querySelector(".modal-map-close");
mapPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    getLostPopup.classList.remove("modal-show");
    buyPopup.classList.remove("modal-show");
  }
});
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

/* для табов сервисов */
const tab1Btn = document.querySelector(".service-button.service-slide-1");
const tab2Btn = document.querySelector(".service-button.service-slide-2");
const tab3Btn = document.querySelector(".service-button.service-slide-3");
const tab1Item = document.querySelector(".service-slider-item.service-slide-1")
const tab2Item = document.querySelector(".service-slider-item.service-slide-2")
const tab3Item = document.querySelector(".service-slider-item.service-slide-3")
tab1Btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  tab1Btn.classList.add("active");
  tab1Item.classList.add("active");
  tab2Btn.classList.remove("active");
  tab2Item.classList.remove("active");
  tab3Btn.classList.remove("active");
  tab3Item.classList.remove("active");
});
tab2Btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  tab2Btn.classList.add("active");
  tab2Item.classList.add("active");
  tab1Btn.classList.remove("active");
  tab1Item.classList.remove("active");
  tab3Btn.classList.remove("active");
  tab3Item.classList.remove("active");
});
tab3Btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  tab3Btn.classList.add("active");
  tab3Item.classList.add("active");
  tab2Btn.classList.remove("active");
  tab2Item.classList.remove("active");
  tab1Btn.classList.remove("active");
  tab1Item.classList.remove("active");
});
/* нижняя кнопка слайдера товаров */
const promoPoint1 = document.querySelector(".promo-slide1-point");
const promoPoint2 = document.querySelector(".promo-slide2-point");
const promoSlide1 = document.querySelector(".promo-slide-1");
const promoSlide2 = document.querySelector(".promo-slide-2");

promoPoint1.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoPoint1.classList.add("active-slider");
  promoPoint2.classList.remove("active-slider");
  promoSlide1.classList.add("active-slider");
  promoSlide2.classList.remove("active-slider");
});
promoPoint2.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoPoint2.classList.add("active-slider");
  promoPoint1.classList.remove("active-slider");
  promoSlide2.classList.add("active-slider");
  promoSlide1.classList.remove("active-slider");
});
/* кнопки вперед/назад */
let promoSliderList = document.querySelectorAll(".promo-slider-item");
let promoSliderPointList = document.querySelectorAll(".pagination-piont");
const forwardPromoBtn = document.querySelector(".slider-forward-button");
const backPromoBtn = document.querySelector(".slider-back-button");

forwardPromoBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (let x = 0; x < promoSliderList.length; x++) {
    let promoSlider = promoSliderList[x];
    promoSlider.classList.toggle("active-slider");
  };
  for (let y = 0; y < promoSliderPointList.length; y++) {
    let promoSliderPoint = promoSliderPointList[y];
    promoSliderPoint.classList.toggle("active-slider");
  };
});

backPromoBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (let x = 0; x < promoSliderList.length; x++) {
    let promoSlider = promoSliderList[x];
    promoSlider.classList.toggle("active-slider");
  };
  for (let y = 0; y < promoSliderPointList.length; y++) {
    let promoSliderPoint = promoSliderPointList[y];
    promoSliderPoint.classList.toggle("active-slider");
  };
});
