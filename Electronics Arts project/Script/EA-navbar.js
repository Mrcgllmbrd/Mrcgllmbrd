const openSide = document.querySelectorAll(".hamb-menu");
const sideCard = document.querySelector(".sidecard-container");
const closeSide = document.querySelector(".close-sidecard-icon");
const subMenus = document.querySelector(".sub-menu");
const subMenusMob = document.querySelector(".menu-mobile-header");

const subSubMenusMob = document.querySelector(".sub-sub-menu-mob");

const dropContainers = document.querySelector(".dropdown-container");
const dropContainersMob = document.querySelector(".sub-menu-mob");

const dropDropContainersMob = document.querySelector(
  ".sub-sub-menu-mob-list"
);
const arrows = document.querySelector(".arrow-icon");
const arrowsMob = document.querySelector(".arrow-icon-mob");
const overlay = document.querySelector(".overlay");
overlay.classList.remove("overlay");

/* ----------------------------------------------
COMPORTAMENTO SIDEBAR 
------------------------------------------------*/
sideCard.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

document.addEventListener("click", (evt) => {
  evt.stopPropagation();
  sideCard.classList.remove("active");
  dropContainers.classList.remove("show-drop");
  overlay.classList.remove("overlay");
});

openSide.forEach((open) => {
  open.addEventListener("click", (evt) => {
    evt.stopPropagation();
    sideCard.classList.toggle("active");
    overlay.classList.toggle("overlay");
    dropContainers.forEach((container) => {
      container.classList.remove("show-drop");
    });
  });
});

closeSide.addEventListener("click", (evt) => {
  evt.stopPropagation();
  sideCard.classList.toggle("active");
  overlay.classList.toggle("overlay");
});
sideCard.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

//abbasso e alzo top nav quando clicco side
const topNav = document.querySelector(".top-nav");
const bottomNav = document.querySelector(".menu-nav-container");

/* ----------------------------------------------
COMPORTAMENTO TOP E BOTTOM NAV QUANDO SI SCROLLA
 ------------------------------------------------*/
let prevScrollPos = window.pageYYffset;

window.addEventListener("scroll", (evt) => {
  evt.stopPropagation();
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scorrimento verso l'alto
    topNav.classList.remove("navbar-hidden");
    bottomNav.classList.remove("scrolling-nav");
    bottomNav.classList.add("scrolling-nav2");
  } else {
    // Scorrimento verso il basso
    topNav.classList.add("navbar-hidden");
    bottomNav.classList.add("scrolling-nav");
  }

  prevScrollPos = currentScrollPos;
});
// quando clicco sidebar scende nav
openSide.forEach((open) => {
  open.addEventListener("click", (evt) => {
    evt.stopPropagation();

    topNav.classList.remove("navbar-hidden");
    bottomNav.classList.remove("scrolling-nav");
  });
});

const btnSale = document.querySelector(".btn-sales");
btnSale.addEventListener("click", (evt) => {
  evt.stopPropagation();
  topNav.classList.remove("navbar-hidden");
  bottomNav.classList.remove("scrolling-nav");
});



document.addEventListener("click", (evt) => {
  evt.stopPropagation();
  topNav.classList.add("navbar-hidden");
  bottomNav.classList.add("scrolling-nav");
});

closeSide.addEventListener("click", (evt) => {
  evt.stopPropagation();
  topNav.classList.add("navbar-hidden");
  bottomNav.classList.add("scrolling-nav");
});

/*---------------------------------
SCROLL SI BLOCCA QUANDO APRO SIDEBAR
--------------------------------------*/
let isSideOpen = false;
function toggleSidebar() {
  isSideOpen = !isSideOpen;
  document.body.style.overflow = isSideOpen ? "hidden" : "auto";
}
openSide.forEach((open) => {
  open.addEventListener("click", (evt) => {
    evt.stopPropagation();
    toggleSidebar();
  });
});

closeSide.addEventListener("click", (evt) => {
  evt.stopPropagation();
  toggleSidebar();
});

document.addEventListener("click", (evt) => {
  evt.stopPropagation();
  if (isSideOpen) {
    toggleSidebar();
  }
});

/*----------------------------------------
COMPORTAMENTO DROPDOWN MENU
---------------------------------------------- */

subMenus.addEventListener("click", (evt) => {
  evt.stopPropagation();
  dropContainers.classList.toggle("show-drop");
});

dropContainers.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

/* -----------------------------------------------------
COMPORTAMENTO ARROWS DROPD DOWN MENU 
---------------------------------------------------------*/

subMenus.addEventListener("click", (evt) => {
  arrows.classList.toggle("arrow-rotation");
});

document.addEventListener("click", () => {
  arrows.classList.remove("arrow-rotation");
});

/* ----------------------------------------------------
COMPORTAMENTO MOBILE MENU
--------------------------------------------------------*/
function closeAllDropContainers() {
  dropContainersMob.forEach((container) => {
    container.classList.remove("show-drop");
  });
}
subMenusMob.addEventListener("click", (evt) => {
  evt.stopPropagation();

  arrows.classList.toggle("arrow-rotation");
});

document.addEventListener("click", () => {
  arrowsMob.classList.remove("arrow-rotation");
});

subMenusMob.addEventListener("click", (evt) => {
  evt.stopPropagation();
  dropContainersMob.classList.toggle("show-drop");
});

dropContainersMob.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

document.addEventListener("click", () => {
  closeAllDropContainers();

  arrowsMob.classList.remove("arrow-rotation");
});

subSubMenusMob.addEventListener("click", (evt) => {
  evt.stopPropagation();
  dropDropContainersMob.classList.toggle("show-drop");
});

/*--------------------------------------------------------------
COMPORTAMENTO LOGIN SLIDE 
--------------------------------------- */
const loginIcon = document.querySelector(".avatar-icon");
const helpIcon = document.querySelector(".help-icon");
const loginSlide = document.querySelector(".login-slide");
const helpSlide = document.querySelector(".help-slide");

document.addEventListener("click", (evt) => {
  evt.stopPropagation();
  loginSlide.classList.remove("show-top-nav-slide");
  helpSlide.classList.remove("show-top-nav-slide");
});

let isHelpOpen = true;
loginIcon.addEventListener("click", (evt) => {
  evt.stopPropagation();
  if (isHelpOpen) {
    helpSlide.classList.remove("show-top-nav-slide");
    loginSlide.classList.add("show-top-nav-slide");
    isHelpOpen = false;
  } else {
    loginSlide.classList.toggle("show-top-nav-slide");
    isHelpOpen = true;
  }
});

let isLoginOpen = true;
helpIcon.addEventListener("click", (evt) => {
  evt.stopPropagation();
  if (isLoginOpen) {
    loginSlide.classList.remove("show-top-nav-slide");
    helpSlide.classList.add("show-top-nav-slide");
    isLoginOpen = false;
  } else {
    helpSlide.classList.toggle("show-top-nav-slide");
    isLoginOpen = true;
  }
});

topSlides.addEventListener("click", (evt) => {
  evt.stopPropagation();
});
