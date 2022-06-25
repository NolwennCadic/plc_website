import React from "react";
import { Card } from "react-bootstrap";
import comptaImage from "../../../images/compta.jpeg";
import formation1 from "../../../pdf/formation1.pdf";
import formation2 from "../../../pdf/formation2.pdf";

const pdfMap = {
    1: formation1,
    2: formation2,
};

const imagesMap = {
    compta: comptaImage,
}

//Input, wa have formation data
class FormationCard extends React.Component {
    render() {
        return (
            // <Card border="info" style={{ width: '18rem', borderColor: "#f5f3f0!important" }}>
            <Card style={{ width: '18rem', border: "1px solid #f5f3f0", borderRadius: "0.5em", height: "400px" }}>
                <Card.Img variant="top" src={imagesMap[this.props.formation.image]} style={{ padding: "10%", borderRadius: "0.5em" }} />
                <hr className="my-12" />
                <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "space-between", justifyContent: "center" }}>

                    <Card.Title style={{ height: "50px" }}>{this.props.formation.name}</Card.Title>
                    <Card.Text>
                        <div>
                            <i className="bi bi-clock"> {this.props.formation.time}</i>
                        </div>
                        <div>
                            <i className="bi bi-bar-chart-fill"> {this.props.formation.level}</i>
                        </div>
                        {this.props.formation.shortDescription}
                    </Card.Text>
                    <a href={pdfMap[this.props.formation.id]} download style={{font: "bold", color:"black", textDecoration:"none"}}><i class="bi bi-download"> Descriptif</i></a>
                </Card.Body>
            </Card>
        )
    }
}

export default FormationCard
