const rightSide = document.querySelector(".right-sidecard-container");
const btnSales = document.querySelector(".btn-sales");
/* const overlay = document.querySelector('.overlay')
 */
btnSales.addEventListener("click", (evt) => {
  evt.stopPropagation();
  rightSide.classList.toggle("right-active");
});
document.addEventListener("click", (evt) => {
  evt.stopPropagation();

  rightSide.classList.remove("right-active");
});

rightSide.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

//Quando clicco side parte overlay

btnSales.addEventListener("click", (evt) => {
  evt.stopPropagation();
  overlay.classList.toggle("overlay");
});

document.addEventListener("click", (evt) => {
  evt.stopPropagation();
  overlay.classList.remove("overlay");
});

function scrollToElement() {
  
  const elmnt = document.querySelector(".items-abbonamenti-container");
  document.getElementById('seleziona-per-procedere').style.display = 'none'
  elmnt.classList.add("show-abb-container");
  elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
}
