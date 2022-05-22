import React from "react";
import team from "../../data/formationEquipe.json";
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
                        gap: "10px"
                    }}
                    id={"Equipe"}
                >
                    {team.map((member) => {
                        return (<EquipeCard member={member} />)
                    })}
                </div>
            </div>
        )
    }
}

export default EquipeCatalog;
