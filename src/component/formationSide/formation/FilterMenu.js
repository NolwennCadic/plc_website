import React, { useEffect, useState } from "react";
import "./formation.css"
import { ReactComponent as Filter } from "../../../images/icons/filter.svg";
import ButtonFormation from "./ButtonFormation";
import ButtonFormationClose from "./ButtonFormationClose";
import { ReactComponent as FilePen } from "../../../images/icons/file-pen.svg";

// For now, works for type
// input: list.value + list.function + key? + color --> mapping. How to show it is selected?
// and if receive color than improved?
function FilterMenu(props) {
    const [isOpen, setIsOpen] = useState(false);
    let { types, onClickFunction, selectedType, resetSelectedType, isBig, onFilterClick, toggleShowDialog } = props;
    const togglemenu = () => {
        setIsOpen(b => !b);
        onFilterClick();
        console.log("isOpen " + isOpen);
        if (isOpen) resetSelectedType()
    };

    console.log(selectedType);

    useEffect(() => {
        if (isOpen && !isBig) {
            setIsOpen(false)
        }
    }, [isBig, isOpen]);

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", padding: "5px", alignItems: "center", justifyContent: "space-around" }}>
                <Filter
                    onClick={togglemenu}
                    style={{ width: "20px", cursor: "pointer" }}
                    title={"Filtrer les exemples de formation"} />
                <FilePen
                    onClick={toggleShowDialog}
                    style={{ width: "20px", cursor: "pointer" }}
                    title={"Nous contacter"} />
            </div>
            {/* } */}
            {
                isOpen && isBig ?
                    <ul style={{ marginTop: "10px" }}>
                        {types.map((type, index) => {
                            return (
                                <ButtonFormation type={type} color={type.couleur1} setTypeFiltered={() => onClickFunction(type)} key={`${index}Button`} />
                            )
                        })}
                    </ul>
                    : null
            }
            {/* Ajouter une croix */}
            {
                selectedType.type === "Tous"
                    ? <></>
                    : <ButtonFormationClose type={selectedType} color={selectedType.couleur1} setTypeFiltered={() => onClickFunction(types.filter(t => t.type === "Tous")[0])} key={`selectedButton`} />
            }
        </div >
    )
}

export default FilterMenu;