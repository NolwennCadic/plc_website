import React from "react";
import { Stack } from "react-bootstrap";
import image1 from "../../../images/formations/formation1.jpg";
import image2 from "../../../images/formations/formation2.jpg";
import image3 from "../../../images/formations/formation3.jpg";
import image4 from "../../../images/formations/formation4.jpg";
import image5 from "../../../images/formations/formation5.jpg";
import image6 from "../../../images/formations/formation6.jpg";
import image7 from "../../../images/formations/formation7.jpg";
import image8 from "../../../images/formations/formation8.jpg";
import image9 from "../../../images/formations/formation9.jpg";
import typeList from "../../../data/formation/formationTypes.json";
import "./formation.css";

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

const generateColorMap = (types) => {
    let output = {};
    types.forEach((type, index) => {
        output[index] = ([`rgb(${type.couleur1RGB[0]}, ${type.couleur1RGB[1]}, ${type.couleur1RGB[2]})`, `rgb(${type.couleur1RGB[0]}, ${type.couleur1RGB[1]}, ${type.couleur1RGB[2]}, 0.05)`])
    })
    return output
}

//Try that for the OnMouseOver
// <tr style="background-color:#FFFFFF" onmouseover="this.style.backgroundColor='#000000'" onmouseout="this.style.backgroundColor='#FFFFFF'">

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

    // Use media and change style
    render() {
        const colorMap = generateColorMap(typeList)
        return (
            <>
                {/* <OverlayTrigger
                    key={"top" + this.props.formation.id}
                    placement={"top"}
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Télécharger la fiche d'information.
                        </Tooltip>
                    }
                > */}
                {/* <a href={pdfMap[this.props.formation.id]} download style={{ font: "bold", color: "black", textDecoration: "none"}}> */}
                
                <Stack
                    direction="horizontal"
                    style={
                        this.state.isHovered
                            ?
                            {
                                backgroundColor: `${colorMap[this.props.formation.type][1]}`,
                                boxShadow: "0px 3px 5px -1px rgb(0,0,0,20%), 0px 6px 10px 0px rgb(0,0,0,14%),0px 1px 18px 0px rgb(0,0,0,12%)",
                                cursor: "pointer",
                                margin: "0 1% 0 1%",
                                // height: "120px",
                            }
                            :
                            {
                                backgroundColor: "white",
                                border: "1px solid lightgray ",
                                borderRight: "none",
                                borderLeft: "none",
                                margin: "1px 10vw 1px 10vw",
                                // height: "110px"
                            }
                    }
                    onMouseEnter={this.toggleIsHovered}
                    onMouseLeave={this.toggleIsHovered}
                    onClick={() => { this.props.setFormationClicked(this.props.formation) }}
                >
                    <Stack style={{ width: "20vw", borderRight: `2px solid ${colorMap[this.props.formation.type][0]}`, borderBottom: `2px solid ${colorMap[this.props.formation.type][0]}` }}>
                        <img src={imagesMap[this.props.formation.id]} style={{ width: "80%", height: "100%", objectFit: "cover" }} alt={this.props.formation.nom} />
                    </Stack>
                    <Stack style={{ justifyContent: "center", width: "80vw" }}>
                        <h5>{this.props.formation.nom}</h5>
                        <Stack direction="horizontal" gap={3} style={{ justifyContent: "center", alignItems: "center" }}>
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
