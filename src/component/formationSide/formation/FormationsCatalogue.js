import React from "react";
// import FormationCard from "./FormationCard";
import formationList from "../../../data/formationDetails2.json";
import ButtonFormation from "./ButtonFormation";
import FormationCardBis from "./FormationCardBis";

const listButton = [
    {
        key: 1,
        type: "compta",
        color: "rgb(43, 79, 49)"
    }, {
        key: 2,
        type: "tout",
        color: "rgb(122, 12, 12)",//En terme d'UX, tout veut un peut dire 2 choses en même temps...
    },
]
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
        return (
            <div>
                {listButton.map((button) => {
                    return (
                        <ButtonFormation type={button.type} color={button.color} setTypeFiltered={this.setTypeFiltered} />
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
