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
            <>{
                this.props.content &&
                <>
                    <h1 style={{ color: this.props.type.couleur1 }}>{this.props.title}</h1>
                    {this.props.content.map((submenu) => {
                        console.log("submenu =", submenu);
                        return (
                            <div>
                                <h2 style={{ color: this.props.couleur2 }}>{submenu.title}</h2>
                                {submenu.content.constructor === Array ?
                                    <>
                                        {submenu.content.map((subsubmenu) => {
                                            console.log("subsubmenu =", subsubmenu);
                                            return (
                                                <div>
                                                    <div className="bold">{subsubmenu.title}</div>
                                                    <ul>
                                                        {subsubmenu.content && subsubmenu.content.map((list) => {
                                                            console.log("list =", list);
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
                                        })
                                        }
                                    </>
                                    : <span>{submenu.content}</span>

                                }
                                <div style={{ textAlign: "center", width: "100%" }}>
                                    <a href={pdfMap[this.props.index]} download style={{ font: "bold", color: "black", textDecoration: "none" }}><BsDownload style={{ fontSize: "30px", paddingRight: "5px" }} />Telecharger la fiche</a>
                                </div>
                            </div>
                        )
                    })

                    }
                </>
            }</>
        )
    }
}

export default FormationPresentation
