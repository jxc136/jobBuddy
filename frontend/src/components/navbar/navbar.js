import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,  Navbar } from 'react-bootstrap';
import "./navbar.css";


function NavBar() {

const loggedIn = window.localStorage.getItem("user_id");

  const handleLogout = () => {
    if (loggedIn) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user_id");
    }
    
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href="/">jobBuddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign-Up</Nav.Link>
            <Nav.Link href="/login" onClick={handleLogout}>Log Out</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default NavBar;
