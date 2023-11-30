import React from "react";
import logoQualiopi from "../images/qualiopiText.svg"
import { Nav } from "react-bootstrap";

export default function HomePage() {
    return (
        <div className="body">
            <div className="bg-homepage">
                <div className={"txt-homepage"}>Votre expert-comptable à proximité d'Amiens</div>
                <Nav.Link href={"/qualiopi"} style={{ position: "absolute", right: 0 }}>
                    <img
                        src={logoQualiopi}
                        style={{ width: "30vw", height: "auto", backgroundColor: "white", border: "1px solid black", cursor: "pointer" }}
                        alt={"logo Qualiopi"}
                        title="Accéder au certificat"
                    />
                </Nav.Link>
            </div>
        </div>

    )
}

