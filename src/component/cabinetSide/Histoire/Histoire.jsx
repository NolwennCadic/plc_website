import React from "react";
import "./histoire.css"
import HistoireSubMenu from "./HistoireSubMenu";


function Histoire() {
    return (
        <div className="body">
            <div style={{ minHeight: "100vh", paddingTop: "100px", display: "flex", justifyContent: "center" }} id={"Histoire"}>
                <HistoireSubMenu />
            </div>
        </div>
    )
}

// PLC

export default Histoire;
