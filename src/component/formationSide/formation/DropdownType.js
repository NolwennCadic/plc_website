import React, { useState } from "react";
import "./formation.css"
import { ReactComponent as Filter } from "../../../images/icons/filter.svg";

//For now, works for type
//input: list.value + list.function + key?
// and if receive color than improved?
function DropdownTypes(props) {
    const [isOpen, setIsOpen] = useState(false);
    let { types, onClickFunction, selectedType, isBig } = props;
    const togglemenu = () => {
        setIsOpen(b => !b);
    };
    return (
        <div className="dropdown">
            {isBig ?
                <button onClick={togglemenu}>{selectedType}</button>
                : <Filter onClick={togglemenu} style={{ transform: "scale(0.5)", cursor: "pointer" }} />
            }
            {isOpen ?
                <ul className="menu">
                    {types.map((type) => {
                        return (
                            <li className="menu-item">
                                <button onClick={() => onClickFunction(type)} key={"Dropdown" + type.key}>{type.type}</button>
                            </li>
                        )
                    })}
                </ul>
                : null}
        </div>
    )
}

export default DropdownTypes;