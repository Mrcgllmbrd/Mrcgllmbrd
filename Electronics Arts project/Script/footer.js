const buttonPrices = document.getElementById("footer-button-prices");
const subMenuPrices = document.getElementById("sub-menu-regional-pricing");

const buttonLanguage = document.getElementById("footer-button-language");
const subMenuLanguage = document.getElementById("sub-menu-language");

buttonPrices.addEventListener("click", function () {
  buttonPrices.style.backgroundColor = (buttonPrices.style.backgroundColor =
    "#F3F3F3")
    ? "#FFFFFF"
    : "#F3F3F3";

  subMenuPrices.style.display = subMenuPrices.style.display === "flex" ? "none" : "flex";
   subMenuLanguage.style.display = 'none'
});

buttonLanguage.addEventListener("click", function () {
  buttonLanguage.style.backgroundColor = (buttonLanguage.style.backgroundColor =
    "#F3F3F3")
    ? "#FFFFFF"
    : "#F3F3F3";

  subMenuLanguage.style.display =
    subMenuLanguage.style.display === "flex" ? "none" : "flex";
    subMenuPrices.style.display = "none";
});
