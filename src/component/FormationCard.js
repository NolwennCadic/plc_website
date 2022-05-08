import React from "react";
import { Button, Card } from "react-bootstrap";
import comptaImage from "../images/compta.jpeg";

class FormationCard extends React.Component {

    render() {
        return (
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={comptaImage} />
                <Card.Body>

                    <Card.Title>Formation comptabilité niveau 1</Card.Title>
                    <Card.Text>
                        Apprendre les bases de la comptabilité
                    </Card.Text>
                    {/* <Button href="/formationDescription">En savoir plus</Button> */}
                    <a href="../pdf/formation1.pdf" download>
                        Download File
                    </a>
                </Card.Body>
            </Card>
        )
    }

}

export default FormationCard
