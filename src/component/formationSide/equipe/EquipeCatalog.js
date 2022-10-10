import React from "react";
// import team from "../../../data/formation/formationEquipe.json";
import team from "../../../data/formation/formationEquipe.json";
// import EquipeCard from "./EquipeCard";
import EquipeCard from "./EquipeCard";

class EquipeCatalog extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        height: "calc(100vh - 200px)",
                        justifyContent: "center",
                    }}
                    id={"Equipe"}
                >
                    {team.map((member, index) => {
                        return (<EquipeCard member={member} key={`member${index}`} />)
                    })}
                </div>
            </div>
        )
    }
}

export default EquipeCatalog;
