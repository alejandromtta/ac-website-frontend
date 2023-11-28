import Container from 'react-bootstrap/Container';
import REACT from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  './NavBar.module.scss'

const NavBar:REACT.FC = () => {
  return (
    <div className="navBar">
    <Navbar collapseOnSelect expand="lg" bg="primary" variant='dark' className="navBar__bg-primary"  >
      <Container>
        <Navbar.Brand  href="#home">AC ALTURAS Y CONFINADOS SAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Validar Certificado</Nav.Link>
            <NavDropdown title="Productos y Servicios" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;