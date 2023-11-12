import React, { useState } from "react";
import "./formation.css"
//For now, works for type
//input: list.value + list.function + key?
// and if receive color than improved?
function DropdownTypes(props) {
    const [isOpen, setIsOpen] = useState(false);
    let { types, onClickFunction, selectedType } = props;
    const togglemenu = () => {
        setIsOpen(b => !b);
    };
    return (
        <div className="dropdown">
            <button onClick={togglemenu}>{selectedType}</button>
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