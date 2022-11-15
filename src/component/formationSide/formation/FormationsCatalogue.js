import React, { useState } from "react";
import formationList from "../../../data/formation/formationDetails.json";
import ButtonFormation from "./ButtonFormation";
import FormationCardBis from "./FormationCardBis";
import typeList from "../../../data/formation/formationTypes.json";
import { Modal } from "react-bootstrap";
import FormationPresentation from "./FormationPresentation";
import DialogContactForm from "../../common/Contact/DialogContactForm";
import { BsFillPencilFill } from "react-icons/bs";

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


    return (
        <div className="body">
            <header className="is-sticky">
                {/* <header ref={refHeader} className="test-sticky"> */}
                {/* <header ref={refHeader} className="header-section d-none d-xl-block"> */}
                {types.map((type, index) => {
                    return (
                        <ButtonFormation type={type} color={type.couleur1} setTypeFiltered={changeTypeFilteredOn} key={`${index}Button`} />
                    )
                })}

                <div onClick={toggleShowDialog} style={{ cursor: "pointer" }}><BsFillPencilFill /></div>
            </header>
            {
                itemsToShow.map((formation, index) => {
                    return (
                        <FormationCardBis formation={formation} key={`formation${index}`} setFormationClicked={clickFormation} />
                    )
                })
            }
            {formationClicked !== undefined &&
                <Modal size="lg" show={formationClicked !== undefined} onHide={() => { clickFormation(undefined) }}>
                    <Modal.Header closeButton />
                    <FormationPresentation title={formationClicked.nom} content={formationClicked.content} type={typeList.filter(type => type.key === formationClicked.type)[0]} index={formationClicked.id} />
                </Modal>
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
