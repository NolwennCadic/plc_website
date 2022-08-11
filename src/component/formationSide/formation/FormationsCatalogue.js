import React from "react";
// import FormationCard from "./FormationCard";
import formationList from "../../../data/formationDetails.json";
import ButtonFormation from "./ButtonFormation";
import FormationCardBis from "./FormationCardBis";
import typeList from "../../../data/formationTypes.json";
import { Modal } from "react-bootstrap";
import FormationPresentation from "./FormationPresentation";

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
            formationClicked: undefined,
        };
        this.setTypeFiltered = this.setTypeFiltered.bind(this);
        this.setFormationClicked = this.setFormationClicked.bind(this);


    }
    setTypeFiltered(newType) {
        console.log("newType =", newType);
        this.setState({
            typeFiltered: newType,
            itemsToShow: formationList.filter(formation => {
                return (newType === 5 || formation.type === newType || formation.type === 3);
            }),
        });
    }
    setFormationClicked(formation) {
        this.setState({
            formationClicked: formation,
        });
    }


    render() {
        const types = generateTypes(formationList, typeList).concat({ key: 5, type: "Tous", couleur1: "#e8eba9", couleur2: "##9e0e21" });

        return (
            <div>
                {types.map((type, index) => {
                    return (
                        <ButtonFormation type={type} color={type.couleur1} setTypeFiltered={this.setTypeFiltered} key={`${index}Button`} />
                    )
                })
                }
                {
                    this.state.itemsToShow.map((formation, index) => {
                        return (
                            <FormationCardBis formation={formation} key={`formation${index}`} setFormationClicked={this.setFormationClicked} />
                        )
                    })
                }
                {this.state.formationClicked !== undefined &&
                    <Modal size="lg" show={this.state.formationClicked !== undefined} onHide={() => { this.setFormationClicked(undefined) }}>
                        <FormationPresentation title={this.state.formationClicked.nom} content={this.state.formationClicked.content} type={typeList.filter(type => type.key === this.state.formationClicked.type)[0]} index={this.state.formationClicked.id} />
                    </Modal>
                }
            </div>
        )

    }

}

export default FormationsCatalogue;
