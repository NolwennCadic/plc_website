import React from "react";
import member1 from "../../../images/sabine.jpg";

const memberMap = {
    1: member1,
}
class EquipeCard extends React.Component {
    render() {

        return (
            // <div
            //     id={"Equipe"}
            // >{/**Page */}
                // {/**One name */}
                <div
                    style={{
                        color: "#efefefff",
                        display: "flex",
                        borderTop: "1px #004C38 solid",
                        borderBottom: "1px #004C38 solid",
                        padding: "5px",
                        gap: "10px",
                        alignItems: "center",
                        flexDirection: "row",
                        marginRight: "40px",
                        marginLeft: "40px",
                    }}
                >
                    {/**Left */}
                    <div style={{
                        color: "#efefefff",
                        display: "flex",
                        gap: "20px",
                        flexDirection: "column"
                    }}>
                        <h3 style={{color: "#004C38"}}>{this.props.member.name}</h3> {/* Name at the top */}
                        <div style={{ color: "black", padding: "10px" }}>
                            {this.props.member.description}
                        </div>
                    </div>
                    {/**Right */}
                    {/* <Image src={sabineImage} style={{ width: "20%", borderRadius: "5em" }} /> */}
                    <img src={memberMap[this.props.member.id]} style={{ width: "15vw", borderRadius: "100%" }} alt={this.props.member.name} />
                </div>
            // </div>
        )
    }

}

export default EquipeCard;
