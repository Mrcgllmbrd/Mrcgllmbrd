import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function UseLogin() {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorsLogin, setErrorsLogin] = useState({
    invalidUsernameEmail: "",
    invalidPassword: "",
  });

  const navigateLogin = useNavigate();

  function handlerChange(e) {
    const { name, value } = e.target;
    setDataLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // ...

  const handlerBtn = async (evt) => {
    evt.preventDefault();
    const { email, password } = dataLogin;

    setErrorsLogin({
      invalidUsernameEmail: !email ? "l'email non esiste" : "",
      invalidPassword: !password ? "password non corretta" : "",
    });

    if (email && password) {
      const loginUser = `http://localhost:3000/login`;

      try {
        const res = await axios.post(loginUser, dataLogin);
        console.log(res.data.id);
          const userId = res.data.id;
          const docId = res.data.id;

        const userType = res.data.userType;
        if (userType === "user") {
          localStorage.setItem("userId", userId);
          navigateLogin("/user-dashboard");
        } else if (userType === "doc") {
          localStorage.setItem("docId", docId);
          navigateLogin("/doctor-dashboard");
        } else {
          console.error(res.data.message);
        }
        
        console.log(res.data.id, "first userId 'api url'");
    
        const getMealsPlanner = `http://localhost:3000/meals/${userId}`;
        console.log(userId, "second userId 'getMealsPlanner' ");
        const response = await axios.get(getMealsPlanner);
        return response;
      } catch (error) {
        if (error.response) {
          console.error("Errore lato server:", error.response.data.message);
        } else if (error.request) {
          console.error("Nessuna risposta dal server");
        } else {
          console.error("Errore durante la richiesta:", error.message);
        }
      }
    }
  };

  // ...
  return {
    dataLogin,
    errorsLogin,
    onLogin: handlerBtn,
    onInputChangeLogin: handlerChange,
  };
}
