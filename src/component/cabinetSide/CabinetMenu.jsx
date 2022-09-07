

import React from "react";
import Menu from "../common/Menu";
import formationImage from "../../images/menuFormation/formations.svg";
import equipeImage from "../../images/menuFormation/equipe.svg";
import Histoire from "./Histoire/Histoire";
import SandBoxOrganigramme from "./equipe/SandBoxOrganigramme";

const menuList = [
    "Histoire",
    "Equipe",
]

const mapMap = {
    histoire: [formationImage],
    equipe: [equipeImage],
}
class ComptableMenu extends React.Component {
    render() {
        return (
            <div>
                <Menu mapMap={mapMap} menuList={menuList} />
                <Histoire />
                <SandBoxOrganigramme/>
            </div>
        )
    }

}

export default ComptableMenu;
