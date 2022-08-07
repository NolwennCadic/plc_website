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
                    <div className={"titleMission"}>Vous souhaitez préparer votre avenir, acquérir de nouvelles compétences, changer de voie professionnelle ? </div>
                    <div style={{ textAlign: "left", padding: "2%" }}>
                        <div>
                            La <span className={"bold"}>formation professionnelle</span> peut avoir beaucoup d'ojectifs différent. C'est un moyen de:
                            <ul>
                                <li>Gérer votre carrière professionnelle,</li>
                                <li>Evoluer vers de nouvelles fonctions ou responsabilités hiérarchiques</li>
                                <li>Revaloriser votre salaire.</li>
                            </ul>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                            La formation professionnelle présente de nombreux bénéfices et vous permet de développer et d'approfondir vos compétences techniques
                            (<span className={"bold"}>hard skills</span>) ainsi que vos compétences comportementales (<span className={"bold"}>soft skills</span>), tout en améliorant, par ces bienfaits, votre
                            <span className={"bold"}> développement professionnel</span> continu: la compétitivité, développement...
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                            Notre <span className={"bold"}>cabinet PLC</span>, et plus particulièrement Sabine Cadic, vous accompagne dans vos démarches. Son sens de l’écoute
                            et sa pédagogie lui permettent de définir les <span className={"bold"}>objectifs précis</span> de la formation et de construire
                            un contenu <span className={"bold"}>adapté à votre besoin</span>.
                        </div>
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
                                    de participants…) ainsi qu'en élaborerons, ensemble, le montage financier (bilan,BFR..) pour travailler la présentation aux banques.
                                </li>
                                <li>
                                    Développer, ensemble, l’argumentaire pour lever des fonds (bancaires, partenaires…).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Mission;
