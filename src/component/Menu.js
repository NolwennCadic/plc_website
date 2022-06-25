

import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MenuCard from "./MenuCard";
import formationImage from "../images/formation.png";
import equipeImage from "../images/equipe.png";
import missionImage from "../images/mission.png";
import Formation from "./formation/Formation";
import Equipe from "./equipe/Equipe";
import { ContactUs } from "./ContactUs";

const menuList = [
    "Equipe",
    "Formations",
    "Conseil",
]

const mapMap = {
    formations: [formationImage],
    equipe: [equipeImage],
    conseil: [missionImage],
}
class Menu extends React.Component {

    columnsPerRow = 4;

    render() {
        return (
            
            <>
                <Container 
                className="bg"
                style={{
                    gap: "5vw", 
                    marginTop: 50, 
                    marginBottom: 50
                }} fluid>
                    <Row xs={1} sm={1} md={this.columnsPerRow} className="justify-content-md-center">
                        {menuList.map((item, index) => {
                        console.log(item, index)
                        return (
                            <Col>
                                <MenuCard key={index + "Card"} title={item} image={mapMap[item.toLocaleLowerCase()][0]} />
                            </Col>

                        )
                    })}
                    </Row>
                       
                </Container>
                <Formation/>
                <Equipe/>
                <ContactUs />
            </>
        )
    }

}

export default Menu;
