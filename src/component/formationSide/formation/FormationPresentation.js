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

class FormationPresentation extends React.Component {
    //props: title
    //props: content
    //props: type
    //props: index
    render() {
        return (
            <div key={`main${this.props.title}`}>{
                this.props.content &&
                <div key={`content${this.props.title}`} style={{ margin: "2%" }}>
                    <h1 style={{ color: this.props.type.couleur1 }} className={"formation-title"}>{this.props.title}</h1>
                    {this.props.content.map((submenu) => {
                        return (
                            <div key={`submenu${submenu.title}`} style={{ borderRight: `10px solid ${this.props.type.couleur2}`, borderLeft: `10px solid ${this.props.type.couleur2}` }}>
                                <h2 style={{ color: this.props.couleur2 }} className={"formation-submenu-title"}>{submenu.title}</h2>
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
                                                                                return <li>{item}</li>
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
                    {/* <a href={pdfMap[this.props.index]} download style={{ font: "bold", color: this.props.type.couleur1, textDecoration: "none" }}> */}
                    <a href={pdfMap[this.props.index]} download>
                        <button type="button" className="btn btn" style={{ backgroundColor: this.props.type.couleur1, color: "white" }}>
                            <BsDownload style={{ fontSize: "30px" }} />
                            {/* <BsDownload style={{ fontSize: "30px", paddingRight: "5px" }} /> */}
                            {/* Telecharger la fiche */}
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default FormationPresentation
