

import React from "react";
import Menu from "../common/Menu";
import { ReactComponent as Booksvg } from "../../images/icons/book-open.svg";
import { ReactComponent as Groupsvg } from "../../images/icons/group.svg";
import Histoire from "./Histoire/Histoire";
import CabinetOrganigramme from "./equipe/CabinetOrganigramme";

const menuList = [
    "Histoire",
    "Equipe",
]

const mapMap = {
    histoire: [Booksvg],
    equipe: [Groupsvg],
}
class ComptableMenu extends React.Component {
    render() {
        return (
            <div>
                <Menu mapMap={mapMap} menuList={menuList} />
                <Histoire />
                <CabinetOrganigramme />
            </div>
        )
    }

}

export default ComptableMenu;
