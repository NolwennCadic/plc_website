import React from "react";
import team from "../../data/formationEquipe.json";

class Equipe extends React.Component {
    render() {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
            }}
                id={"Equipe"}
            >{/**Page */}
                {/**One name */}
                <div
                    style={{
                        color: "#efefefff",
                        display: "flex",
                        borderTop: "1px black solid",
                        borderBottom: "1px black solid",
                        padding: "10px",
                        margin: "25px",
                        gap: "20px",
                        alignItems: "center",
                        flexDirection: "row"

                    }}
                >
                    {/**Left */}
                    <div style={{
                        color: "#efefefff",
                        display: "flex",
                        padding: "10px",
                        margin: "25px",
                        gap: "20px",
                        // alignItems: "center"
                        flexDirection: "column"
                    }}>
                        <h3>{team[0].name}</h3> {/* Name at the top */}
                        <div style={{ color: "black", padding: "10px" }}>
                            {team[0].description}
                        </div>
                    </div>
                    {/**Right */}
                    {/* <Image src={sabineImage} style={{ width: "20%", borderRadius: "5em" }} /> */}
                    <img src={require(`../../images/sabine.jpg`)} style={{ width: "15vw", borderRadius: "5em" }} alt={team[0].name}/>
                </div>
            </div>
        )
    }

}

export default Equipe;
