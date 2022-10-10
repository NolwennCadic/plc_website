import React from "react";
import histoireData from "../../../data/cabinet/histoire.json";
import "./histoire.css";
import SubMenu from "../../common/subMenu/SubMenu";

function HistoireSubMenu() {
    return (
        <SubMenu
            iconTitle={"BsFillCalendarWeekFill"}
            menuTitle={"Histoire"}
            inputData={histoireData}
        />

    )

}
// PLC

export default HistoireSubMenu;
