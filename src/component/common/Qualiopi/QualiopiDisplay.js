import React from "react";
import certificationPdf from "../../../pdf/certification.pdf";
import certification from "../../../images/certification.jpg";
import { ReactComponent as Download } from "../../../images/icons/download.svg";

export default function QualiopiDisplay() {
    return (
        <div>
            <a href={certificationPdf} style={{ position: "fixed", top: "15vw", right: "4vw", cursor: "pointer", background: "#004C38", padding: "1px", borderRadius: "5px" }} download>
                <Download fill="white" style={{ width: "3vw", height: "100%" }} title="Télécharger au format pdf" />
            </a>
            <img src={certification} alt={"certification"} style={{ width: "60vw", height: "100%" }} />
        </div>
    )
}