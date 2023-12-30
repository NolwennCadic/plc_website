import React, { useState } from "react";
import "./formation.css";
import typeList from "../../../data/formation/formationTypes.json";



//Try that for the OnMouseOver
// <tr style="background-color:#FFFFFF" onmouseover="this.style.backgroundColor='#000000'" onmouseout="this.style.backgroundColor='#FFFFFF'">

//Input, wa have formation data
// We need to handle mobile
// use the color of type?
const generateColorMap = (types) => {
    let output = {};
    types.forEach((type, index) => {
        output[index] = ([`rgb(${type.couleur1RGB[0]}, ${type.couleur1RGB[1]}, ${type.couleur1RGB[2]})`, `rgb(${type.couleur1RGB[0]}, ${type.couleur1RGB[1]}, ${type.couleur1RGB[2]}, 0.05)`])
    })
    return output
}

function FormationCardSmall(props) {
    var { formation, formationKey, index, isBigAll, isOpen } = props;
    const colorMap = generateColorMap(typeList);
    const [isHovered, setIsHovered] = useState(false);
    // Use media and change style

    const hoveringAllOut = () => {
        setIsHovered(false);
    }
    const hoveringAllIn = () => {
        setIsHovered(b => !b);
    }
    const hoveringSmall = () => {
        setIsHovered(true)
    }

    // console.log(formation)
    // console.log(isOpen)
    return (
        <a
            style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "2px",
                overflow: "visible",
                width: (isBigAll || isHovered) ? "100%" : (isBigAll && isHovered) ? "110%" : "40px",
                height: (isBigAll && isHovered) ? "60px" : "50px",
                opacity: isOpen ? "0.8" : "1",
                textDecoration: "none",
                transition: "height 0.2s",
            }}
            key={formationKey}
            href={`/formation-personnalisee/${index}`}
            onMouseLeave={hoveringAllOut}
            onMouseEnter={hoveringAllIn}
        >
            <div
                style={{
                    borderStyle: "solid",
                    borderColor: `${colorMap[formation.type][0]}`,
                    background: `${colorMap[formation.type][0]}`,
                    width: "40px",
                    height: (isBigAll && isHovered) ? "60px" : "50px",
                    opacity: isOpen ? "0.8" : "1",
                    borderRadius: "10px 0 0 10px",                    
                }}
                title={formation.name}
                onMouseEnter={hoveringSmall} />
            {
                (isBigAll || isHovered) ? <div
                    style={{
                        borderStyle: "solid",
                        borderColor: `${colorMap[formation.type][0]}`,
                        background: "white",
                        borderSize: "1px",
                        width: (isBigAll && isHovered) ? "110%" : "100%",
                        height: (isBigAll && isHovered) ? "60px" : "50px",
                        color: "black",
                        opacity: isOpen ? "0.8" : "1",
                        textDecoration: "none",
                        transition: "width 0.1s",
                    }}
                >
                    {formation.name}
                </div> : <div style={{ width: "0px" }}></div>
            }
        </a>
    )
}

export default FormationCardSmall
