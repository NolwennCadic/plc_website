import React, { useState } from "react";
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
    BsFillBookFill,
    BsClipboardCheck,
} from "react-icons/bs";
import "./subMenu.css";

let mapIcons = {
    BsFillCalendarWeekFill: <BsFillCalendarWeekFill className={"icon-menu"} />,
    BsFillCalculatorFill: <BsFillCalculatorFill className={"icon-menu"} />,
    BsCurrencyEuro: <BsCurrencyEuro className={"icon-menu"} />,
    BsFillFilePersonFill: <BsFillFilePersonFill className={"icon-menu"} />,
    BsFillLightbulbFill: <BsFillLightbulbFill className={"icon-menu"} />,
    BsHouseFill: <BsHouseFill className={"icon-menu"} />,
    BsFillBriefcaseFill: <BsFillBriefcaseFill className={"icon-menu"} />,
    BsBookFill: <BsBookFill className={"icon-menu"} />,
    BsFillCalendarWeekFill: <BsFillCalendarWeekFill style={{ fontSize: "30px", paddingRight: "5px" }} />,
    BsFillBookFill: <BsFillBookFill style={{ fontSize: "30px", paddingRight: "5px" }} />,
    BsClipboardCheck: <BsClipboardCheck className={"icon-menu"} />
}

//input: title
// icon title
function SubMenu(props) {
    const { iconTitle, menuTitle, inputData } = props
    const [index, setIndex] = useState(0);
    function displayMenu(id) {
        return inputData[id];
    }

    let title = displayMenu(index).title;
    let content = displayMenu(index).content;
    return (
        <div className={"subMenu"} id={`${title}`} key={`div${title}`}>
            <div style={{ display: "flex", flexFlow: "row", justifyContent: "space-between" }}>
                <div className="title-part">
                    {mapIcons[iconTitle]}
                    {menuTitle}
                </div>
                <IndexBar indexSelected={index} amountButtons={inputData.length} setIndex={setIndex} />
            </div>
            <div style={{ textAlign: "left", overflow: "auto", height: "80%" }} key={`subDiv${title}`}>
                <div className={"subMenu-title"} key={`title`}>{title}</div>
                {content.list ?
                    //What changed?
                    <div>
                        {content.introduction && <span key={`spanIntroduction${title}`}>{content.introduction}</span>}
                        <ul>
                            {content.list.map((subMenu, index) => {
                                return (<div className={"list-item"} key={`div${subMenu.title}${index}`}>
                                    {mapIcons[subMenu.icon]}
                                    <div className={"list-title"} key={`title${subMenu.title}${index}`}>{subMenu.title}</div>
                                    <div style={{ width: "80vw" }} key={`content${subMenu.title}${index}`}>{subMenu.content}</div>
                                </div>)
                            })}
                        </ul>
                    </div>
                    : content.content
                        ?
                        <ul style={{ margin: "10px" }}>
                            {content.content.map((line, index) => {

                                return (<li key={`line${title}${index}`}>{line}</li>)

                            })}
                        </ul>
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

export default SubMenu;
