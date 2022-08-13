import React from "react";
import { BsFillCalendarWeekFill } from "react-icons/bs";

class Histoire extends React.Component {
    render() {
        return (
            <div style={{ minHeight: "100vh", paddingTop: "100px" }} id={"Histoire"}>
                <div className="title-part">
                    <BsFillCalendarWeekFill style={{ fontSize: "30px", paddingRight: "5px" }} />
                    Histoire
                </div>
                <div style={{ textAlign: "left" }}>
                    <div>
                        La société PLC a été créée en 2008 par Mr Yann CADIC. Cette société avait une activité de holding de moyen
                        en étant actionnaire d’un cabinet comptable.
                    </div>
                    <div>
                        En 2016, Mr CADIC a revendu ses actions du cabinet comptable et la société PLC est devenue un cabinet
                        d’Expertise Comptable et de Commissariat aux comptes.
                    </div>
                    <div>
                        La nouvelle activité a  débuté avec 2 collaborateurs. La croissance a été au rendez-vous, et la structure
                        PLC, tout comme son offre s’est étoffée . PLC, c’est aujourd’hui 2 associés et 4 collaborateurs pour 120
                        clients environ.
                    </div>
                    <div>
                        PLC est un cabinet d’expertise comptable généraliste se spécialisant dans les petites structures de
                        taille humaine. C’est ainsi que PLC intervient aussi bien auprès de l’agriculteur, que du médecin ou du
                        restaurateur…
                    </div>
                </div>
                <div style={{ textAlign: "left" }}>
                    Les domaines d’intervention sont divers et variés:
                    <ul>
                        <li>
                            <span className={"bold"}>Domaine comptable:</span> de l’externalisation totale à la révision de
                            la comptabilité tenue en interne
                        </li>
                        <li>
                            <span className={"bold"}>Domaine fiscal:</span> des déclarations fiscales de l’entreprise à celles
                            de son dirigeant et de sa famille, PLC est présent partout.
                        </li>
                        <li>
                            <span className={"bold"}>Domaine social:</span> face à la complexité du droit social, un pôle
                            social a été mis en place pour reprendre ou orienter le dirigeant
                        </li>
                        <li>
                            <span className={"bold"}>Domaine juridique:</span> le cabinet est là pour assister l’entreprise
                            dans son secrétariat juridique
                        </li>
                        <li>
                            <span className={"bold"}>Domaine création:</span> vous souhaitez créer votre propre entreprise ?
                            PLC est là pour vous orienter vers les possibilités répondant à vos attentes
                        </li>
                        <li>
                            <span className={"bold"}>Domaine patrimonial:</span> les choix patrimoniaux du chef d’entreprise
                            sont complexes. Nous sommes présents pour vous aider et vous orienter vers les meilleurs options
                        </li>
                        <li>
                            <span className={"bold"}>Domaine formation:</span> Développé par Mme Cadic, cette activité vous
                            permet ainsi que vos collaborateurs de maîtriser les subtilités des domaines financiers et
                            organisationnels de votre entreprise.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
// PLC

export default Histoire;
