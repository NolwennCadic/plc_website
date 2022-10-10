import React from "react";
import MissionSubMenu from "./MissionSubMenu";


function Mission() {
    return (
        <div className="body">
            <div style={{ minHeight: "100vh", paddingTop: "100px", display: "flex", justifyContent: "center" }} id={"Mission"}>
                <MissionSubMenu />
            </div>
        </div>
    )
}

// PLC

export default Mission;
