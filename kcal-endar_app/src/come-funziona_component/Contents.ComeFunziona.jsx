export function ContentsComeFunziona() {
  const section1Title =
    "Iscriviti e inizia a registrare i tuoi pasti";

  const section1SubTitle =
    "Monitora ciò che mangi per migliorare le tue abitudini alimentari:";

  const section1Content = [
    "Kcal-endar offre agli utenti la possibilità di registrarsi come utenti standard o come nutrizionisti. La registrazione fornisce l'accesso a funzionalità personalizzate.",
    "Una volta effettuata l'iscrizione, gli utenti possono registrare dettagliatamente i pasti consumati, in modo da monitorare in modo accurato le proprie abitudini alimentari.",
    "Questo strumento non solo facilita la registrazione delle calorie assunte, ma fornisce anche una panoramica completa della composizione nutrizionale dei pasti.",
    "L'utilizzo del calendario dietetico rende il processo di monitoraggio più organizzato, aiutando gli utenti a identificare schemi alimentari e a prendere decisioni informate per migliorare la loro salute.",
  ];

  const section2Title =
    "Entra in contatto col nutrizionista";

  const section2SubTitle =
    "Ricevi una dieta personalizzata per facilitare i tuoi progressi:";

  const section2Content = [
    "La funzionalità di doppio login consente agli utenti di collegarsi direttamente con nutrizionisti professionisti.",
    "Questa connessione facilita la ricezione di piani alimentari personalizzati, adattati alle esigenze specifiche di ciascun individuo.",
    "I nutrizionisti possono monitorare il progresso degli utenti nel tempo, fornendo consulenze mirate per ottimizzare la gestione della dieta e raggiungere gli obiettivi di salute.",
  ];

  const section3Title =
    "Condividi le tue ricette";

  const section3SubTitle =
    "Proponi i tuoi piatti preferiti e trova nuove ispirazioni:";

  const section3Content = [
    "All'interno di Kcal-endar gli utenti possono proporre le loro idee condividendo le proprie ricette preferite per una cucina salutare.",
    "Questa funzionalità promuove un ambiente di supporto, incoraggiando gli utenti a trarre ispirazione da altri membri della community.",
  ];



  return (
    <div>
      <h2>{section1Title}</h2>
      <h5>{section1SubTitle}</h5>
      <br />
      <div>
        {section1Content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <br />
      <h2>{section2Title}</h2>
      <h5>{section2SubTitle}</h5>
      <br />
      <div>
        {section2Content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <br />
      <h2>{section3Title}</h2>
      <h5>{section3SubTitle}</h5>
      <br />
      <div>
        {section3Content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <br />  
    </div>
  );
}


