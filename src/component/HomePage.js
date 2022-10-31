import React from "react";
import logoQualiopi from "../images/LogoQualiopi-Marianne-150dpi-31.jpg"
import logo from "../images/logo2.png";
import MenuRound from "../component/common/MenuRound.js";
import { ReactComponent as FormationSvg } from "../images/icons/book-alt.svg";
import { ReactComponent as CabinetSvg } from "../images/icons/home-alt-2.svg";
const menuList = [
    "Cabinet",
    "Formation",
]
const mapMap = {
    cabinet: [CabinetSvg],
    formation: [FormationSvg],
}
class HomePage extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="bg-homepage">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ backgroundColor: "white", width: "20vw" }}>
                            <img
                                src={logoQualiopi}
                                style={{ width: "20vw" }}
                                alt={"logo Qualiopi"}
                            />
                            <div style={{ color: "#000091", font: "Arial, Helvetica, sans-serif", fontSize: "10px" }}>
                                La certification a été délivrée au titre de la catégorie d'action suivante
                                <div style={{ color: "#E1000F", fontSize: "12px" }}>ACTIONS DE FORMATION</div>
                            </div>
                        </div>
                        <img
                            src={logo}
                            // style={{ width: "20vw", position: "absolute", left: "4%", bottom: "20vh", backgroundColor: "white" }}
                            style={{ width: "20vw", backgroundColor: "white" }}
                            alt={"logo PLC"}
                        />
                    </div>
                </div>
            </div>

        )
    }

}

export default HomePage;
