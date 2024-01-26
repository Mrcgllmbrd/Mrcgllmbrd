import { Link, useNavigate } from "react-router-dom";
import { CarouselAndWhat } from "./Components/CarouselAndWhat";
import { StepsAndBlog } from "./Components/StepsAndBlog";
import "../homepage_component/homepage.css";

export function Homepage() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate("/login")
  }

  function handleSignUp() {
    navigate("/signup")
  }
  return (
    <div>
      {/* <h1>HOMEPAGE</h1>
      <button onClick={handleLogin}>Accedi</button>
      <button onClick={handleSignUp}>Registrati</button>
      <br/>
      <Link to="/ricette">Guarda le ricette!</Link>
 */}
      <CarouselAndWhat />
      <StepsAndBlog />
    </div>
  )
}