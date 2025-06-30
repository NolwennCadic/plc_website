import React from "react";
// import logoQualiopi from "../images/qualiopiText.svg"
import logoQualiopi from "../images/LogoQualiopi-Marianne-150dpi-31.jpg"
import { Nav } from "react-bootstrap";

export default function HomePage() {
    return (
        <div className="body">
            <div className="bg-homepage">
                {/* <div className={"subpart-info-gray-line"}>Votre expert-comptable à proximité d'Amiens</div> */}
                <div className={"txt-homepage"}>Votre expert-comptable à proximité d'Amiens</div>
                <Nav.Link href={"/qualiopi"} style={{ position: "absolute", right: 0 }}>
                    <div
                        // style={{ width: "30vw", height: "auto", backgroundColor: "white", border: "1px solid black" }}
                        className={"qualiopo-outer-homepage"}
                    >
                        <div className={"qualiopo-text-homepage"}>Accéder au certificat</div>
                        <img
                            src={logoQualiopi}
                            // style={{ width: "30vw", height: "auto", backgroundColor: "white", border: "1px solid black", cursor: "pointer" }}
                            className={"qualiopo-logo-homepage"}
                            alt={"logo Qualiopi"}
                            title="Accéder au certificat"
                        />
                        <div className={"qualiopo-text-homepage"}>
                            La certification qualité a été délivrée au titre de la ou des catégories d'actions suivantes:
                            <div style={{ font: "Arial black", color: "#E1000F" }}>ACTIONS DE FORMATION</div>
                        </div>
                    </div>
                </Nav.Link>
            </div>
        </div>

    )
}

