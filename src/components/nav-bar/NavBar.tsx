import Container from "react-bootstrap/Container";
import REACT from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import acIcon from "../../assets/images/ac-icon.png";
import "./NavBar.scss";
import { NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavBar: REACT.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="navBar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="bg-primary"
      >
        <Container>
          <Navbar.Brand className="flex flex-row" href="/">
            <img className="h-8 w-17" alt="ac sas" src={acIcon} /> Alturas y
            Confinados
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown
                title="Productos y Servicios"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  href={`${
                    pathname.includes("products")
                      ? "WORKINGUP"
                      : "products/WORKINGUP"
                  }`}
                >
                  Trabajo en Alturas
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`${
                    pathname.includes("products")
                      ? "DOCUMENTATION"
                      : "products/DOCUMENTATION"
                  }`}
                >
                  Documentaciòn e implementaciòn SG_SST
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`${
                    pathname.includes("products") ? "AUDIT" : "products/AUDIT"
                  }`}
                >
                  Auditoria de Seguimiento
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`${
                    pathname.includes("products")
                      ? "VERTICAL"
                      : "products/VERTICAL"
                  }`}
                >
                  Rescate vertical
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`${
                    pathname.includes("products")
                      ? "SCAFFOLDING"
                      : "products/SCAFFOLDING"
                  }`}
                >
                  Armador de andamios
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`${
                    pathname.includes("products")
                      ? "SECURITY"
                      : "products/SECURITY"
                  }`}
                >
                  Equipos de Seguridad
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/validate-certified">
                Validar Certificado
              </Nav.Link>
              <Nav.Link href="/accreditation">Acreditacion</Nav.Link>
              <Nav.Link href="/aboutus">Sobre Nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
