

import React from "react";
// import { Map } from "./Map";
import map from "../images/mapCMA.PNG"
import { BsPinMapFill, BsFillClockFill, BsFillTelephoneFill, BsXLg } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import loupe from "../images/loupe.svg";

class PracticalInformation extends React.Component {
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
        // const location = {
        //     // address: "17 Rue de l'Île Mystérieuse, 80440 Boves, France",
        //     lat: 49.86743247024656,
        //     lng: 2.364749792595157
        // }

        // const zoom = 11;
        return (
            <div>

                <div className="SubPartColored">
                    <div style={{ paddingBottom: "12px" }}>Nos bureaux se trouvent au sein de la Chambre de Métiers et de l'Artisanat Hauts-de-France :</div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <BsPinMapFill onClick={this.setHasMap} style={{ fontSize: "40px", position: "relative", right: "115px", top: '15px', cursor: "pointer" }} />
                        <div>
                            <div>7 rue de l’Ile Mystérieuse </div>
                            <div>Bureau 40</div>
                            <div>80440 BOVES</div>
                        </div>
                    </div>
                    <img src={loupe} style={{ width: "15vw", position: "relative", left: "40vw" }} alt={"loupe"} />{/**ça fait trop gamin */}
                    <div className="title-part">
                        <div >Nous</div>
                        <div style={{ marginLeft: "35px" }} >trouver:</div>
                    </div>
                    {this.state.hasMap &&
                        <>
                            <img src={map} style={{ width: "90%", padding: "2px 0 2px 0" }} alt={"emplacement de la Chambe des Métier sur une carte"} />
                            {/* <Map location={location} zoomLevel={1} /> {/* Voir les conditions d'utilisation de google Map*/}
                            <BsXLg onClick={this.setHasMap} style={{ position: "relative", top: "10px", cursor: "pointer" }} />
                        </>
                    }
                </div>
                {/* <div className="SubPartColored2"> */}
                <div className="SubPartColored2">
                    <div>
                        {/* // 8h30-12h 13h30-17h */}
                        <BsFillClockFill />
                        <div>8h30 - 12h</div>
                        <div>13h30 - 17h</div>
                    </div>
                    <div>
                        <BsFillTelephoneFill />
                        <div>03 22 35 37 20</div>
                    </div>
                    <div className="title-part">
                        <div >Nous</div>
                        <div style={{ marginLeft: "35px" }} >contacter:</div>
                    </div>
                    {/* Le numéro de téléphone */}
                    {/* On veut l'heure d'ouverture  */}
                    {/* Quelles autres informations? */}
                </div>
                {/* More information: https://www.societe.com/societe/p-l-c-498965763.html */}
                <div className="SubPartColored">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div>
                            <Nav.Link href={"https://www.societe.com/societe/p-l-c-498965763.html"} className={"clickableItem"}>Renseignements juridiques</Nav.Link>
                        </div>
                    </div>
                    <div className="title-part">
                        <div >Nos</div>
                        <div style={{ marginLeft: "35px" }} >Réseaux::</div>
                    </div>
                </div>
                <div className="SubPartColored">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ paddingBottom: "12px" }}>Seule notre partie formation est accessible sur les réseaux, </div>
                    </div>
                    <div className="title-part">
                        <div >Plus</div>
                        <div style={{ marginLeft: "35px" }} >d'informations:</div>
                    </div>
                </div>
            </div>


        )
    }

}

export default PracticalInformation;
