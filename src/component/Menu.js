

import React from "react";
import MenuCard from "./MenuCard";
import formationImage from "../images/formation.png";
import equipeImage from "../images/equipe.png";
import missionImage from "../images/mission.png";
import Formation from "./formation/Formation";
import Equipe from "./equipe/Equipe";

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
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5vw"
                    }}
                >
                    {
                        menuList.map((item, index) => {
                            return (
                                <div key={index + "div"}>
                                    <MenuCard key={index + "Card"} title={item} image={mapMap[item.toLocaleLowerCase()][0]} />
                                </div>
                            )
                        })}
                </div>
                <Formation/>
                <Equipe/>
            </>
        )
    }

}

export default Menu;
