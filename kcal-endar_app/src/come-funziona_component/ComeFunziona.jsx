import { Link } from "react-router-dom";
import "./ComeFunziona.css";
import { ContentsComeFunziona } from "./Contents.ComeFunziona";


export function ComeFunziona() {
  return (
    <div className="container-comeFunziona">
      <h1 className="title-comeFunziona">Come funziona</h1>
      <br />
      <div className="content-comeFunziona">
        <ContentsComeFunziona />
      </div>
      <Link to="/come-funziona" />
    </div>
  )
}
