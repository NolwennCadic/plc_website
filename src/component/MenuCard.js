import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class MenuCard extends React.Component {

    render() {
        return (
            <Card
                style={{
                    width: '20vw',
                    height: "40vh",
                    borderRadius: ".5rem",
                    borderColor: "white",
                }}
            >
                <div style={{}}>
                    <Card.Img
                        variant="top"
                        src={this.props.image}
                        style={{
                            width: "20vw",
                            height: "26vh",
                            marginRight: "auto",
                            marginLeft: "auto",
                            marginTop: "10px",
                        }}
                    />
                </div>
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
                    <Card.Title><Link to={`#${this.props.title}`}>{this.props.title}</Link></Card.Title>
                </Card.Body>
            </Card>
        )
    }

}

export default MenuCard
