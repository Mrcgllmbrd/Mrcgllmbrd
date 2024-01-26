import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavbarSite } from "./navbar/NavbarSite";
import { Homepage } from "./homepage_component/Homepage";
import { UserDashboard } from "./user-dashboard_component/UserDashboard";
import { DoctorDashboard } from "./doctor-dashboard_component/DoctorDashboard";
import { Login } from "./login_component/Login";
import { Footer } from "./footer/footer";
import { Signup } from "./signup_component/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChiSiamo } from "./chi_siamo_section/ChiSiamo";
import { ComeFunziona } from "./come-funziona_component/comeFunziona";
import { ProfSection } from "./professionisti_section/ProfSection";
import { AllRecipes } from "./ricette_component/Components/AllRecipes";
import { FormRecipe } from "./formRecipe/FormRecipe";


export const App = () => {
  return (
    <div>
      {" "}
      <NavbarSite />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/professionisti" element={<ProfSection />} />
          <Route path="/come-funziona" element={<ComeFunziona />} />
          <Route path="/condividi-ricetta" element={<FormRecipe />} />
        </Routes>
        <AllRecipes />
      </BrowserRouter>
      <Footer />{" "}
    </div>
  );
};
