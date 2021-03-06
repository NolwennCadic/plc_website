import React from "react";
import { Stack, Tooltip, OverlayTrigger } from "react-bootstrap";
import image1 from "../../../images/formations/formation1.jpg";
import image2 from "../../../images/formations/formation2.jpg";
import image3 from "../../../images/formations/formation3.jpg";
import image4 from "../../../images/formations/formation4.jpg";
import image5 from "../../../images/formations/formation5.jpg";
import image6 from "../../../images/formations/formation6.jpg";
import image7 from "../../../images/formations/formation7.jpg";
import image8 from "../../../images/formations/formation8.jpg";
import image9 from "../../../images/formations/formation9.jpg";
// import formation1 from "../../../pdf/formation1.pdf";
// import formation2 from "../../../pdf/formation2.pdf";
// import formation3 from "../../../pdf/formation3.pdf";
// import formation4 from "../../../pdf/formation4.pdf";

// const pdfMap = {
//     1: formation1,
//     2: formation2,
//     3: formation3,
//     4: formation4,
// };

const imagesMap = {
    0: image1,
    1: image2,
    2: image3,
    3: image4,
    4: image5,
    5: image6,
    6: image7,
    7: image8,
    8: image9,
}

const colorMap = {
    0: ["rgb(43, 79, 49)", "rgb(43, 79, 49, 0.05)"],
    1: ["rgb(122, 12, 12)", "rgb(122, 12, 12, 0.05)"],
    2: ["rgb(122, 12, 12)", "rgb(122, 12, 12, 0.05)"],
    3: ["rgb(122, 12, 12)", "rgb(122, 12, 12, 0.05)"],
}

//Input, wa have formation data
class FormationCardBis extends React.Component {
    constructor() {
        super();
        this.state = {
            isHovered: false,
        };
        this.toggleIsHovered = this.toggleIsHovered.bind(this);

    }
    toggleIsHovered() {
        this.setState({
            isHovered: !this.state.isHovered,
        });
    }
    render() {
        return (
            <>
                {/* <OverlayTrigger
                    key={"top" + this.props.formation.id}
                    placement={"top"}
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            T??l??charger la fiche d'information.
                        </Tooltip>
                    }
                > */}
                {/* <a href={pdfMap[this.props.formation.id]} download style={{ font: "bold", color: "black", textDecoration: "none"}}> */}
                <Stack
                    direction="horizontal"
                    style={
                        this.state.isHovered
                            ? {
                                padding: "10px",
                                // backgroundColor: "#f8f9fa",
                                backgroundColor: `${colorMap[this.props.formation.type][1]}`,
                                opacity: "0.5",
                                boxShadow: "0px 3px 5px -1px rgb(0,0,0,20%), 0px 6px 10px 0px rgb(0,0,0,14%),0px 1px 18px 0px rgb(0,0,0,12%)"
                            } : {
                                padding: "10px",
                                backgroundColor: "white",
                                boxShadow: "rgb(0 0 0 / 20%) 0px 1px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px"
                            }
                    }
                    onMouseEnter={this.toggleIsHovered}
                    onMouseLeave={this.toggleIsHovered}
                    onClick={() => { this.props.setFormationClicked(this.props.formation) }}
                >
                    <Stack style={{ maxWidth: "200px", borderRight: `2px solid ${colorMap[this.props.formation.type][0]}`, borderBottom: `2px solid ${colorMap[this.props.formation.type][0]}` }}>
                        <img src={imagesMap[this.props.formation.id]} style={{ width: "80%" }} alt={this.props.formation.nom} />
                    </Stack>
                    <Stack>
                        <h5>{this.props.formation.nom}</h5>
                        <Stack direction="horizontal" gap={3} style={{ justifyContent: "center" }}>
                            <i className="bi bi-clock"> {this.props.formation.time}</i>
                            <i className="bi bi-bar-chart-fill"> {this.props.formation.level}</i>
                        </Stack>
                        {this.props.formation.shortDescription}
                    </Stack>
                </Stack>
                {/* </a> */}
                {/* </OverlayTrigger > */}
            </>
        )
    }
}

export default FormationCardBis
