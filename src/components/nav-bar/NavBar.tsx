import Container from "react-bootstrap/Container";
import REACT from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import acIcon from "../../assets/images/ac-icon.png"
import "./NavBar.scss";

const NavBar: REACT.FC = () => {
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
          <Navbar.Brand className="flex flex-row" href="/"><img className="h-8 w-17"alt="ac sas" src={acIcon}/> Alturas y Confinados</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown
                title="Productos y Servicios"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Trabajo en Alturas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Documentaciòn e implementaciòn SG_SST
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="validate-certified">Validar Certificado</Nav.Link>
              <Nav.Link href="accreditation">Acreditacion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
