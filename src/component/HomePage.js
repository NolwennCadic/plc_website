import React from "react";
import logoQualiopi from "../images/qualiopiText.svg"

class HomePage extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="bg-homepage">
                    <div style={{ position: "relative", left: "calc(100% - 30vw)" }}>
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
