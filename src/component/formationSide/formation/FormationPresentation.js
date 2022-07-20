import React from "react";


class FormationPresentation extends React.Component {
    //props: title
    //props: content
    //props: type
    render() {
        console.log("this.props.content =", this.props.content);
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
