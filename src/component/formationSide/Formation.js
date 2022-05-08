import React from "react";
import FormationsCatalog from "../FormationsCatalogue";

class Formation extends React.Component {
    render() {
        return (
            <>
                <div style={{ height: "100vh" }} id={"Formation"}>
                    <h1>Page pour proposer des formations</h1>
                    <FormationsCatalog /> {/* Should be containig multiple formations */}
                </div>
            </>
        )
    }

}

export default Formation;
