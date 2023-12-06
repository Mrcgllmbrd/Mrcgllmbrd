const myAlert = document.querySelector(".alert");

function isAlertShown() {
  myAlert.innerHTML = `
    <div class="logo-alert"> 
    <img src="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/ea-play-toaster-1x1.jpg"/>
    </div>
    <div class="text-alert"> 
    <div>
      <p>Iscriviti subito a EA Play* a soli 0.99 € fino al 17 novembre!</p>
      <p>Iscriviti ora</p>  
    </div>
     
                  <svg
              class="close-alert-icon"
              onclick=" closeAlert() "
              x="0px"
              y="0px"
              viewBox="0 0 16 16"
              style="enable-background: new 0 0 16 16"
            >
              <path
                d="M13.4,11.9l-4-4l3.9-3.9c0.6-0.6,0.7-1.3,0.3-1.7c-0.4-0.4-1.2-0.3-1.7,
                                           0.3L8,6.6l-4-4 C3.5,2.1,2.7,1.9,2.3,2.3C1.9,2.7,2.1,3.5,2.6,4.1l4,
                                           4l-3.9,3.9c-0.6,0.6-0.7,1.3-0.3,1.7c0.4,0.4,1.2,0.3,1.7-0.3L8,9.4l4,
                                           4 c0.6,0.6,1.3,0.7,1.7,0.3C14.1,13.3,13.9,12.5,13.4,11.9z"
              ></path></svg

    </div>
  `;
}

function isShowOrHiddenAlert() {
  if (!localStorage.getItem("alertLocal")) {
    setTimeout(() => {
      myAlert.classList.add("open-alert");
    }, 3000);
    localStorage.setItem("alertLocal", "true");
  } else {
    myAlert.innerHTML = ""; // Assicurati che il contenuto dell'alert sia vuoto quando lo si nasconde
  }
}

isShowOrHiddenAlert();


function closeAlert() {
  myAlert.classList.remove('open-alert')
}