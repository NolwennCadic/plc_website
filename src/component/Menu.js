

import React from "react";
import MenuCard from "./MenuCard";
import formationImage from "../images/formation.png";
import equipeImage from "../images/equipe.png";
import missionImage from "../images/mission.png";

const menuList = [
    "Formation",
    "Equipe",
    "Mission",
]

const mapMap = {
    formation: [formationImage],
    equipe: [equipeImage],
    mission: [missionImage],
}
class Menu extends React.Component {
    render() {
        return (
            <>
                <div
                    className="bg"
                >
                    <div style={{ display: "flex", alignContent: "center", justifyContent: "center", gap: "10px" }}>
                        {
                            menuList.map((item, index) => {
                                return (
                                    <div key={index + "div"} style={{ width: "10vw" }}>
                                        <MenuCard key={index + "Card"} title={item} image={mapMap[item.toLocaleLowerCase()][0]} />
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </>
        )
    }

}

export default Menu;
