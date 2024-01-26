import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/BlogPart.css";
import { useNavigate } from "react-router-dom";

export function BlogPart() {
  const navigate = useNavigate();

  const handleButtonBlog = () => {
    navigate("/condividi-ricetta");
  };

  return (
    <div className="title-container">
      <Card className="stepCardBlog">
        <Card.Body>
          <Card.Title>
            <button className="card-blog-button" onClick={handleButtonBlog}>
              PARTECIPA AL NOSTRO <span>BLOG!</span>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}