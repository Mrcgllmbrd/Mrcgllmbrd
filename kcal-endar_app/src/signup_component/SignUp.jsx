import { Button } from "react-bootstrap";
import "../-shared/components_styles/loginSignup.css";
import { UseSignup } from "./UseSignup";

export function Signup() {
  const {
    dataSignup,
    errorsSignup,
    onSignup,
    onInputChangeSignup,
    isCheckedDoc,
    isCheckedUser,
    onInputDocType,
    onInputUserType,
  } = UseSignup();
  return (
    <div className="loginSignup-container">
      <div className="signup-container">
        <h2>Registrati</h2>
        <form action="" type="submit">
          <div className="double-inp-signup-container">
            <div className="label-inp-signup-container">
              <input
                name="name"
                onChange={onInputChangeSignup}
                type="text"
                value={dataSignup.name}
                placeholder="nome"
              />
            </div>
            <input
              name="surname"
              onChange={onInputChangeSignup}
              type="text"
              value={dataSignup.surname}
              placeholder="cognome"
            />
          </div>
          <div className="double-inp-signup-container">
            <input
              name="username"
              onChange={onInputChangeSignup}
              type="text"
              value={dataSignup.username}
              placeholder="username"
            />

            <input
              name="email"
              onChange={onInputChangeSignup}
              type="text"
              value={dataSignup.email}
              placeholder="email"
            />
          </div>
          <input
            name="password"
            onChange={onInputChangeSignup}
            type="password"
            value={dataSignup.password}
            placeholder="password"
          />{" "}
          <p id="password-reminder-text">
            La password deve contenere almeno 8 caratteri tra cui un numero e un
            carattere speciale
          </p>
          <div id="userType-container">
            <div className="userType-labelAndInp">
              <label htmlFor="">utente</label>
              <input
                type="checkbox"
                checked={isCheckedUser}
                onChange={onInputUserType}
              />
            </div>
            <div className="userType-labelAndInp">
              <label htmlFor="">nutrizionista</label>
              <input
                type="checkbox"
                checked={isCheckedDoc}
                onChange={onInputDocType}
              />
            </div>
          </div>
          <Button type="submit" id="signup-button" onClick={onSignup}>
            Registrati
          </Button>{" "}
        </form>

        <span>sei già registrato? <a style={{textDecoration: "none", color: "var(--tangerine)", fontWeight:"bold" }} href="/login">accedi</a> </span> 
        <div>
          {errorsSignup && (
            <p className="signup-error-message">{errorsSignup.invalidName}</p>
          )}
          {errorsSignup && (
            <p className="signup-error-message">
              {errorsSignup.invalidSurname}
            </p>
          )}
          {errorsSignup && (
            <p className="signup-error-message">
              {errorsSignup.invalidUsername}
            </p>
          )}
          {errorsSignup && (
            <p className="signup-error-message">{errorsSignup.invalidEmail}</p>
          )}
          {errorsSignup && (
            <p className="signup-error-message">
              {errorsSignup.invalidPassword}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
