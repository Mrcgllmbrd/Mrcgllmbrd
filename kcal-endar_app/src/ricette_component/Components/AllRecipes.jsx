import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BlogPage } from "../Components/BlogPage";
import { Recipe } from "../Components/Recipe";


export function AllRecipes() {
  const recipesData = [
    {
      title: "Insalata di Ceci con Verdure Mediterranee",
      ingredients: [
        "Ceci cotti (circa 200g)",
        "Melanzane (150g)",
        "Pomodorini (150g)",
        "Peperoni (150g)",
        "Cetriolini sott'aceto (100g)",
        "Foglie di basilico fresco",
        "Olio d'oliva extra vergine",
        "Aceto balsamico",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Usa ceci già cotti (circa 200g) o cuocili seguendo le istruzioni sulla confezione, se necessario.",
        "Taglia le melanzane (150g) a cubetti.",
        "Taglia i pomodorini (150g) a metà o quarti, a seconda delle dimensioni.",
        "In una padella, scalda un po' di olio d'oliva extra vergine.",
        "Aggiungi le melanzane e cuocile finché sono morbide e leggermente dorati.",
        "Aggiungi i pomodorini e i peperoni e continua la cottura per alcuni minuti, mantenendo le verdure croccanti.",
        "Lascia raffreddare le verdure.",
        "In una grande ciotola, unisci i ceci cotti, le verdure cottem i cetriolini tagliati efoglie di basilico.",
        "Condisci l'insalata con olio d'oliva extra vergine, aceto balsamico, sale e pepe a gusto.",
        "Mescola bene tutti gli ingredienti in modo che il condimento si distribuisca uniformemente.",
        "Lascia riposare l'insalata in frigorifero per un po' prima di servirla, in modo che i sapori si amalgamino. ",
        "Servi l'Insalata di Ceci con Verdure Mediterranee come antipasto o accompagnamento leggero.",
        "Puoi guarnire con ulteriori foglie di basilico fresco prima di servire.",
      ],
    },
    {
      title: "Insalata di Quinoa con Verdure Grigliate",
      ingredients: [
        "200g di quinoa",
        "300g di verdure miste (zucchine, peperoni, pomodori)",
        "Olio d'oliva",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Cuoci 200g di quinoa seguendo le istruzioni sulla confezione (circa 15-20 minuti di cottura)",
        "Lava bene la quinoa prima della cottura se non è già stata prerisciacquata.",
        "Taglia 300g di verdure miste a cubetti.",
        "Puoi utilizzare zucchine, peperoni, pomodori o altre verdure di tua scelta.",
        "In una padella o sulla griglia, riscalda un filo d'olio d'oliva.",
        "Aggiungi le verdure tagliate nella padella o sulla griglia e cuocile fino a quando sono grigliate e leggermente tenere.",
        "In una ciotola grande, mescola le verdure grigliate con la quinoa cotta.",
        "Condisci la miscela con olio d'oliva, sale e pepe secondo i tuoi gusti e mescola bene",
        "Puoi servire questa quinoa con verdure grigliate come contorno leggero o come piatto principale.",
      ],
    },
    {
      title: "Pollo alla Griglia con Salsa di Yogurt alle Erbe",
      ingredients: [
        "Petto di pollo (4 pezzi)",
        "Yogurt naturale (200g)",
        "Erbe aromatiche fresche (prezzemolo, basilico, menta - a piacere)",
        "Aglio (1 spicchio, tritato)",
        "Succo di limone (1 cucchiaio)",
        "Olio d'oliva extra vergine (2 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "In una ciotola, mescola lo yogurt con prezzemolo, basilico, menta, aglio tritato, succo di limone, olio d'oliva, sale e pepe.",
        "Adagia i pezzi di petto di pollo nella marinata, assicurandoti che siano ben ricoperti.",
        "Lascia marinare in frigorifero per almeno 30 minuti, o anche per diverse ore per un sapore più intenso.",
        "Preriscalda la griglia a temperatura media-alta.",
        "Scola leggermente il pollo dalla marinata e mettilo sulla griglia.",
        "Cuoci per circa 6-8 minuti per lato o finché il pollo è completamente cotto e ha ottenuto una gradevole doratura",
        "Prepara una salsa di yogurt alle erbe mescolandolo con erbe tritate, aglio, succo di limone, sale e pepe.",
        "Una volta che il pollo è cotto, disponilo su un piatto e aggiungi la salsa di yogurt alle erbe sopra o accanto al pollo.",
        "Questo pollo alla griglia con salsa di yogurt alle erbe si abbina bene con contorni come insalata fresca, riso o verdure grigliate.",
      ],
    },

    {
      title: "Salmone al Forno con Asparagi",
      ingredients: [
        "Filetti di salmone (4 pezzi)",
        "Asparagi freschi (circa 400g, punte e parte tenera)",
        "Limone (1, fette sottili)",
        "Aglio (2 spicchi, tritati)",
        "Prezzemolo fresco (1/4 di tazza, tritato)",
        "Olio d'oliva extra vergine (3 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Preriscalda il forno a 200°C.",
        "Adagia i filetti di salmone su una teglia foderata con carta da forno.",
        "Disponi gli asparagi intorno al salmone.",
        "Distribuisci le fette di limone,l'aglio tritato e il prezzemolo fresco sopra il salmone e gli asparagi.",
        "Versa uniformemente l'olio d'oliva extra vergine su salmone e asparagi.",
        "Aggiungi sale e pepe a piacere su entrambi il salmone e gli asparagi.",
        "Inforna la teglia nel forno già caldo e cuoci per circa 12-15 minuti, o finché il salmone è cotto e gli asparagi sono teneri.",
        "Una volta cotto, rimuovi dal forno.",
        "Servi il salmone caldo, guarnendo con ulteriori erbe fresche o una spruzzata di succo di limone",
        "Questo piatto si abbina bene con contorni come riso pilaf,purè di patate o una fresca insalata verde.",
      ],
    },

    {
      title: "Zuppa di Lenticchie e Verdure",
      ingredients: [
        "Lenticchie secche (200g)",
        "Cipolla (1, tritata)",
        "Carote (2, a cubetti)",
        "Sedano (2 gambi, a cubetti)",
        "Pomodori a cubetti (400g, preferibilmente pelati)",
        "Brodo vegetale (1,5 litri)",
        "Aglio (2 spicchi, tritati)",
        "Olio d'oliva extra vergine (2 cucchiai)",
        "Rosmarino fresco (1 rametto)",
        "Timo secco (1 cucchiaino)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Lavare le lenticchie sotto acqua corrente e scolarle.",
        "In una pentola capiente, scaldare l'olio d'oliva e aggiungere la cipolla, l'aglio, le carote e il sedano.",
        "Soffriggere a fuoco medio fino a quando le verdure sono appena tenere.",
        "Aggiungere i pomodori a cubetti e le lenticchie alla pentola e mescolare bene.",
        "Versare il brodo vegetale nella pentola e aggiungere il rosmarino e il timo. Portare la zuppa a ebollizione, quindi ridurre il calore e far cuocere a fuoco lento.",
        "Lasciare cuocere la zuppa a fuoco lento per circa 25-30 minuti o finché le lenticchie sono tenere. Aggiustare sale e pepe secondo il proprio gusto.",
        "Rimuovere il rosmarino e servire la zuppa calda. Puoi aggiungere un filo d'olio d'oliva e pepe fresco al momento di servire.",
        "Servi la zuppa con crostini di pane tostato o una spruzzata di succo di limone per un tocco di freschezza.",
      ],
    },

    {
      title: "Sformato di Melanzane",
      ingredients: [
        "Melanzane medie (2)",
        "Pomodori maturi (4, tagliati a fette sottili)",
        "Ricotta fresca (250g)",
        "Parmigiano grattugiato (1/2 tazza)",
        "Uova (2)",
        "Basilico fresco (1/2 tazza, tritato)",
        "Aglio (2 spicchi, tritati)",
        "Olio d'oliva extra vergine (3 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Tagliare le melanzane a fette sottili e disporle su una teglia.",
        "Spolverare un po' di sale su ogni fetta di melanzana e lasciarle riposare per circa 30 minuti. Questo aiuterà a eliminare l'amaro.",
        "Dopo 30 minuti, sciacquare le fette di melanzana sotto acqua corrente e asciugarle delicatamente con un canovaccio.",
        "Spennellare le fette di melanzana con olio d'oliva e grigliarle su entrambi i lati fino a quando sono morbide e leggermente dorati. Metterle da parte.",
        "In una ciotola, mescolare la ricotta con le uova, il Parmigiano grattugiato, l'aglio tritato, il basilico fresco, il sale e il pepe.",
        "In una teglia da forno, creare uno strato di melanzane grigliate sul fondo.",
        "Aggiungere uno strato di fette di pomodoro sopra le melanzane.",
        "Versare uniformemente il composto di ricotta sopra gli strati di melanzane e pomodoro.",
        "Continuare a creare strati alternati di melanzane, pomodoro e ripieno fino a esaurimento degli ingredienti.",
        "Infornare lo sformato in forno preriscaldato a 180°C per circa 40-45 minuti o fino a quando la superficie è dorata e il ripieno è ben cotto.",
        "Lasciare raffreddare leggermente prima di tagliare lo sformato a fette. Servire caldo, magari guarnito con basilico fresco.",
      ],
    },

    {
      title: "Pasta Integrale con Pesto di Avocado e Pomodorini",
      ingredients: [
        "250g di pasta integrale",
        "2 avocado maturi",
        "200g di pomodorini ciliegia",
        "Foglie di basilico fresco",
        "Succo di limone (1 cucchiaio)",
        "Olio d'oliva extra vergine (2 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Porta a ebollizione una pentola d'acqua salata.",
        "Aggiungi la pasta integrale e cuoci seguendo le istruzioni sulla confezione fino a raggiungere la consistenza desiderata.",
        "In un frullatore, aggiungi la polpa degli avocado, alcune foglie di basilico fresco, 2 cucchiai di succo di limone, sale e pepe a piacere.",
        "Frulla gli ingredienti fino a ottenere una consistenza cremosa e omogenea. Puoi aggiustare la quantità di limone, sale e pepe secondo i tuoi gusti.",
        "Taglia i pomodorini ciliegia a metà.",
        "Una volta cotta, scola la pasta e trasferiscila in una ciotola capiente.",
        "Aggiungi il pesto di avocado alla pasta e mescola delicatamente fino a coprire uniformemente ogni pezzo di pasta.",
        "Aggiungi i pomodorini tagliati a metà e continua a mescolare.",
        "Guarnisci il piatto con alcune foglie di basilico fresco per un tocco decorativo e di aroma.",
        "Servi immediatamente, godendo di una pasta fresca, cremosa e piena di sapori grazie al pesto di avocado e ai pomodorini.",
      ],
    },

    {
      title: "Insalata di Uova Sode con Verdure Grigliate e Olive",
      ingredients: [
        "4 uova sode, sbucciate e tagliate a metà",
        "1 mazzetto di asparagi, grigliati",
        "1 melanzana, affettata e grigliata",
        "1 tazza di olive nere, snocciolate",
        "1/2 tazza di pomodorini ciliegia, tagliati a metà",
        "Succo di limone",
        "Olio d'oliva extra vergine",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Taglia le melanzane e le zucchine a fette di circa mezzo centimetro",
        "Riscalda una griglia o una padella antiaderente a fuoco medio-alto.",
        "Spennella leggermente le fette di melanzane e zucchine con olio d'oliva.",
        "Griglia le verdure per circa 3-4 minuti da entrambi i lati o fino a quando presentano segni di doratura. ",
        "Posiziona le uova sode tagliate a metà su un piatto",
        "Adagia le fette di melanzane e zucchine grigliate intorno alle uova, creando un letto di verdure.",
        "Spargi uniformemente le olive nere snocciolate sulla parte superiore delle uova e delle verdure grigliate.",
        "In una ciotola piccola, mescola insieme 2 cucchiai di succo di limone, 3 cucchiai di olio d'oliva, sale e pepe a piacere.",
        "Versa il condimento preparato sulla tua insalata di uova, verdure grigliate e olive.",
        "Servi come piatto principale o contorno",
      ],
    },

    {
      title: "Torta di Mele Integrale senza Zucchero Aggiunto",
      ingredients: [
        "2 mele (preferibilmente varietà dolci)",
        "2 tazze di farina integrale",
        "1 tazza di latte di mandorle o altra bevanda vegetale",
        "1/2 tazza di olio di cocco o olio d'oliva",
        "1/2 tazza di miele o sciroppo d'acero",
        "2 uova",
        "1 cucchiaino di cannella in polvere",
        "1 cucchiaino di lievito in polvere",
      ],
      instructions: [
        "Sbucciare e affettare finemente una mela. Tagliare l'altra mela a cubetti. Mettere da parte.",
        "In una ciotola grande, mescolare la farina integrale, il lievito in polvere e la cannella.",
        "In un'altra ciotola, sbattere le uova e aggiungere il miele o lo sciroppo d'acero, l'olio di cocco (o olio d'oliva) e il latte di mandorle. Mescolare bene.",
        "Versare gli ingredienti liquidi nella miscela di ingredienti secchi. Mescolare fino a ottenere un impasto omogeneo.",
        "Aggiungere le mele affettate e a cubetti all'impasto. Mescolare delicatamente.",
        "Versare l'impasto in una teglia da forno precedentemente oliata e livellare la superficie.",
        "Disporre fette sottili della mela sbucciata sulla parte superiore per una presentazione decorativa.",
        "Cuocere in forno preriscaldato a 180°C per circa 30-40 minuti o fino a quando uno stuzzicadenti inserito al centro esce pulito.",
        "Lasciare raffreddare la torta prima di tagliarla.",
        "Servire a temperature ambiente e godere di una deliziosa torta di mele integrale senza zucchero aggiunto.",
      ],
    },

    {
      title: "Filetto di Merluzzo al Forno con Funghi e Zucca",
      ingredients: [
        "4 filetti di merluzzo (circa 150g ciascuno)",
        "1 tazza di funghi freschi, affettati",
        "2 tazze di zucca, tagliata a cubetti",
        "2 cucchiai di olio d'oliva",
        "2 spicchi d'aglio, tritati",
        "Succo di limone",
        "Sale e pepe q.b.",
        "Prezzemolo fresco, tritato (per guarnire)",
      ],
      instructions: [
        "Preriscalda il forno a 200°C.",
        "In una ciotola, unisci i cubetti di zucca con 1 cucchiaio di olio d'oliva, sale e pepe. Mescola bene per assicurarti che la zucca sia ben condita.",
        "Disponi i cubetti di zucca su una teglia da forno rivestita di carta pergamena e cuoci in forno per circa 15-20 minuti o finché la zucca è tenera.",
        "Scalda l'altro cucchiaio di olio d'oliva in una padella, aggiungi gli spicchi d'aglio tritati e i funghi affettati.",
        "Rimuovi la teglia dal forno e abbassa la temperatura a 180°C. Posiziona i filetti di merluzzo sui cubetti di zucca.",
        "Distribuisci i funghi cotti sopra i filetti di merluzzo. Spruzza un po' di succo di limone sui filetti.",
        "Cuoci in forno a 180°C per circa 15-20 minuti o fino a quando il merluzzo è cotto e si sfalda facilmente con una forchetta.",
        "Una volta cotto, guarnisci con prezzemolo fresco tritato e servilo caldo.",
      ],
    },

    {
      title: "Minestrone con Orzo e Fagioli",
      ingredients: [
        "1 tazza di orzo integrale",
        "1 lattina di fagioli cannellini, sciacquati e scolati",
        "2 carote, tagliate a cubetti",
        "2 cucchiai di olio d'oliva",
        "2 spicchi d'aglio, tritati",
        "2 patate, sbucciate e tagliate a cubetti",
        "Sale e pepe q.b.",
        "2 coste di sedano, tagliate a pezzi",
        "1 tazza di spinaci freschi, lavati e tritati",
        "1 tazza di pomodori a cubetti",
      ],
      instructions: [
        "In una pentola grande, riscaldare l'olio d'oliva a fuoco medio. Aggiungere la cipolla e l'aglio, cuocere finché diventano traslucidi.",
        "Aggiungere carote, sedano e patate. Cuocere per circa 5 minuti, mescolando occasionalmente.",
        "Versare il brodo vegetale nella pentola.",
        "Aggiungere gli spinaci, le zucchine, i pomodori a cubetti, i fagioli cannellini (sciacquati e scolati), l'orzo, l'origano e il timo.",
        "Portare il tutto a ebollizione, ridurre il calore e far cuocere a fuoco lento per circa 15-20 minuti o fino a quando le verdure e l'orzo sono teneri.",
        "Aggiustare il sapore con sale e pepe a piacere.",
        "Una volta che il minestrone è cotto, servirlo caldo. Opzionalmente, guarnire con formaggio grattugiato.",
      ],
    },

    {
      title: "Fesa di Tacchino al Forno con Carote e Funghi",
      ingredients: [
        "500g di fesa di tacchino, tagliata a fette sottili",
        "3 carote, tagliate a rondelle sottili",
        "200g di funghi, affettati",
        "2 cucchiai di olio d'oliva",
        "2 spicchi d'aglio, tritati",
        "1 cucchiaino di rosmarino secco",
        "1 cucchiaino di timo secco",
        "Sale e pepe nero q.b.",
        "Succo di limone",
        "Prezzemolo fresco, tritato (per guarnire)",
      ],
      instructions: [
        "Preriscalda il forno a 200°C.",
        "In una padella, riscalda 1 cucchiaio di olio d'oliva.",
        "Aggiungi la fesa di tacchino e cuoci a fuoco medio-alto fino a quando è dorata su entrambi i lati.",
        "Aggiungi i funghi e le carote affettate. Cuoci finché le verdure sono leggermente tenere.",
        "Aggiusta di sale e pepe. Aggiungi il rosmarino e il timo secco. Mescola bene.",
        "Versa la miscela di funghi e carote sopra la fesa di tacchino.",
        "Spremi un po' di succo di limone sulla carne e le verdure per un tocco fresco.",
        "Cuoci in forno per circa 20-25 minuti o fino a quando la carne è cotta completamente.",
        "Prima di servire, guarnisci con prezzemolo fresco tritato.",
      ],
    },
  ];

  return (
    <div>
      <div>
        <Routes>
          <Route path="/ricette" element={<BlogPage />} />
          {recipesData.map((recipe, index) => (
            <Route
              key={index}
              path={`/ricette/recipe${index + 1}`}
              element={<Recipe {...recipe} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}
