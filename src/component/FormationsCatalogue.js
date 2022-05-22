import React from "react";
import FormationCard from "./FormationCard";
import formationsData from "../data/formationDetails2.json"
class FormationsCatalog extends React.Component {

    render() {
        return (
            <div style={{display:"flex", flexDirection: "row", justifyContent: "center", gap: "10px"}}>
                {formationsData.map((formation) => {
                    return <FormationCard formation={formation} />
                })
                }
            </div>
        );
    }

}

export default FormationsCatalog;
