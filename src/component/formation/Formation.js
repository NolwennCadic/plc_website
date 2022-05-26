import React from "react";
import FormationsCatalog from "./FormationsCatalogue";

class Formation extends React.Component {
    render() {
        return (
            <>
                <div style={{ height: "100vh", paddingTop: "100px" }} id={"Formation"} >
                    <h1>Page pour proposer des formations</h1>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height:"90%" }}>
                        <FormationsCatalog /> {/* Should be containig multiple formations */}
                    </div>
                </div>
            </>
        )
    }

}

export default Formation;
