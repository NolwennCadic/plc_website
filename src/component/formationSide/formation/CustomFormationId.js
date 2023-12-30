import React, { useState } from "react";
import { useParams } from "react-router-dom";
import formationList from "../../../data/formation/formationDetails.json";
import typeList from "../../../data/formation/formationTypes.json";
import FormationCardSmall from "./FormationCardSmall";
import FormationPresentationCustom from "./FormationPresentationCustom";
import FilterMenu from "./FilterMenu";
import { ReactComponent as ChevronDoubleLeft } from "../../../images/icons/chevron-double-left.svg";
import { ReactComponent as ChevronDoubleRight } from "../../../images/icons/chevron-double-right.svg";
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
function CustomFormationId(props) {
    let { id } = useParams();
    const [itemsToShow, setItemsToShow] = useState(formationList);
    const [showDialog, setShowDialog] = useState(false); //Still need the contact form?
    const [isPanelOpenAll, setIsPanelOpenAll] = useState(false);
    const [isPanelOpenOne, setIsPanelOpenOne] = useState(false);
    const [selectedType, setSelectedType] = useState("Tous")
    const [ComponentDisplayed, setComponentDisplayed] = useState(ChevronDoubleRight)

    const toggleShowDialog = () => {
        setShowDialog(b => !b);
    }

    const onChevronClick = () => {
        setIsPanelOpenAll(b => !b);
        setComponentDisplayed(type => isPanelOpenAll ? ChevronDoubleRight : ChevronDoubleLeft);
    }

    const changeTypeFilteredOn = (newType) => {
        let number = newType.key
        setSelectedType(newType.type);
        setItemsToShow(formationList.filter(formation => {
            return (number === 5 || formation.type === number || formation.type === 3);
        }));
    };

    const onFilterClick = () => {
        setIsPanelOpenAll(true)
        setComponentDisplayed(ChevronDoubleLeft)
    }

    const types = generateTypes(formationList, typeList).concat({ key: 5, type: "Tous", couleur1: "#e8eba9", couleur2: "##9e0e21" }).filter(type => type.type !== selectedType);
    const completeSelectedType = generateTypes(formationList, typeList).concat({ key: 5, type: "Tous", couleur1: "#e8eba9", couleur2: "##9e0e21" }).filter(type => type.type === selectedType)[0];
    // const types = generateTypes(formationList, typeList).concat({ key: 5, type: "Tous", couleur1: "#e8eba9", couleur2: "##9e0e21" }).filter(type => type.type !== selectedType);
    // calculate input:

    return (
        <div className="body">
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: isPanelOpenAll ? "300px" : "50px",
                    overflow: "visible",
                    boxShadow: "10px 0 5px -2px #888",
                    paddingRight: "5px"
                }}
                >
                    <div style={{ width: "100%" }}>
                        <FilterMenu types={types} onClickFunction={changeTypeFilteredOn} selectedType={completeSelectedType} isBig={isPanelOpenAll} onFilterClick={onFilterClick} toggleShowDialog={toggleShowDialog} />
                    </div>
                    <div style={{ width: "250px", zIndex: 10 }}>
                        {
                            itemsToShow.map((formation, index) => {
                                return (
                                    <FormationCardSmall formation={formation} formationKey={`formation${index}`} index={index} isBigAll={isPanelOpenAll} setIsBigOne={setIsPanelOpenOne} isOpen={index == id} />
                                )
                            })
                        }
                    </div>
                </div>
                <div
                    // style={{
                    //     width: "20px",
                    //     height: "50px",
                    //     padding: "1px",
                    //     cursor: "pointer",
                    //     border: "1px solid black",
                    //     borderRadius: "0 5px 5px 0",
                    //     backgroundColor: "white"

                    // }}
                    className="button-panel-formation"
                    onClick={onChevronClick}
                >
                    <ComponentDisplayed style={{ width: "10px" }} />
                </div>
                <div className={"formation-pres-card"}>
                    <FormationPresentationCustom formation={formationList[id]} type={typeList.filter(type => type.key === formationList[id].type)[0]} />
                </div>
            </div>
            {showDialog &&
                <DialogContactForm
                    setShowDialog={toggleShowDialog}
                    showDialog={showDialog}
                />
            }
        </div >
    )

}



export default CustomFormationId;
