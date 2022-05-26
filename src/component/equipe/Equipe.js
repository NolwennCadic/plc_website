import React from "react";
import EquipeCatalog from "./EquipeCatalog";

class Formation extends React.Component {
    render() {
        return (
            <>
                <div style={{ minHeight: "100vh", paddingTop: "100px" }} id={"Equipe"}>
                    <h1>Equipe</h1>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height:"90%" }}>
                        <EquipeCatalog />
                    </div>
                </div>
            </>
        )
    }

}

export default Formation;
