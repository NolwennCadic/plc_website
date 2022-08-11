import React from "react";
import { BsFillBookFill } from "react-icons/bs";

class Mission extends React.Component {
    render() {
        return (
            <div style={{ minHeight: "100vh", paddingTop: "100px" }} id={"Mission"}>
                <div className="titleSubPart">
                    <BsFillBookFill style={{ fontSize: "30px", paddingRight: "5px" }} />
                    Mission
                </div>
                <div style={{ margin: "2%" }}>
                    <div className={"titleMission1"}>Vous souhaitez préparer votre avenir, acquérir de nouvelles compétences, changer de voie professionnelle ? </div>
                    <div className={"titleMission"}>La formation professionnelle est faite pour VOUS ! </div>
                    <div style={{ textAlign: "left", padding: "2%" }}>
                        <div>
                            Cette dernière peut vous permettre :
                            <ul>
                                <li>De gérer votre <span className={"bold"}>carrière professionnelle</span>,</li>
                                <li>D'évoluer vers de nouvelles fonctions ou <span className={"bold"}>responsabilités hiérarchiques</span></li>
                                <li>De <span className={"bold"}>revaloriser</span> votre salaire.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"titleMission"}>Ses atouts :</div>
                    <div style={{ textAlign: "left", padding: "2%" }}>
                        <div style={{ paddingTop: "10px" }}>
                            Elle vous aide :
                            <ul>
                                <li>A développer et approfondir vos compétences techniques <span className={"bold"}>(hard skills)</span>,</li>
                                <li>A développer et approfondir vos compétences comportementales <span className={"bold"}>(soft skills)</span>,</li>
                                <li>A améliorer votre <span className={"bold"}>développement professionnel</span> continu : la compétitivité, développement...</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"titleMission"}>Pourquoi le cabinet PLC ?</div>
                    <div style={{ textAlign: "left", padding: "2%" }}>
                        <div style={{ paddingTop: "10px" }}>
                            Le <span className={"bold"}>cabinet PLC</span>, et plus particulièrement Sabine Cadic, vous accompagne dans vos démarches. Son sens de l’écoute
                            et sa pédagogie lui permettent de définir les <span className={"bold"}>objectifs précis</span> de la formation et de construire
                            un contenu <span className={"bold"}>adapté à votre besoin</span>.
                        </div>
                    </div>
                    <span className={"bold"}>Ensemble</span> nous identifions vos besoins (contexte, public, objectifs…) et nous élaborons des programmes de formation adaptés.
                    <div style={{ textAlign: "left", padding: "2%" }}>
                        <ul>
                            <li>ETAPE 1: Prise de contact,</li>
                            <li>ETAPE 2: Rendez-vous à distance ou non pour définir vos attentes,</li>
                            <li>ETAPE 3: Elaboration et validation ensemble du programme personnalisé,</li>
                            <li>ETAPE 4: Conclusion (choix de la date, lieu…)</li>
                        </ul>
                        Une prise en compte individuelle du stagiaire, son niveau de compétence et les attendus de la formation sont analysés pour l’élaboration d’un programme sur mesure.
                    </div>
                    <div className={"titleMission"}>Envie de créer votre entreprise ? Besoin de conseil en création ? </div>
                    <div style={{ textAlign: "left", padding: "2%" }}>
                        <div>
                            Vous avez une <span className={"bold"}>idée</span>, un <span className={"bold"}>projet innovant</span>, mais encore des <span className={"bold"}>doutes</span> sur sa faisabilité ?
                            Nous sommes là pour <span className={"bold"}>vous accompagner</span> dans les différentes étapes nécessaires à la réalisation de votre projet:
                            <ul>
                                <li>Etudier sa faisabilité (vérification de l’étude de marché et du modèle économique…), prérequis indispensable à toute création de structure.</li>
                                <li>
                                    Faire le choix juridique, en respectant vos contraintes (conjoint, responsabilité, nombre
                                    de participants…) ainsi qu'en élaborant, ensemble, le montage financier (bilan,BFR..) pour travailler la présentation aux banques.
                                </li>
                                <li>
                                    Développer, ensemble, l’argumentaire pour lever des fonds (bancaires, partenaires…).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default Mission;
