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
    BsFillCalendarWeekFill1: <BsFillCalendarWeekFill className={"submenu-icon"} />,
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


    //Should pass on the entierty of the content
    return (
        <div className={"subMenu"} key={`divSubMenu`}>
            <div style={{ display: "flex", flexFlow: "row", justifyContent: "space-between" }}>
                <div className="title-part">
                    {mapIcons[iconTitle]}
                    {menuTitle}
                </div>
                <IndexBar indexSelected={index} amountButtons={inputData.length} setIndex={setIndex} />
            </div>
            {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "80%" }}> */}
            <div style={{ height: "80%" }}>
                {/* <div style={{ width: "100px" }}>
                    {index > 0 &&
                        <ChevronLeft
                            onClick={() => setIndex(index - 1)}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    }
                </div> */}

                <div className="slider">

                    {
                        inputData.map((_, index) => {
                            return (
                                <a href={`#slide-${index}`} key={`a-slide${index}`}>{index}</a>
                            )
                        })
                    }
                    <div className="slides">
                        {
                            inputData.map((item, index) => {
                                let content = item.content;
                                if (content.list) {
                                    return (
                                        <div style={{ textAlign: "left", overflow: "auto" }} key={`subDiv${index}`} id={`slide-${index}`}>
                                            <div className={"subMenu-title"} key={`title${index}`}>{item.title}</div>
                                            {content.introduction &&
                                                <span key={`spanIntroduction${index}`}>{content.introduction}</span>}
                                            <ul>
                                                {content.list.map((subMenu, subIndex) => {
                                                    return (
                                                        <div className={"list-item"} key={`div${index}${subIndex}`}>
                                                            {mapIcons[subMenu.icon]}
                                                            <div className={"list-title"} key={`title${index}${subIndex}`}>{subMenu.title}</div>
                                                            <div style={{ width: "80vw" }} key={`content${index}${subIndex}`}>{subMenu.content}</div>
                                                        </div>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                }
                                else if (content.content) {
                                    return (
                                        <div style={{ textAlign: "left", overflow: "auto" }} key={`subDiv${index}`} id={`slide-${index}`}>
                                            <div className={"subMenu-title"} key={`title${index}`}>{item.title}</div>
                                            <ul style={{ margin: "10px" }}>
                                                {content.content.map((line, subIndex) => {

                                                    return (<li key={`line${index}${subIndex}`}>{line}</li>)

                                                })}
                                            </ul>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div style={{ textAlign: "left", overflow: "auto" }} key={`subDiv${index}`} id={`slide-${index}`}>
                                            <div className={"subMenu-title"} key={`title${index}`}>{item.title}</div>
                                            <ul style={{ margin: "10px" }}>
                                                {content.map((line, subIndex) => {

                                                    return (<li key={`line${index}${subIndex}`}>{line}</li>)

                                                })}
                                            </ul>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <div style={{ width: "100px" }}>
                    {index < inputData.length - 1 &&
                        <ChevronRight
                            onClick={() => setIndex(index + 1)}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    }
                </div> */}
        </div >
    )
}
// PLC

export default SubMenu;
