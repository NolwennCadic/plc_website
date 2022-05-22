import React from "react";
import EquipeCatalog from "./EquipeCatalog";

class Formation extends React.Component {
    render() {
        return (
            <>
                <div style={{ height: "100vh" }} id={"Formation"}>
                    <h1>Equipe</h1>
                    <EquipeCatalog />
                </div>
            </>
        )
    }

}

export default Formation;
