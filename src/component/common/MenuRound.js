import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class MenuRound extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <a href={`#${this.props.title}`} className={"clickableItem"}>
                        {/* <Link to={`#${this.props.title}`}> */}
                        <img src={this.props.image} style={{ width: "17vw", borderRadius: "100%", backgroundColor: "white" }} alt={this.props.title} />
                        {/* </Link> */}
                    </a>
                    <div style={{ color: "white" }}>{this.props.title}</div>
                </div>
            </React.Fragment>
        )

    }

}

export default MenuRound
