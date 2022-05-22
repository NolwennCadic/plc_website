import React from "react";
import { Card } from "react-bootstrap";
import comptaImage from "../images/compta.jpeg";
import formation1 from "../pdf/formation1.pdf";
import formation2 from "../pdf/formation2.pdf";

const fomationPdfs = {
    1: formation1,
    2: formation2,
};

const images = {
    compta: comptaImage,
}

//Input, wa have formation data
class FormationCard extends React.Component {
    render() {
        return (
            <Card border="info" style={{ width: '18rem', border: "none" }}>
                <Card.Img variant="top" src={images[this.props.formation.image]} style={{ padding: "10%", borderRadius: "0.5em" }} />
                <hr class="my-12" />
                <Card.Body>

                    <Card.Title>{this.props.formation.name}</Card.Title>
                    <Card.Text>
                        {this.props.formation.shortDescription}
                    </Card.Text>
                    <a href={fomationPdfs[this.props.formation.id]} download>Infomations supplémentaires</a>
                </Card.Body>
            </Card>
        )
    }

}

export default FormationCard
