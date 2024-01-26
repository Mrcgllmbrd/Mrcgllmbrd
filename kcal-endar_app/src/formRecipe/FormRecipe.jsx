import { useState } from "react";
import "./FormRecipe.css";
import { ButtonRegistrati } from "../homepage_component/Components/ButtonRegistrati";
import axios from "axios";

export function FormRecipe() {
  const [email, setEmail] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [procedure, setProcedure] = useState("");

  async function handleSubmitRecipe(e) {
    e.preventDefault();

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Inserisci un indirizzo email valido.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/invia-ricetta", {
        email,
        recipeName,
        ingredients,
        procedure,
      });

      console.log("Dati inviati con successo:", {
        email,
        recipeName,
        ingredients,
        procedure,
      });
    } catch (error) {
      console.error("Errore durante l'invio:", error);
    }
  }

  return (
    <div className="recipe-form-container">
      <div>
        <h1 className="form-title-sendRecipe">Condividi la tua ricetta</h1>
        <br />
      </div>
      <form onSubmit={handleSubmitRecipe} className="form-recipe">
        <label className="field-form-title">
          Email:
          <span className="required-recipe">*</span>
          <input
            className="input-recipeForm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="field-form-title">
          Nome della ricetta:
          <span className="required-recipe">*</span>
          <input
            className="input-recipeForm"
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </label>

        <label className="field-form-title">
          Ingredienti:
          <span className="required-recipe">*</span>
          <textarea
            className="textarea-recipeForm"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </label>

        <label className="field-form-title">
          Procedimento:
          <span className="required-recipe">*</span>
          <textarea
            className="textarea-recipeForm"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            required
          />
        </label>

        <button className="button-sendRecipe" type="submit">
          Invia la tua ricetta
        </button>
        <p className="form-paragraph-sendRecipe">
          La tua ricetta sarà in attesa di approvazione prima di essere
          pubblicata.
        </p>
        <p className="form-paragraph-sendRecipe">
          Riceverai una notifica via email non appena il post contenente la tua
          ricetta sarà disponibile.
        </p>
        <br />
        <p className="form-paragraph-register">
          Per condividere una ricetta devi essere prima registrato
        </p>
        <p className="form-paragraph-register">
          <b>Non sei ancora registrato?</b>
        </p>
        <ButtonRegistrati />
      </form>
    </div>
  );
}
