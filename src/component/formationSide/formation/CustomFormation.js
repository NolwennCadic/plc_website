import React, { useState } from "react";
import { useParams } from "react-router-dom";
import formationList from "../../../data/formation/formationDetails.json";
import typeList from "../../../data/formation/formationTypes.json";
import FormationCardSmall from "./FormationCardSmall";
import FormationPresentationCustom from "./FormationPresentationCustom";
import DropdownTypes from "./DropdownType";
import { ReactComponent as ChevronDoubleLeft } from "../../../images/icons/chevron-double-left.svg";
import { ReactComponent as ChevronDoubleRight } from "../../../images/icons/chevron-double-right.svg";
// I could have the previous page? No not worth taking back? Or might be?
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
function CustomFormation(props) {
    let { id } = useParams();
    const [itemsToShow, setItemsToShow] = useState(formationList);
    const [showDialog, setShowDialog] = useState(false); //Still need the contact form?
    const [isMenuBlocked, setIsMenuBlocked] = useState(false)
    const [areButtonsHovered, setAreButtonsHovered] = useState(false);
    const [selectedType, setSelectedType] = useState("Tous")

    const toggleShowDialog = () => {
        setShowDialog(b => !b);
    }

    const onChevronClick = () => {
        setIsMenuBlocked(b => !b);
    }
    const onMenuHover = () => {
        if (!isMenuBlocked) setAreButtonsHovered(b => !b);
    }
    console.log(areButtonsHovered);

    const changeTypeFilteredOn = (newType) => {
        let number = newType.key
        setSelectedType(newType.type);
        setItemsToShow(formationList.filter(formation => {
            return (number === 5 || formation.type === number || formation.type === 3);
        }));
    };

    const types = generateTypes(formationList, typeList).concat({ key: 5, type: "Tous", couleur1: "#e8eba9", couleur2: "##9e0e21" }).filter(type => type.type !== selectedType);
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
                    width: areButtonsHovered ? "100px" : "50px"

                }}
                    onMouseEnter={onMenuHover}
                    onMouseLeave={onMenuHover}
                >
                    <DropdownTypes types={types} onClickFunction={changeTypeFilteredOn} selectedType={selectedType} />

                    <div onClick={toggleShowDialog} style={{ cursor: "pointer", margin: "1px 0px 0px 10px" }}>Nous contacter</div>
                    {
                        itemsToShow.map((formation, index) => {
                            return (
                                <FormationCardSmall formation={formation} formationKey={`formation${index}`} index={index} />
                            )
                        })
                    }
                    <div style={{ width: "20px", height: "20px" }}>
                        <ChevronDoubleRight
                            onClick={onChevronClick}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    </div>
                </div>
                <div className={"formation-pres-card"}>
                    <FormationPresentationCustom formation={formationList[id]} type={typeList.filter(type => type.key === formationList[id].type)[0]} />
                </div>
            </div>
        </div >
    )

}



export default CustomFormation;
