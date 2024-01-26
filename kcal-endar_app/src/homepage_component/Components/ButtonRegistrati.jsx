import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/ButtonRegistrati.css";

export function ButtonRegistrati() {
  return (
    <div className="button-container">
      <Button href="signup" type="submit" className="button-container-registrati">
        Registrati
      </Button>
    </div>
  );
}
