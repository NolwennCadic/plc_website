import React from "react";
import FormationCard from "./FormationCard";
import formationsData from "../../data/formationDetails2.json"
class FormationsCatalog extends React.Component {

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "15px"}}>
                {formationsData.map((formation, index) => {
                    return <FormationCard formation={formation} key={`formation${index}`} />
                })
                }
            </div>
        );
    }

}

export default FormationsCatalog;
