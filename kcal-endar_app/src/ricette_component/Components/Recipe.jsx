import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Style/Recipe.css";

export function Recipe({ title, ingredients, instructions }) {
  return (
    <div>
      <Card className="cardRecipe">
        <Card.Body>
          <Card.Title className="titleRecipe">
            <h1>{title}</h1>
          </Card.Title>
          <br />
          <Card.Text className="cooking">
            <h3>Ingredienti:</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h3>Istruzioni:</h3>
            <ul>
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
