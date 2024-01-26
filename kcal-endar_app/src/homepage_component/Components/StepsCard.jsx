import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import calendarIcon from "../../-assets/icons/calendarIcon.png";
import nutritionistIcon from "../../-assets/icons/nutritionistIcon.png";
import recipeIcon from "../../-assets/icons/recipeIcon.png";
import {ButtonRegistrati} from "../Components/ButtonRegistrati";
import "../Style/StepsCard.css";

export function StepsCard() {
  return (
    <div className="main-container">
      <div className="card-container">
        <Card
          className="stepCardShadow"
          style={{ width: "25rem", height: "30rem", borderRadius: "30px" }}
        >
          <Card.Body>
            <div className="cardsIcon d-flex justify-content-center align-items-center">
              <img src={calendarIcon} className="calendarIcon" />
            </div>
            <Card.Title className="text-center">
              Registra i tuoi pasti
            </Card.Title>
            <Card.Text>
              {" "}
              Monitora ciò che mangi per migliorare le tue abitudini alimentari
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="stepCardShadow"
          style={{ width: "25rem", height: "30rem", borderRadius: "30px" }}
        >
          <Card.Body>
            <div className="cardsIcon d-flex justify-content-center align-items-center">
              <img src={nutritionistIcon} className="nutritionistIcon" />
            </div>
            <Card.Title className="text-center">
              Entra in contatto col nutrizionista
            </Card.Title>
            <Card.Text>
              Ricevi una dieta personalizzata per facilitare i tuoi progressi
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="stepCardShadow"
          style={{ width: "25rem", height: "30rem", borderRadius: "30px" }}
        >
          <Card.Body>
            <div className="cardsIcon d-flex justify-content-center align-items-center">
              <img src={recipeIcon} className="recipeIcon" />
            </div>
            <Card.Title className="text-center">
              Condividi le tue ricette
            </Card.Title>
            <Card.Text>
              {" "}
              Proponi i tuoi piatti preferiti, chiedi consigli e trova nuove
              ispirazioni!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <ButtonRegistrati />
    </div>
  );
}
