import React, { useState } from "react";
import histoireData from "../../../data/cabinet/histoire.json";
import { IndexBar } from "./IndexBar";
import {
    BsFillCalendarWeekFill,
    BsFillCalculatorFill,
    BsCurrencyEuro,
    BsFillFilePersonFill,
    BsFillLightbulbFill,
    BsHouseFill,
    BsFillBriefcaseFill,
    BsBookFill,
} from "react-icons/bs";
import "./histoire.css";

let mapIcons = {
    BsFillCalendarWeekFill: <BsFillCalendarWeekFill className={"icon-menu-histoire"} />,
    BsFillCalculatorFill: <BsFillCalculatorFill className={"icon-menu-histoire"} />,
    BsCurrencyEuro: <BsCurrencyEuro className={"icon-menu-histoire"} />,
    BsFillFilePersonFill: <BsFillFilePersonFill className={"icon-menu-histoire"} />,
    BsFillLightbulbFill: <BsFillLightbulbFill className={"icon-menu-histoire"} />,
    BsHouseFill: <BsHouseFill className={"icon-menu-histoire"} />,
    BsFillBriefcaseFill: <BsFillBriefcaseFill className={"icon-menu-histoire"} />,
    BsBookFill: <BsBookFill className={"icon-menu-histoire"} />,

}
function HistoireSubMenu() {

    const [index, setIndex] = useState(0);
    function displayMenu(id) {
        return histoireData[id];
    }

    let title = displayMenu(index).title;
    let content = displayMenu(index).content;
    return (
        <div className={"subMenu-histoire"} id={`${title}`} key={`div${title}`}>
            <div style={{ display: "flex", flexFlow: "row", justifyContent: "space-between" }}>
                <div className="title-part">
                    <BsFillCalendarWeekFill style={{ fontSize: "30px", paddingRight: "5px" }} />
                    Histoire
                </div>
                <IndexBar indexSelected={index} amountButtons={histoireData.length} setIndex={setIndex} />
            </div>
            <div style={{ textAlign: "left", overflow: "scroll", height: "80%" }} key={`subDiv${title}`}>
                <div className={"list-title-histoire"} key={`title${title}`}>{title}</div>
                {content.introduction ?
                    <div>
                        {content.introduction}
                        <ul>
                            {content.content.map((subMenu, index) => {
                                return (<div className={"list-item-histoire"}>
                                    {mapIcons[subMenu.icon]}
                                    <div className={"list-title-histoire"}>{subMenu.title}</div>
                                    <div style={{ width: "80vw" }}>{subMenu.content}</div>
                                </div>)
                            })}
                        </ul>
                    </div>
                    : <ul style={{ margin: "10px" }}>
                        {content.map((line, index) => {

                            return (<li key={`line${title}${index}`}>{line}</li>)

                        })}
                    </ul>
                }
            </div>
        </div>

    )

}
// PLC

export default HistoireSubMenu;
