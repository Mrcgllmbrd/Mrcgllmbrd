       const tabItems = document.querySelectorAll(".tab-container p");
       tabItems.forEach((item) => {
         item.addEventListener("click", () => {
           tabItems.forEach((element) => {
             element.classList.remove("clicked");
           });
           item.classList.add("clicked");
         });
       });
      
      const notizieEa = document.getElementById("tab-container_notizieea-id");
        notizieEa.addEventListener("click",() => {
        const notizieEaContainer = document.getElementById("notizieEa-container");
        notizieEaContainer.scrollTo({behavior:"smooth"})
    })

      const EaSportsFC = document.getElementById("tab-container_easports-id");
      const EaSportsFcContainer = document.getElementById("EaSportsFC-container");

      const apexLegends = document.getElementById("tab-container_apexlegends-id");
      const apexLegendsContainer = document.getElementById("apexLegends-container");

      const theSims4 = document.getElementById("tab-container_thesims4-id");
      const theSims4Container = document.getElementById("theSims4-container");

      const starWars = document.getElementById("tab-container_starwars-id");
      const StarWarsContainer = document.getElementById("starWars-container");

      const f1 = document.getElementById("tab-container_F1-id");
      const F1Container = document.getElementById("F1-container");

      const battlefield = document.getElementById("tab-container_battlefield-id");
      const BattlefieldContainer = document.getElementById("Battlefield-container");

      const needForSpeed = document.getElementById("tab-container_needforspeed-id");
      const NeedForSpeedContainer = document.getElementById("NeedForSpeed-container");



      let view = false; 

      EaSportsFC.addEventListener("click", () => {
        if (!view) { 
          notizieEaContainer.style.display = "none";
          EaSportsFcContainer.style.display = "grid"
          apexLegendsContainer.style.display = "grid"
          theSims4Container.style.display = "grid"
          StarWarsContainer.style.display = "grid"
          F1Container.style.display = "grid"
          BattlefieldContainer.style.display = "grid"
          NeedForSpeedContainer.style.display = "grid"

          view = true; 
        }

        EaSportsFcContainer.scrollTo({behavior: "smooth"});
        apexLegendsContainer.scrollTo({ behavior: "smooth" });
        theSims4Container.scrollTo({ behavior: "smooth" });
        StarWarsContainer.scrollTo({ behavior: "smooth" });
        F1Container.scrollTo({ behavior: "smooth" });
        BattlefieldContainer.scrollTo({ behavior: "smooth" });
        NeedForSpeedContainer.scrollTo({ behavior: "smooth" });

    });

  function setupNavigation(sectionId, tabContainerId) {
    const container = document.getElementById(sectionId);
    const link = document.getElementById(tabContainerId);

    link.addEventListener("click", () => {
      const gridContainer = document.querySelectorAll(".grid-container");
      gridContainer.forEach((el) => el.style.display = "none");
      container.style.display = "grid";
      container.scrollTo({ behavior: "smooth" });
    });
  }

  
  setupNavigation("notizieEa-container", "tab-container_notizieea-id");
  setupNavigation("EaSportsFC-container", "tab-container_easports-id");
  setupNavigation("apexLegends-container", "tab-container_apexlegends-id");
  setupNavigation("theSims4-container", "tab-container_thesims4-id");
  setupNavigation("starWars-container", "tab-container_starwars-id");    
  setupNavigation("F1-container", "tab-container_F1-id"); 
  setupNavigation("Battlefield-container", "tab-container_battlefield-id");
  setupNavigation("NeedForSpeed-container", "tab-container_needforspeed-id");   

       
