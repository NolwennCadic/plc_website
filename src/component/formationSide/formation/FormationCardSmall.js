import React from "react";
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
    var { formation, formationKey, index } = props
    const colorMap = generateColorMap(typeList)
    // Use media and change style
    return (
        <a style={{
            borderStyle: "solid",
            borderColor: `${colorMap[formation.type][0]}`,
            borderSize: "1px",
            width: "100%",
            height: "50px",
            marginBottom: "2px",
            color: "black",
            textDecoration: "none"
        }}
            key={formationKey}
            href={`/formation-personnalisee/${index}`}
        >
            {formation.name}
        </a>
        //Tooltip + onClick
    )
}

export default FormationCardSmall
