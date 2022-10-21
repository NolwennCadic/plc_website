import React from "react";
import FormationsCatalogue from "./FormationsCatalogue";
import { BsFillMapFill } from "react-icons/bs";

class Formation extends React.Component {
    render() {
        return (
            <>
                <div className={"subpart"} id={"Formations"} >
                    <div className="title-part">
                        <BsFillMapFill style={{ fontSize: "30px", paddingRight: "5px" }} />
                        Formations
                    </div>
                    {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height:"90%" }}> */}
                    <FormationsCatalogue /> {/* Should be containig multiple formations */}
                    {/* </div> */}
                </div>
            </>
        )
    }

}

export default Formation;
