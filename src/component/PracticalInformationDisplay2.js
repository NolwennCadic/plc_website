

import React from "react";
import map from "../images/mapCMA.PNG"
import { BsPinMapFill, BsFillClockFill, BsFillTelephoneFill, BsXLg, BsFillInfoCircleFill, BsLinkedin } from "react-icons/bs";
import { Nav } from "react-bootstrap";

class PracticalInformationDisplay2 extends React.Component {//Should be Display1 with the state outside deciding if we show this one!!
    constructor() {
        super();
        this.state = {
            hasMap: false,
        };
        this.setHasMap = this.setHasMap.bind(this);

    }
    setHasMap() {
        this.setState({
            hasMap: !this.state.hasMap,
        });
    }


    render() {
        function openInNewTab(url) {
            window.open(url);
        };
        return (
            <div>
                <h3 style={{ marginTop: "20px", marginBottom: "40px" }}> Nous contacter: </h3>
                <div className="InfoMenu">
                    <div className="subpart-info-gray-line">
                        <BsPinMapFill onClick={this.props.setHasMap} className="InfoIconGreen" />
                        <div className="InfoContent">
                            <div >
                                <div style={{ paddingBottom: "7px" }}>Chambre de Métiers et de l'Artisanat Hauts-de-France :</div>
                                <div>7 rue de l’Ile Mystérieuse </div>
                                <div>Bureau 40</div>
                                <div>80440 BOVES</div>
                            </div>
                            <div style={{ position: "relative" }}>
                                <img src={map} className={"map-image"} alt={"emplacement de la Chambe des Métier sur une carte"} />
                                <BsXLg onClick={this.props.setHasMap} className={"map-cross"} />
                            </div>
                        </div>
                    </div>
                    <div className="subPartInfoLine">
                        {/* <div className="SubPartColored2"> */}
                        <div className="subpart-info-green">
                            {/* // 8h30-12h 13h30-17h */}
                            <BsFillTelephoneFill className="InfoIconGray" />
                            <div className="InfoContent">03 22 35 37 20</div>
                        </div>
                        <div className="subpart-info-gray">
                            <BsFillClockFill className="InfoIconGreen" />
                            <div className="InfoContent">
                                <div>8h30 - 12h</div>
                                <div>13h30 - 17h</div>
                            </div>
                        </div>
                    </div>
                    <div className="subPartInfoLine">
                        <div className="subpart-info-gray">
                            <BsFillInfoCircleFill className="InfoIconGreen" />
                            <Nav.Link onClick={() => openInNewTab("https://www.societe.com/societe/p-l-c-498965763.html")} className="InfoContent">Renseignements juridiques</Nav.Link>
                        </div>
                        <div className="subpart-info-green">
                            <BsLinkedin className="InfoIconGray" />
                            <div className="InfoContent">
                                <div>Seule notre partie formation est accessible sur les réseaux: </div>
                                <Nav.Link onClick={() => openInNewTab("https://www.linkedin.com/in/sabine-cadic")}>Sabine Cadic</Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // className={"clickableItem"}
        )
    }

}

export default PracticalInformationDisplay2;
