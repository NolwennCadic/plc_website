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
                        borderTop: "1px black solid",
                        borderBottom: "1px black solid",
                        padding: "5px",
                        gap: "10px",
                        alignItems: "center",
                        flexDirection: "row"

                    }}
                >
                    {/**Left */}
                    <div style={{
                        color: "#efefefff",
                        display: "flex",
                        // padding: "10px",
                        // margin: "25px",
                        gap: "20px",
                        // alignItems: "center"
                        flexDirection: "column"
                    }}>
                        <h3>{this.props.member.name}</h3> {/* Name at the top */}
                        <div style={{ color: "black", padding: "10px" }}>
                            {this.props.member.description}
                        </div>
                    </div>
                    {/**Right */}
                    {/* <Image src={sabineImage} style={{ width: "20%", borderRadius: "5em" }} /> */}
                    <img src={memberMap[this.props.member.id]} style={{ width: "15vw", borderRadius: "5em" }} alt={this.props.member.name} />
                </div>
            // </div>
        )
    }

}

export default EquipeCard;
