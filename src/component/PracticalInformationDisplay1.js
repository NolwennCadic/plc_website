

import React from "react";
// import { Map } from "./Map";
import { BsPinMapFill, BsFillClockFill, BsFillTelephoneFill, BsFillInfoCircleFill, BsLinkedin } from "react-icons/bs";
import { Nav } from "react-bootstrap";

class PracticalInformationDisplay1 extends React.Component {//Should be Display1 with the state outside deciding if we show this one!!
    render() {
        return (
            <div>
                <h3 style={{ marginTop: "20px", marginBottom: "40px" }}> Nous joindre: </h3>
                <div className="InfoMenu">
                    <div className="subPartInfoLine">
                        <div className="subPartInfoGray">
                            <BsPinMapFill onClick={this.props.setHasMap} className="InfoIconGreen" />
                            <div className="InfoContent">
                                <div >
                                    <div style={{ paddingBottom: "7px" }}>Chambre de Métiers et de l'Artisanat Hauts-de-France :</div>
                                    <div>7 rue de l’Ile Mystérieuse </div>
                                    <div>80440 BOVES CS 51006</div>
                                    <div> 80332 LONGUEAU CEDEX</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="SubPartColored2"> */}
                        <div className="subPartInfoGreen">
                            {/* // 8h30-12h 13h30-17h */}
                            <BsFillTelephoneFill className="InfoIconGray" />
                            <div className="InfoContent">03 22 35 37 20</div>
                        </div>
                    </div>
                    <div className="subPartInfoLine">
                        <div className="subPartInfoGreen">
                            <BsFillClockFill className="InfoIconGray" />
                            <div className="InfoContent">
                                <div>8h30 - 12h</div>
                                <div>13h30 - 17h</div>
                            </div>
                        </div>
                        <div className="subPartInfoGray">
                            <BsFillInfoCircleFill className="InfoIconGreen" />
                            <Nav.Link href={"https://www.societe.com/societe/p-l-c-498965763.html"} className="InfoContent">Renseignements juridiques</Nav.Link>
                        </div>
                    </div>
                    <div className="subPartInfoGrayLine">
                        <BsLinkedin className="InfoIcon" />
                        <div className="InfoContent">
                            <div>Seule notre partie formation est accessible sur les réseaux: </div>
                            <Nav.Link href={"https://www.linkedin.com/in/sabine-cadic"}>Sabine Cadic</Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
            // className={"clickableItem"}
        )
    }

}

export default PracticalInformationDisplay1;
