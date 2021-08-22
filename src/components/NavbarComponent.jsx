import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import DSI_logo from '../assets/logo.png';
import Home_icon from '../assets/home_icon.png';
import Message_icon from '../assets/message_icon.png';
import Cross_icon from '../assets/cross_icon.png';

function NavbarComponent() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" style={{backgroundColor: "white", borderBottom: "2px solid #E6E6E6"}}>
  <Container>
  <Navbar.Brand href="#home">
    <img src={DSI_logo} alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link className="px-4" href="#services">Services</Nav.Link>
      <Nav.Link className="px-4" href="#product">Product</Nav.Link>
      <Nav.Link className="px-4" href="#technology">Technology</Nav.Link>
      <NavDropdown title="About" className="px-4" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#home">About 1</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Client" className="px-4" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#home">Client 1</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className="px-4" href="#home">Partner</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#" className="d-none d-lg-inline">
        <img src={Home_icon} alt="" width="22px"/>
      </Nav.Link>
      <Nav.Link href="#" className="d-none d-lg-inline">
        <img src={Message_icon} alt="" width="22px"/>
      </Nav.Link>
      <Nav.Link href="#" className="d-none d-lg-inline">
        <img src={Cross_icon} alt="" width="22px"/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarComponent;
