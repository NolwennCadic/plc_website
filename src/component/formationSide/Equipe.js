import React from "react";
import { Image } from "react-bootstrap";
import sabineImage from "../../images/sabine.jpg";

class Equipe extends React.Component {
    render() {
        return (
            <div style={{ height: "100vh" }} id={"Equipe"}>
                <div
                    style={{
                        color: "#efefefff",
                        display: "flex",
                        border: "1px black solid",
                        borderRadius: "0.15em",
                        padding: "10px",
                        margin: "25px",
                        gap: "20px",
                    }}
                >
                    <div style={{ color: "black", padding: "10px"}}>
                        Diplômée d’expertise comptable depuis 1997 et associée du cabinet d’expertise PLC, Sabine a toujours eu la volonté de transmettre son savoir.
                        Après être intervenue en tant que vacataire auprès du CNAM et de l’IUT de 1996 à 2007, tout en exerçant une activité professionnelle à temps plein en tant que directrice d’établissement de santé jusque 2020, elle développe désormais l’activité de formation au sein de notre structure.
                        Son expérience professionnelle associée à ses compétences techniques liées au diplôme d’expertise comptables lui confère toute légitimité pour vous accompagner dans vos projets de création d’entreprises et de formation. Son aisance à l’oral et sa pédagogie sont de véritables outils de transmission de ses connaissances.
                    </div>
                    <Image src={sabineImage} style={{ width: "20%", border: "1px black solid" }} />
                </div>
            </div>
        )
    }

}

export default Equipe;
