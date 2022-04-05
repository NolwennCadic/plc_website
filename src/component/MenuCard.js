import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import comptaImage from "../images/compta.jpeg";

class MenuCard extends React.Component {

    render() {
        return (
            <Card style={{ width: '16rem', borderRadius: ".5rem", borderColor: "white" }}>
                <Card.Img
                    variant="top"
                    src={this.props.image}
                    style={{
                        width: "80%",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "10px",

                    }}
                />
                <Card.Body>

                    <hr
                        style={{
                            color: "black",
                            width: 200,
                            alignContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    />
                    <Card.Title><Link to={"/formationDescription"}>{this.props.title}</Link></Card.Title>
                </Card.Body>
            </Card>
        )
    }

}

export default MenuCard
