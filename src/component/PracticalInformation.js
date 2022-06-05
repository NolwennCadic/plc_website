

import React from "react";
// import { Map } from "./Map";
import map from "../images/mapCMA.PNG"
import { BsPinMapFill, BsFillClockFill, BsFillTelephoneFill, BsXLg } from "react-icons/bs";

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
                        <BsPinMapFill onClick={this.setHasMap} style={{ fontSize: "40px", position: "relative", right: "115px", top: '15px' }} />
                        <div>
                            <div>7 rue de l’Ile Mystérieuse </div>
                            <div>80440 BOVES CS 51006</div>
                            <div> 80332 LONGUEAU CEDEX</div>
                        </div>
                    </div>
                    <div className="titleSubPart">
                        <div >Nous</div>
                        <div style={{ marginLeft: "35px" }} >trouver</div>
                    </div>
                    {this.state.hasMap &&
                        <>
                            <img src={map} style={{ width: "90%", padding: "2px 0 2px 0" }} alt={"emplacement de la Chambe des Métier sur une carte"} />
                            {/* <Map location={location} zoomLevel={1} /> {/* Voir les conditions d'utilisation de google Map*/}
                            <BsXLg onClick={this.setHasMap} style={{ position: "relative", top: "10px" }} />
                        </>
                    }
                </div>
                <div className="SubPartColored2">
                    <div>
                        <BsFillClockFill />
                    </div>
                    <div>
                        <BsFillTelephoneFill />
                    </div>
                    <div className="titleSubPart">
                        <div >Nous</div>
                        <div style={{ marginLeft: "35px" }} >contacter</div>
                    </div>
                    {/* Le numéro de téléphone */}
                    {/* On veut l'heure d'ouverture  */}
                    {/* Quelles autres informations? */}
                </div>
            </div>
        )
    }

}

export default PracticalInformation;
