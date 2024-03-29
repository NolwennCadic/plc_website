import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import formationList from "../../../data/formation/formationDetails.json";
import ButtonFormation from "./ButtonFormation";
import FormationCardBig from "./FormationCardBig";
import typeList from "../../../data/formation/formationTypes.json";
import DialogContactForm from "../../common/Contact/DialogContactForm";

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
function FormationsCatalogue() {
    const [itemsToShow, setItemsToShow] = useState(formationList);
    const [formationClicked, setFormationClicked] = useState(undefined);
    const [showDialog, setShowDialog] = useState(false);


    const toggleShowDialog = () => {
        setShowDialog(b => !b);
    }


    const changeTypeFilteredOn = (newType) => {
        setItemsToShow(formationList.filter(formation => {
            return (newType === 5 || formation.type === newType || formation.type === 3);
        }));
    };

    const clickFormation = (formation) => {
        setFormationClicked(formation);
    }


    const types = generateTypes(formationList, typeList).concat({ key: 5, type: "Tous", couleur1: "#e8eba9", couleur2: "##9e0e21" });

    const navigate = useNavigate()

    return (
        <div className="body">
            <header className="buttons-sticky">
                {types.map((type, index) => {
                    return (
                        <ButtonFormation type={type} color={type.couleur1} setTypeFiltered={changeTypeFilteredOn} key={`${index}Button`} />
                    )
                })}

                <div onClick={toggleShowDialog} style={{ cursor: "pointer", margin: "1px 0px 0px 10px" }}>Nous contacter</div>
            </header>
            {
                itemsToShow.map((formation, index) => {
                    return (
                        <FormationCardBig formation={formation} key={`formation${index}`} setFormationClicked={() => navigate(`/formation-personnalisee/${index}`)} />
                    )
                })
            }
            {showDialog &&
                <DialogContactForm
                    setShowDialog={toggleShowDialog}
                    showDialog={showDialog}
                />
            }
        </div>
    )

}


export default FormationsCatalogue;
