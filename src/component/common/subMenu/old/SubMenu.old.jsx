import React, { useState } from "react";
import { IndexBar } from "../IndexBar";
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
import { ReactComponent as ChevronLeft } from "../../../images/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../../images/icons/chevron-right.svg";
import "./subMenu.css";

let mapIcons = {
    BsFillCalendarWeekFill: <BsFillCalendarWeekFill className={"submenu-icon"} />,
    BsFillCalculatorFill: <BsFillCalculatorFill className={"submenu-icon"} />,
    BsCurrencyEuro: <BsCurrencyEuro className={"submenu-icon"} />,
    BsFillFilePersonFill: <BsFillFilePersonFill className={"submenu-icon"} />,
    BsFillLightbulbFill: <BsFillLightbulbFill className={"submenu-icon"} />,
    BsHouseFill: <BsHouseFill className={"submenu-icon"} />,
    BsFillBriefcaseFill: <BsFillBriefcaseFill className={"submenu-icon"} />,
    BsBookFill: <BsBookFill className={"submenu-icon"} />,
    BsFillCalendarWeekFill: <BsFillCalendarWeekFill style={{ fontSize: "30px", paddingRight: "5px" }} />,
    BsFillBookFill: <BsFillBookFill style={{ fontSize: "30px", paddingRight: "5px" }} />,
    BsClipboardCheck: <BsClipboardCheck className={"submenu-icon"} />
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
    let isLeftHovered = useState(false);
    let isRightHovered = useState(false);

    //Should pass on the entierty of the content
    return (
        <div className={"subMenu"} id={`${title}`} key={`div${title}`}>
            <div style={{ display: "flex", flexFlow: "row", justifyContent: "space-between" }}>
                <div className="title-part">
                    {mapIcons[iconTitle]}
                    {menuTitle}
                </div>
                <IndexBar indexSelected={index} amountButtons={inputData.length} setIndex={setIndex} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "80%" }}>
                <div style={{ width: "100px" }}>
                    {index > 0 &&
                        <ChevronLeft
                            onClick={() => setIndex(index - 1)}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    }
                </div>
                <div style={{ textAlign: "left", overflow: "auto" }} key={`subDiv${title}`}>
                    <div className={"subMenu-title"} key={`title`}>{title}</div>
                    {content.list ?
                        //What changed?
                        <div className={"subMenu-content"}>
                            {content.introduction &&
                                <span key={`spanIntroduction${title}`}>{content.introduction}</span>}
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
                <div style={{ width: "100px" }}>
                    {index < inputData.length - 1 &&
                        <ChevronRight
                            onClick={() => setIndex(index + 1)}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
// PLC

export default SubMenu;
