import React from "react";
import { Button } from "react-bootstrap";


/**
 * @nom ButtonFormation
 * @description Button cliquable pour filtrer les formations
 * @param {string} type type associé au bouton
 * @param {string} color couleur rgb du bouton
 * @param {Function} setTypeFiltered change le type sur lequel on va filtrer
 */
class ButtonFormation extends React.Component {
    render() {
        return (
            <Button style={{ borderColor: this.props.color, color: this.props.color, backgroundColor: "white" }} onClick={() => this.props.setTypeFiltered(this.props.type)}>{this.props.type}</Button>
        )
    }
}

export default ButtonFormation
