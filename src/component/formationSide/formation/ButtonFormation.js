import React, { useState } from "react";


/**
 * @nom ButtonFormation
 * @description Button cliquable pour filtrer les formations
 * @param {type} type type associé au bouton + key
 * @param {string} color couleur rgb du bouton
 * @param {Function} setTypeFiltered change le type sur lequel on va filtrer
 */

function regularButton(color) {
    return ({
        borderColor: color,
        color: color,
        backgroundColor: "white",
        transition: ".2s ease-in-out",
        boxShadow: "-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)",
    })
}

function hoveredButton(color) {
    return ({
        borderColor: "white",
        color: "white",
        backgroundColor: color,
        transition: ".2s ease-in-out",
        boxShadow: "-2px -2px 6px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)",
    })
}

function ButtonFormation(props) {
    const { setTypeFiltered, color, type } = props;

    const [buttonStyle, setButtonStyle] = useState(regularButton(color));

    const handleMouseEnter = () => {
        setButtonStyle(hoveredButton(color));
    }
    const handleMouseLeave = () => {
        setButtonStyle(regularButton(color));
    }
    return (
        <button
            onClick={() => setTypeFiltered(type.key)}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {type.type}
        </button>
        // <Button style={{ borderColor: this.props.color, color: this.props.color, backgroundColor: "white" }} onClick={() => this.props.setTypeFiltered(this.props.type.key)}>{this.props.type.type}</Button>
    )
}

export default ButtonFormation
