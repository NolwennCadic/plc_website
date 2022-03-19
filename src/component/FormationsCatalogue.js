import React from "react";
import FormationCard from "./FormationCard";
import formationList from "../data/formationDetails.json";

class FormationsCatalog extends React.Component {

    render() {
        return (
            <FormationCard />
        );
    }
    
}

export default FormationsCatalog;