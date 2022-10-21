

import React from "react";
import Menu from "../common/Menu";
// import formationImage from "../../images/menuFormation/formations.svg";
// import equipeImage from "../../images/menuFormation/equipe.svg";
// import conseilImage from "../../images/menuFormation/conseil.svg";
import Formation from "./formation/Formation";
import Equipe from "./equipe/Equipe";
import Mission from "./Mission/Mission";
import { ReactComponent as Graduationsvg } from "../../images/icons/graduation.svg";
import { ReactComponent as Listulsvg } from "../../images/icons/list-ul.svg";
import { ReactComponent as Groupsvg } from "../../images/icons/group.svg";

const menuList = [
    "Equipe",
    "Formations",
    "Mission",
]

//Should I be creating a mapping of my boxicons usable from anywhere? Would the local url be called correctly? Seems like it already does!
const mapMap = {
    formations: [Graduationsvg],
    equipe: [Groupsvg],
    mission: [Listulsvg],
}
class FormationMenu extends React.Component {
    render() {
        return (
            <>
                <Menu mapMap={mapMap} menuList={menuList} />
                <Mission />
                <Formation />
                <Equipe />
            </>
        )
    }

}

export default FormationMenu;
