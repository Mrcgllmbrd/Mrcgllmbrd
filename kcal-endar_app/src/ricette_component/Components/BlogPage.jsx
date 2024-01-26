import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../Components/Style/BlogPage.css"



export function BlogPage() {
  const navigateRecipe1 = useNavigate();
  function recipe1ButtonClick() {
    navigateRecipe1("/ricette/recipe1");
    document.getElementById("recipe1").scrollIntoView({ behavior: "smooth" });
  }

  const navigateRecipe2 = useNavigate();
  function recipe2ButtonClick() {
    navigateRecipe2("/ricette/recipe2");
  }

  const navigateRecipe3 = useNavigate();
  function recipe3ButtonClick() {
    navigateRecipe3("/ricette/recipe3");
  }

  const navigateRecipe4 = useNavigate();
  function recipe4ButtonClick() {
    navigateRecipe4("/ricette/recipe4");
  }

  const navigateRecipe5 = useNavigate();
  function recipe5ButtonClick() {
    navigateRecipe5("/ricette/recipe5");
  }

  const navigateRecipe6 = useNavigate();
  function recipe6ButtonClick() {
    navigateRecipe6("/ricette/recipe6");
  }

  const navigateRecipe7 = useNavigate();
  function recipe7ButtonClick() {
    navigateRecipe7("/ricette/recipe7");
  }

  const navigateRecipe8 = useNavigate();
  function recipe8ButtonClick() {
    navigateRecipe8("/ricette/recipe8");
  }

  const navigateRecipe9 = useNavigate();
  function recipe9ButtonClick() {
    navigateRecipe9("/ricette/recipe9");
  }

  const navigateRecipe10 = useNavigate();
  function recipe10ButtonClick() {
    navigateRecipe10("/ricette/recipe10");
  }

  const navigateRecipe11 = useNavigate();
  function recipe11ButtonClick() {
    navigateRecipe11("/ricette/recipe11");
  }

  const navigateRecipe12 = useNavigate();
  function recipe12ButtonClick() {
    navigateRecipe12("/ricette/recipe12");
  }

  const navigate = useNavigate();

  const handleButtonRecipeShare = () => {
    navigate("/condividi-ricetta");
  };

  return (
    <div>
      <h1 className="mainTitle-ricette" style={{ textAlign: "center" }}>
        Ricette
      </h1>
      <div className="card-container-ricette">
        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="src/-assets/media/insalataCeciVerdure.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Insalata di Ceci con Verdure Mediterranee
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Un'insalata leggera e ricca di proteine vegetali, con il gusto
              fresco delle verdure mediterranee.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe1ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/insalataQuinoaeVerdure.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Insalata di Quinoa con Verdure Grigliate
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Un'insalata equilibrata, arricchita di proteine e fibre, ottima
              per una cena leggera e nutriente.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe2ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/polloSalsaYogurt.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Pollo alla Griglia con Salsa di Yogurt alle Erbe
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Una ricetta leggera e proteica, un pasto saziante e nutriente per
              una cena saporita e salutare.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe3ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/salmoneAsparagi.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Salmone al Forno con Asparagi
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Una pietanza ricca di acidi grassi omega-3 e vitamine, ideale per
              mantenere il cuore sano.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe4ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/zuppaLenticchie.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Zuppa di Lenticchie e Verdure
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Una deliziosa zuppa ricca di proteine vegetali e fibre, per una
              cena leggera e salutare.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe5ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/sformatoMelanzane.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Sformato di Melanzane
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Piatto saporito e nutriente che può essere gustato come contorno o
              piatto principale.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe6ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/pastaAvocadoPomodorini.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Pasta con Pesto di Avocado e Pomodorini
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Una pasta leggera e ricca di grassi salutari, perfetta per chi
              cerca un'opzione vegetariana.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe7ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/insalataUovaSode.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Insalata di Uova Sode con Verdure Grigliate e Olive
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Un'insalata estiva che combina l'eleganza delle uova sode con il
              sapore affumicato delle verdure grigliate
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe8ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/tortadiMeleIntegrale.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Torta di Mele Integrale senza Zucchero Aggiunto
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Un dolce salutare e delizioso che unisce il dolce sapore delle
              mele con l'integrità nutrizionale della farina integrale.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe9ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/merluzzoFunghiZucca.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Filetto di Merluzzo al Forno con Funghi e Zucca
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Piatto sano e bilanciato che fornisce proteine magre e una varietà
              di nutrienti.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe10ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/minestroneOrzoFagioli.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Minestrone con Orzo e Fagioli
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Un pasto completo e sano,ricco di verdure,fibre e proteine,
              perfetto per le giornate più fresche.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe11ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "21rem" }} className="custom-card-ricette">
          <Card.Img
            variant="top"
            src="/src/-assets/media/fesaTacchinoCaroteFunghi.jpeg"
          />
          <Card.Body>
            <Card.Title className="titlePreviewRecipe">
              Fesa di Tacchino al Forno con Carote e Funghi
            </Card.Title>
            <Card.Text className="textPreviewRecipe">
              Un pasto leggero, saporito e ricco di proteine magre e vitamine.
            </Card.Text>
            <Button
              variant="primary"
              className="buttonRecipe"
              onClick={recipe12ButtonClick}
            >
              Vai alla ricetta completa
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <button
          className="button-shareRecipe"
          type="submit"
          onClick={handleButtonRecipeShare}
        >
          Condividi la tua ricetta
        </button>
      </div>
    </div>
  );
}