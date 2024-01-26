import { Button } from "react-bootstrap";
import "../-shared/components_styles/loginSignup.css";
import { UseLogin } from "./UseLogin";
import { Link } from "react-router-dom";



export function Login() {
  const { dataLogin, errorsLogin, onLogin, onInputChangeLogin } = UseLogin();

  return (
    <div className="loginSignup-container">
      <div className="login-container">
        <h2>Login</h2>
        <form action="">
          <input
            name="email"
            onChange={onInputChangeLogin}
            type="text"
            value={dataLogin.email}
            placeholder="email
            "
          />
          <input
            name="password"
            onChange={onInputChangeLogin}
            type="password"
            value={dataLogin.password}
            placeholder="password"
          />
          <Button type="submit" id="login-button" onClick={onLogin}>
            Accedi
          </Button>{" "}
          <h6>non hai un account?</h6>
          <Link to="../../signup" className="login-link">Registrati</Link>
         
          <p>{errorsLogin.invalidUsernameEmail}</p>
          <p>{errorsLogin.invalidPassword}</p>
        </form>
      </div>
    </div>
  );
}
