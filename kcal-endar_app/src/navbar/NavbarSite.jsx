import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../-assets/logo/Logo.name.png";
import avatar from "../-assets/icons/user-avatar-orange.svg";
import menu from "../-assets/icons/menu.svg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../navbar/navbarStyle-style.css";

export function NavbarSite() {
  const [navCollapse, setNavCollapse] = useState(false);
  const [show, setShow] = useState(false);


  const isVisible = useMediaQuery({ query: "(max-width: 1280px)" });

  useEffect(() => {
    setNavCollapse(isVisible);
  }, [isVisible]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar-style-div">
      <div id="prova"></div>

      <Navbar bsPrefix="navbar" expand="lg" id="navbar-style" fixed="top">
        <Container id="navbar-container">
          {!navCollapse && (
            <Navbar id="navbar-container">
              <Navbar.Brand href="/" id="navbar-brand-logo">
                <img src={logo} alt="KCALendar" id="navbar-logo" />
              </Navbar.Brand>
              <Navbar.Brand id="navbar-brand-visible">
                <Nav.Link href="/chi-siamo" className="navbar-link">
                  Chi siamo
                </Nav.Link>
                <Nav.Link href="/come-funziona" className="navbar-link">
                  Come funziona
                </Nav.Link>
                <Nav.Link href="/professionisti" className="navbar-link">
                  I nostri professionisti
                </Nav.Link>
                <Nav.Link href="/ricette" className="navbar-link">
                  Ricette
                </Nav.Link>
              </Navbar.Brand>
              <Nav.Link href="/login" id="navbar-brand-avatar">
                <img src={avatar} width="40" height="40" />
                <span
               
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Accedi
                </span>
              </Nav.Link>
            </Navbar>
          )}

          {/* Hamburger menu */}
          {navCollapse && (
            <Navbar bsPrefix="navbar" id="navbar-collapse">
              <Button onClick={handleShow} id="navbar-menu">
                <img src={menu} alt="Menù" className="navbar-hamburger-menu" />
              </Button>
              <Offcanvas show={show} onHide={handleClose} id="navbar-offcanvas">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="navbar-title-menu">
                    <div>KCALendar</div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav.Link href="/chi-siamo" className="navbar-link">
                    Chi siamo
                  </Nav.Link>
                  <Nav.Link href="/come-funziona" className="navbar-link">
                    Come funziona
                  </Nav.Link>
                  <Nav.Link href="/professionisti" className="navbar-link">
                    I nostri professionisti
                  </Nav.Link>
                  <Nav.Link href="/ricette" className="navbar-link">
                    Ricette
                  </Nav.Link>
                </Offcanvas.Body>
              </Offcanvas>
              <Navbar.Brand href="/" id="navbar-brand-logo">
                <img src={logo} alt="KCALendar" id="navbar-logo" />
              </Navbar.Brand>
              <Navbar.Brand id="navbar-brand-avatar">
                <Nav.Link href="login">
                  <img src={avatar} width="35" height="35" />
                </Nav.Link>{" "}
                <span
            
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Accedi
                </span>
              </Navbar.Brand>
            </Navbar>
          )}
        </Container>
      </Navbar>
    </div>
  );
}
