

import React from "react";
import MenuCard from "./MenuCard";
import formationImage from "../images/menuFormation/formations.svg";
import equipeImage from "../images/menuFormation/equipe.svg";
import conseilImage from "../images/menuFormation/conseil.svg";
import Formation from "./formation/Formation";
import Equipe from "./equipe/Equipe";

const menuList = [
    "Equipe",
    "Formations",
    "Conseil",
]

const mapMap = {
    formations: [formationImage],
    equipe: [equipeImage],
    conseil: [conseilImage],
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
                            console.log(item, index)
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
