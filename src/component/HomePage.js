import React from "react";
import logoQualiopi from "../images/qualiopiText.svg"

class HomePage extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="bg-homepage">
                <div className={"txt-homepage"}>Votre expert-comptable à proximité d'Amiens</div>
                    <div style={{ position: "absolute", right: 0 }}>
                        <img
                            src={logoQualiopi}
                            style={{ width: "30vw", height: "auto", backgroundColor: "white", border: "1px solid black" }}
                            alt={"logo Qualiopi"}
                        />
                    </div>
                </div>
            </div>

        )
    }

}

export default HomePage;
