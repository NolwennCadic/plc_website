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
    console.log("index = ", index);


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

                <div
                    className="slider"
                >

                    <a onClick={() => { setIndex(0) }}>1</a>
                    <a onClick={() => { setIndex(1) }}>2</a>
                    <a onClick={() => { setIndex(2) }}>3</a>
                    <a onClick={() => { setIndex(3) }}>4</a>
                    <a onClick={() => { setIndex(4) }}>5</a>

                    <div
                        className="slides"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        <div style={{ heigth: "80%" }}>
                            <div id="slide-1">
                                1
                            </div>
                            <p>paragraphe</p>
                        </div>
                        <div id="slide-2">
                            2
                        </div>
                        <div id="slide-3">
                            3
                        </div>
                        <div id="slide-4">
                            4
                        </div>
                        <div id="slide-5">
                            5
                        </div>
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
