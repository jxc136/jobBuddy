import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,  Navbar } from 'react-bootstrap';
import "./navbar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="#home">jobBuddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#login">login</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#help">help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default NavBar;
