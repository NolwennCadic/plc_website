import React from "react";
import FormationsCatalogue from "./FormationsCatalogue";

class Formation extends React.Component {
    render() {
        return (
            <>
                <div style={{ minHeight: "100vh", paddingTop: "100px" }} id={"Formations"} >
                    <h1>Page pour proposer des formations</h1>
                    {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height:"90%" }}> */}
                        <FormationsCatalogue /> {/* Should be containig multiple formations */}
                    {/* </div> */}
                </div>
            </>
        )
    }

}

export default Formation;
