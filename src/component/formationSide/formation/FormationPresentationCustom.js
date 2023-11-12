import React from "react";
import { BsDownload } from "react-icons/bs";
import formation1 from "../../../pdf/formation1.pdf";
import formation2 from "../../../pdf/formation2.pdf";
import formation3 from "../../../pdf/formation3.pdf";
import formation4 from "../../../pdf/formation4.pdf";
import formation5 from "../../../pdf/formation5.pdf";
import formation6 from "../../../pdf/formation6.pdf";
import formation7 from "../../../pdf/formation7.pdf";
import formation8 from "../../../pdf/formation8.pdf";
import formation9 from "../../../pdf/formation9.pdf";
import "./formation.css";

const pdfMap = {
    0: formation1,
    1: formation2,
    2: formation3,
    3: formation4,
    4: formation5,
    5: formation6,
    6: formation7,
    7: formation8,
    8: formation9,
};

function FormationPresentationCustom(props) {
    let { formation, type } = props
    let title = formation.name
    let content = formation.content
    let index = formation.index
    //props: title
    //props: content
    //props: type
    //props: index
    return (
        <div key={`main${title}`}>{
            content &&
            <div key={`content${title}`} style={{ margin: "2%" }}>
                <h1 style={{ color: type.couleur1 }} className={"formation-title"}>{title}</h1>
                {content.map((submenu) => {
                    return (
                        <div key={`submenu${submenu.title}`} style={{ borderRight: `10px solid ${type.couleur2}`, borderLeft: `10px solid ${type.couleur2}` }}>
                            <h2 style={{ color: type.couleur2 }} className={"formation-submenu-title"}>{submenu.title}</h2>
                            {submenu.content.constructor === Array ?
                                <div key={`submenuContent${submenu.title}`} className={"formation-submenu"}>
                                    {submenu.content.map((subsubmenu) => {
                                        if (subsubmenu.title) {
                                            return (
                                                <div>
                                                    <div className="bold">{subsubmenu.title}</div>
                                                    <ul>
                                                        {subsubmenu.content && subsubmenu.content.map((list) => {
                                                            if (list.constructor === Array) {
                                                                return (
                                                                    <ul>
                                                                        {list.map((item) => {
                                                                            return <li key={`list${item}`}>{item}</li>
                                                                        })}
                                                                    </ul>
                                                                )
                                                            } else {
                                                                return <li>{list}</li>
                                                            }
                                                        })}
                                                    </ul>
                                                </div>
                                            )
                                        } else
                                            return <div style={{ margin: "5px 0 10px 0" }}>{subsubmenu.content}</div>
                                    })
                                    }
                                </div>
                                :
                                <div key={`submenuContent${submenu.title}`} className={"formation-submenu"}>
                                    {submenu.content}
                                </div>

                            }

                        </div>
                    )

                })
                }
            </div>
        }
            <div style={{ textAlign: "center", width: "100%", padding: "1% 0 1% 0", border: "1px solid lightGray" }}>
                {/* <a href={pdfMap[index]} download style={{ font: "bold", color: type.couleur1, textDecoration: "none" }}> */}
                <a href={pdfMap[index]} download>
                    <button type="button" className="btn btn" style={{ backgroundColor: type.couleur1, color: "white" }}>
                        <BsDownload style={{ fontSize: "30px" }} />
                        {/* <BsDownload style={{ fontSize: "30px", paddingRight: "5px" }} /> */}
                        {/* Telecharger la fiche */}
                    </button>
                </a>
            </div>
        </div>
    )
}

export default FormationPresentationCustom
