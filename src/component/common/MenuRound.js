import React from "react";

class MenuRound extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href={`#${this.props.title}`} className={"clickableItem"}>
                        {/* <Link to={`#${this.props.title}`}> */}
                        {/* <box-icon type='solid' name='book' border="circle"
                            style={{ fonSize: "80px" }} /> */}
                        <img src={this.props.image} style={{ width: "17vw", borderRadius: "100%", backgroundColor: "white" }} alt={this.props.title} />
                        {/* </Link> */}
                    </a>
                    <div style={{ color: "#004C38" }}>{this.props.title}</div>
                </div>
            </React.Fragment>
        )

    }

}

export default MenuRound
