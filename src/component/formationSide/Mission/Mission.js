import React from "react";
import { BsFillBookFill } from "react-icons/bs";

class Mission extends React.Component {
    render() {
        return (
            <div style={{ minHeight: "100vh", paddingTop: "100px" }} id={"Equipe"}>
                <div className="titleSubPart">
                    <BsFillBookFill style={{ fontSize: "30px", paddingRight: "5px" }} />
                    Mission
                </div>
                <div className={"titleMission"}>Vous souhaitez préparer votre avenir, acquérir de nouvelles compétences, changer de voie professionnelle ? </div>
                <div style={{textAlign: "left", padding: "10px"}}>
                    <div>
                        La <span className={"bold"}>formation</span> professionnelle est un moyen de gérer votre carrière professionnelle,
                        d'évoluer vers de nouvelles fonctions ou responsabilités hiérarchiques mais aussi de revaloriser votre salaire.
                    </div>
                    <div>
                        Elle présente de nombreux bénéfices et vous permet de développer et d'approfondir vos compétences techniques
                        (hard skills) ainsi que vos compétences comportementales (soft skills), tout en améliorant, par ces bienfaits, votre
                        développement <span className={"bold"}>professionnel</span> continu: la compétitivité, développement...
                    </div>
                    <div>
                        Notre cabinet PLC, et plus particulièrement Sabine Cadic, vous accompagne dans vos démarches. Son sens de l’écoute
                        et sa pédagogie lui permettent de définir les objectifs précis de la formation et de construire
                        un contenu adapté à votre besoin.
                    </div>
                </div>
                <div className={"titleMission"}>Envie de créer votre entreprise ? Besoin de conseil en création ? </div>
                <div>
                    <div>
                        Vous avez une idée, un projet innovant, mais encore des doutes sur sa faisabilité ?
                    </div>
                    <div>
                        Nous vous accompagnons dans la réalisation de votre projet, en étudiant sa faisabilité (vérification de l’étude
                        de marché et du modèle économique…): prérequis indispensable à toute création de structure.
                    </div>
                    <div>
                        Nous vous aiderons dans le choix juridique, en respectant vos contraintes (conjoint, responsabilité, nombre
                        de participants…) ainsi qu'en élaborerons, ensemble, le montage financier (bilan,BFR..) pour travailler la présentation aux banques.
                    </div>
                    <div>
                        Nous développerons, ensemble, l’argumentaire pour lever des fonds (bancaires, partenaires…).
                    </div>
                </div>
            </div>
        )
    }

}

export default Mission;
