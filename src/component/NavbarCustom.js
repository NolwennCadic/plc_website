import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const navigationItems = {
    Cabinet: ["Presentation", "Equipe", "Missions"],
    Formation: ["Catalogue", "Sur mesure"]
};

class NavbarCustom extends React.Component {
    constructor() {
        super();
        this.state = {
            hasSubMenu: false,
            activeSubMenu: "",
        };
        this.setHasSubMenu = this.setHasSubMenu.bind(this);

    }
    setHasSubMenu(newActiveSubMenu) {
        this.setState({ activeSubMenu: this.state.hasSubMenu && (this.state.activeSubMenu === newActiveSubMenu)? "" : newActiveSubMenu, hasSubMenu: this.state.hasSubMenu && (this.state.activeSubMenu !== newActiveSubMenu)? true : !this.state.hasSubMenu });
    }
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">PLC</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => this.setHasSubMenu("Cabinet")}>Cabinet</Nav.Link>
                                <Nav.Link onClick={() => this.setHasSubMenu("Formation")}>Formation</Nav.Link>
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
                                <Nav.Link href="#practical-info">Infos pratiques</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        {/* </Navbar.Collapse> */}
                    </Container>
                </Navbar>
                {this.state.hasSubMenu &&
                    <Nav className="me-auto">
                        {
                            navigationItems[this.state.activeSubMenu].map((item, index) => {
                                return <Nav.Link href={`#${item.toLowerCase()}`} key={index + item}>{item}</Nav.Link>
                            })
                        }
                    </Nav>
                }
            </>
        )

    }

}

export default NavbarCustom;
