import React from "react";
// import FormationCard from "./FormationCard";
import formationList from "../../../data/formationDetails2.json";
import FormationCardBis from "./FormationCardBis";

class FormationsCatalogue extends React.Component {

    render() {

        return (
            <div>
                {formationList.map((formation, index) => {
                    return (
                        <FormationCardBis formation={formation} key={`formation${index}`} />
                    )
                })
                }
            </div>
        )
    }

}

export default FormationsCatalogue;
