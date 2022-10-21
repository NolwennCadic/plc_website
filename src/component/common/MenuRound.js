import React from "react";

class MenuRound extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href={this.props.homepage ? `/${this.props.title.toLowerCase()}Menu` : `#${this.props.title}`} className={"clickableItem"}>
                        <div className={"icon-menu"}>
                            <this.props.image fill="#004C38" className={"icon-test"} />
                        </div>
                        <div style={this.props.homepage ? { color: "white", textShadow: "1px solid black" } : {}}>{this.props.title}</div>
                    </a>
                </div>
            </React.Fragment>
        )

    }

}

export default MenuRound
