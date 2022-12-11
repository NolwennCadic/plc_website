import React from "react";
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
function SubMenuContent(props) {
    const { inputData, index } = props
    let title = inputData[index].title;
    let content = inputData[index].content;
    //Should pass on the entierty of the content
    return (
        <div style={{
            width: "100%",
            overflow: "hidden",
            height: "100%",
        }}>
                    <div key={`contentSlide${index}`} className={"submenu-content"}>
                        <div style={{ textAlign: "left", overflow: "auto" }} key={`subDiv${title}`}>
                            <div className={"subMenu-title"} key={`title`}>{title}</div>
                            {content.list ?
                                //What changed?
                                <div>
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

                    </div>
        </div>
    )
}
// PLC

export default SubMenuContent;
