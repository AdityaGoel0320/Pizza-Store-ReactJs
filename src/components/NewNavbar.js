import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from 'react-router-dom';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <NavLink className="navbar-brand" to="#">
                    <img src="../images/logo.jpg" className='h-12' alt="" />

                </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
            <NavLink className="nav-link " to="/">Home</NavLink>

            </Nav.Link>
            <Nav.Link href="#link">
            <NavLink className="nav-link" to="/products">Products</NavLink>

            </Nav.Link>
            <Nav.Link href="#link">
            <NavLink className="nav-link" to="/about">About</NavLink>


            </Nav.Link>

            <Nav.Link href="#link">
            <NavLink className="nav-link" to="/cart">Cart</NavLink>


            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;