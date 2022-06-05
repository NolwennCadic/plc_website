import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo2.png";

class NavbarCustom extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" style={{position: "sticky", top: 0, zIndex: 999 }}>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                style={{ width: "100px" }}
                                alt={"logo PLC"}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => this.setSubMenu("cabinet")}>Cabinet</Nav.Link>
                            <Nav.Link href={"/menu"}>Formations</Nav.Link>
                            {/*    <NavDropdown title="" id="cabinet-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Equipe</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Missions</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="" id="formation-dropdown">
                                    <NavDropdown.Item href="/formationsCatalogue">Catalogue</NavDropdown.Item>
                                    <NavDropdown.Item href="/customFormation">Sur mesure</NavDropdown.Item>
                                </NavDropdown>*/}
                        </Nav>
                        <Nav>
                            <Nav.Link href="/infosPratiques">Infos pratiques</Nav.Link>
                            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                        </Nav>
                        {/* </Navbar.Collapse> */}
                    </Container>
                </Navbar>
            </>
        )

    }

}

export default NavbarCustom;
