import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo2.png";

class NavbarCustom extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" style={{ position: "sticky", top: 0, zIndex: 999 }}>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                style={{ width: "150px" }}
                                alt={"logo PLC"}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => this.setSubMenu("cabinet")}>Cabinet</Nav.Link>
                                <Nav.Link href={"/menu"}>Formations</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/infosPratiques">Infos pratiques</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )

    }

}

export default NavbarCustom;
