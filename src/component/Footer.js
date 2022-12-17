import React from "react";
// import { Nav } from "react-bootstrap";

class Footer extends React.Component {
    render() {

        return (
            // <div style={{ width: "100%", height: "auto", background: "#f8f9fa" }}>
            <div className="footer">
                <div onClick={this.props.toggleShowNewsletterDialog} style={{ cursor: "pointer" }}>S'inscrire à la Newsletter</div>
                <div onClick={this.props.toggleShowContactDialog} style={{ cursor: "pointer" }}>Nous contacter</div>
                {/* <Nav.Link href="/infosPratiques">Nous joindre</Nav.Link> */}
            </div>
        );
    }
}

export default Footer;
