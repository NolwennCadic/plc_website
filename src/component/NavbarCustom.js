import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavbarCustom extends React.Component {

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">PLC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cabinet" id="cabinet-dropdown">
                        <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Equipe</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Missions</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Formation" id="formation-dropdown">
                        <NavDropdown.Item href="/formationsCatalogue">Catalogue</NavDropdown.Item>
                        <NavDropdown.Item href="/customFormation">Sur mesure</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#practical-info">Infos pratiques</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
        
    }

}

export default NavbarCustom;
