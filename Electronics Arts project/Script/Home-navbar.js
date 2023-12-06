const openSide = document.querySelectorAll(".open-sidecard-icon");
const sideCard = document.querySelector(".sidecard-container");
const closeSide = document.querySelector(".close-sidecard-icon");
const subMenus = Array.from(document.querySelectorAll(".sub-menu"));
const subMenusMob = Array.from(
  document.querySelectorAll(".menu-mobile-header")
);

const subSubMenusMob = Array.from(
  document.querySelectorAll(".sub-sub-menu-mob")
);

const dropContainers = Array.from(
  document.querySelectorAll(".dropdown-container")
);
const dropContainersMob = Array.from(
  document.querySelectorAll(".sub-menu-mob")
);
const dropDropContainersMob = Array.from(
  document.querySelectorAll(".sub-sub-menu-mob-list")
);
const arrows = Array.from(document.querySelectorAll(".arrow-icon"));
const arrowsMob = Array.from(document.querySelectorAll(".arrow-icon-mob"));
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
  dropContainers.forEach((container) => {
    container.classList.remove("show-drop");
  });
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
subMenus.forEach((subMenu, index) => {
  subMenu.addEventListener("click", (evt) => {
    evt.stopPropagation();
    subMenus.forEach((otherDrop, otherIndex) => {
      if (otherIndex !== index) {
        dropContainers[otherIndex].classList.remove("show-drop");
      }
    });
    dropContainers[index].classList.toggle("show-drop");
    sideCard.classList.remove("active");
    overlay.classList.remove("overlay");
  });
});

dropContainers.forEach((dropContainer) => {
  dropContainer.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
});

/* -----------------------------------------------------
COMPORTAMENTO ARROWS DROPD DOWN MENU 
---------------------------------------------------------*/
arrows.forEach((arrow, index) => {
  subMenus[index].addEventListener("click", (evt) => {
    evt.stopPropagation();
    arrows.forEach((otherArrows, otherIndex) => {
      if (otherIndex !== index) {
        otherArrows.classList.remove("arrow-rotation");
      }
    });
    arrow.classList.toggle("arrow-rotation");
  });
});

document.addEventListener("click", () => {
  arrows.forEach((arrow) => {
    arrow.classList.remove("arrow-rotation");
  });
});

/* ----------------------------------------------------
COMPORTAMENTO MOBILE MENU
--------------------------------------------------------*/
arrowsMob.forEach((arrow, index) => {
  subMenusMob[index].addEventListener("click", (evt) => {
    evt.stopPropagation();
    arrows.forEach((otherArrows, otherIndex) => {
      if (otherIndex !== index) {
        otherArrows.classList.remove("arrow-rotation");
      }
    });
    arrow.classList.toggle("arrow-rotation");
  });
});

document.addEventListener("click", () => {
  arrowsMob.forEach((arrow) => {
    arrow.classList.remove("arrow-rotation");
  });
});

function closeAllDropContainers() {
  dropContainersMob.forEach((container) => {
    container.classList.remove("show-drop");
  });
}

subMenusMob.forEach((subMenu, index) => {
  subMenu.addEventListener("click", (evt) => {
    evt.stopPropagation();
    subMenusMob.forEach((otherDrop, otherIndex) => {
      if (otherIndex !== index) {
        dropContainersMob[otherIndex].classList.remove("show-drop");
      }
    });
    dropContainersMob[index].classList.toggle("show-drop");
  });
});

dropContainersMob.forEach((dropContainer) => {
  dropContainer.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
});

document.addEventListener("click", () => {
  closeAllDropContainers();
  arrowsMob.forEach((arrow) => {
    arrow.classList.remove("arrow-rotation");
  });
});

subSubMenusMob.forEach((sub, index) => {
  sub.addEventListener("click", (evt) => {
    evt.stopPropagation();
    dropDropContainersMob[index].classList.toggle("show-drop");
  });
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




