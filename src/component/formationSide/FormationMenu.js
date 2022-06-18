

import React from "react";
import Menu from "../common/Menu";
import formationImage from "../../images/menuFormation/formations.svg";
import equipeImage from "../../images/menuFormation/equipe.svg";
import conseilImage from "../../images/menuFormation/conseil.svg";
import Formation from "./formation/Formation";
import Equipe from "./equipe/Equipe";
import Mission from "./Mission/Mission";

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
class FormationMenu extends React.Component {
    render() {
        return (
            <>
                <Menu mapMap={mapMap} menuList={menuList} />
                <Formation />
                <Equipe />
                <Mission />
            </>
        )
    }

}

export default FormationMenu;
