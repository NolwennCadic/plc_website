import React from "react";
import EquipeCatalog from "./EquipeCatalog";
import {BsPeopleFill} from "react-icons/bs";

class Equipe extends React.Component {
    render() {
        return (
            <>
                <div style={{ minHeight: "100vh", paddingTop: "100px" }} id={"Equipe"}>
                    <div className="titleSubPart">
                        <BsPeopleFill style={{fontSize: "30px", paddingRight: "5px"}}/>
                        Equipe
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height:"90%" }}>
                        <EquipeCatalog />
                    </div>
                </div>
            </>
        )
    }

}

export default Equipe;
