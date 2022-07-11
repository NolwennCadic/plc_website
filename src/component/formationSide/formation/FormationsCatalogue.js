import React from "react";
// import FormationCard from "./FormationCard";
import formationList from "../../../data/formationDetails.json";
import ButtonFormation from "./ButtonFormation";
import FormationCardBis from "./FormationCardBis";
import typeList from "../../../data/formationTypes.json";

const hasKey = (items, key) => {
    let elements = items.filter(item => item.key === key);
    return (elements.length > 0);
}

const accessType = (key, typeList) => {
    let items = typeList.filter(type => {
        return (type.key === key)
    });
    return items[0];
}
const generateTypes = (listForm, typeList) => {
    let output = [];
    listForm.forEach((formation) => {
        if (!hasKey(output, formation.type)) {
            output.push(accessType(formation.type, typeList));
        }
    })
    return output
}
class FormationsCatalogue extends React.Component {
    constructor() {
        super();
        this.state = {
            typeFiltered: "tout",
            itemsToShow: formationList,
        };
        this.setTypeFiltered = this.setTypeFiltered.bind(this);

    }
    setTypeFiltered(newType) {
        this.setState({
            typeFiltered: newType,
            itemsToShow: formationList.filter(item => newType === "tout" || item.type === newType || item.type === "tout"),
        });
    }


    render() {
        const types = generateTypes(formationList, typeList);
        console.log("formationList =", formationList);
        console.log("typeList =", typeList);
        console.log("types =", types);
        console.log("this.state.itemsToShow =", this.state.itemsToShow);

        console.log()
        return (
            <div>
                {types.map((type, index) => {
                    return (
                        <ButtonFormation type={type.type} color={type.color} setTypeFiltered={this.setTypeFiltered} key={`${index}Button`} />
                    )
                })
                }
                {
                    this.state.itemsToShow.map((formation, index) => {
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
