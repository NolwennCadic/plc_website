import React from "react";
import logoQualiopi from "../images/qualiopiText.svg"
import certification from "../pdf/certification.pdf";

class HomePage extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="bg-homepage">
                <div className={"txt-homepage"}>Votre expert-comptable à proximité d'Amiens</div>
                    <a
                        href={certification}
                        style={{ position: "absolute", right: 0 }} download>
                        <img
                            src={logoQualiopi}
                            style={{ width: "30vw", height: "auto", backgroundColor: "white", border: "1px solid black", cursor: "pointer" }}
                            alt={"logo Qualiopi"}
                            title="voir le certificat"
                        />
                    </a>
                </div>
            </div>

        )
    }

}

export default HomePage;
