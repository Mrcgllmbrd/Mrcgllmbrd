import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function UseSignup() {
  const navigate = useNavigate()

  const [dataSignup, setDataSignup] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const [errorsSignup, setErrorsSignup] = useState({
    invalidUsername: "",
    invalidEmail: "",
    invalidPassword: "",
    invalidName: "",
    invalidSurname: "",
  });

   const [isCheckedUser, setIsCheckedUser] = useState(false);
   const [isCheckedDoc, setIsCheckedDoc] = useState(false);

  const regexPatterns = {
    alpha: /^[a-zA-Z]/,
    alphanumeric: /^[a-zA-Z0-9_.]+$/,
    email: /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
    password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
  };

  const isValid = (value, regex) => regex.test(value);
  
  // funzioni per scegliere tipologia utente che si registra
   function handleCheckboxUserChange() {
     setIsCheckedUser(!isCheckedUser);
     if (isCheckedDoc) {
       setIsCheckedDoc(false);
     }
   }

   function handleCheckboxDocChange() {
     setIsCheckedDoc(!isCheckedDoc);
     if (isCheckedUser) {
       setIsCheckedUser(false);
     }
   }

   // funzione digitazione input
   function handlerChange(e) {
    const { name, value } = e.target;
    setDataSignup((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    value === "" ? setErrorsSignup({}) : "";
  }

   // funzione al click sul button
  const handlerBtn = async (evt) => {
    evt.preventDefault();
    const { name, surname, username, email, password } = dataSignup;

    const newError = {
      invalidUsername:
        username && !isValid(username, regexPatterns.alphanumeric)
          ? "ATTENZIONE: L'username non può contenere caratteri speciali (es:£, $, %, &, *, @)"
          : "",
      invalidEmail:
        email && !isValid(email, regexPatterns.email)
          ? "ATTENZIONE: Inserisci un'email valida"
          : "",
      invalidPassword:
        password && !isValid(password, regexPatterns.password)
          ? "ATTENZIONE: inserisci una password valida"
          : "",
      invalidName:
        name && !isValid(name, regexPatterns.alpha)
          ? "ATTENZIONE: Il nome non può contenere numeri e caratteri speciali (es:£, $, %, &, *, @)"
          : "",
      invalidSurname:
        surname && !isValid(surname, regexPatterns.alpha)
          ? "ATTENZIONE: Il cognome non può contenere numeri e caratteri speciali (es:£, $, %, &, *, @)"
          : "",
    };
    setErrorsSignup(newError);
    const areData = Object.values(dataSignup).every((value) => value !== "");
    const noErrors = Object.values(errorsSignup).every((value) => value === "");

    if (areData && noErrors) {
      try {
      if(isCheckedUser) {
      const res = await axios.post(
          "http://localhost:3000/signup/user", dataSignup)
          navigate("/login")
           console.log(res.data)
      } else if(isCheckedDoc) {
        const res = await axios.post(
          "http://localhost:3000/signup/doc", dataSignup);
           console.log(res.data);
           navigate("/login");
      }
    } catch (error) {
        console.error(error.message);
      }
    }
  };

  return {
    dataSignup,
    errorsSignup,
    onSignup: handlerBtn,
    onInputChangeSignup: handlerChange,
    isCheckedUser,
    isCheckedDoc,
    onInputUserType: handleCheckboxUserChange,
    onInputDocType: handleCheckboxDocChange
  };
}
