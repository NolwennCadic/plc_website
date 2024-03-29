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
import { ReactComponent as ChevronLeft } from "../../../images/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../../images/icons/chevron-right.svg";
import SubMenuContent from "./SubMenuContent";


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
    const length = inputData.length;
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((current) => {
            if (current === length - 1) {
                return (0);
            } else {
                return (current + 1);
            }
        })
    };

    const prevSlide = () => {
        setIndex((current) => {
            if (current === 0) {
                return (length - 1);
            } else {
                return (current - 1);
            }
        })
    }


    //Should pass on the entierty of the content
    return (
        <div className={"subMenu"} key={`divSubMenu`}>
            <div style={{ display: "flex", flexFlow: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div className="title-part">
                    {mapIcons[iconTitle]}
                    {menuTitle}
                </div>
                <IndexBar indexSelected={index} amountButtons={inputData.length} setIndex={setIndex} />
            </div>
            {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "80%" }}> */}
            {/* Let's test the translate --> use the index */}
            <div style={{ height: "80%" }}>
                <div
                    className="slider"
                >
                    <div style={{ width: "5vw" }}>
                        <ChevronLeft
                            onClick={prevSlide}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    </div>
                    <div style={{ width: "calc(70vw - 20px)", height: "100%"}}>
                        <SubMenuContent
                            inputData={inputData}
                            index={index}
                        />
                    </div>
                    <div style={{ width: "5vw", paddingRight: "10px" }}>
                        <ChevronRight
                            onClick={nextSlide}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    </div>
                </div>
            </div >
        </div >
    )
}
// PLC

export default SubMenu;
