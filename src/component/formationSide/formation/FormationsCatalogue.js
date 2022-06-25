import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormationCard from "./FormationCard";
import formationList from "../../../data/formationDetails2.json";

class FormationsCatalogue extends React.Component {

    columnsPerRow = 4;

    getColCardsForGrid() {
       return formationList.map((formation, index) => {
        console.log(formation, index)
            return (
                <Col key={`formationColumn${index}`}>
                    <FormationCard formation={formation} key={`formation${index}`} />
                </Col>

            )
        });
    }

    render() {

        return (
            <Container >
                <Row xs={1} sm={1} md={this.columnsPerRow} className="justify-content-md-center">
                    {this.getColCardsForGrid()}
                </Row>
            </Container>
        )
    }

}

export default FormationsCatalogue;
