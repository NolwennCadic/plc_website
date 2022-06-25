import React from "react";
import member1 from "../../../images/sabine.jpg";
import { BsAwardFill, BsFillBriefcaseFill, BsLinkedin, BsPatchPlusFill } from "react-icons/bs";
import { Nav } from "react-bootstrap";
const memberMap = {
    1: member1,
}
class EquipeCardBis extends React.Component {
    render() {
        console.log()

        return (
            <div>
                <div style={{ display: "flex", flexDirection: "row", textAlign: "left", width: "94vw", justifyContent: "center" }}>
                    <div style={{ width: "30vw" }}>
                        <img src={memberMap[this.props.member.id]} style={{ width: "20vw", borderRadius: "100%" }} alt={this.props.member.nom} />
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <BsLinkedin style={{ fontsize: "35px", marginTop: "12px" }} />
                            <Nav.Link href={this.props.member.linkedIn} className="InfoContentEquipe">{this.props.member.nom}</Nav.Link>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ textAlign: "center" }}>{this.props.member.nom}</h3>
                        <div className="flexEquipe">
                            <BsAwardFill style={{ fontsize: "35px", marginTop: "5px" }} />
                            <ul>
                                {this.props.member.diplomes.map((diplome) => {
                                    return (
                                        <li key={`li1${diplome.nom}`} className="InfoContentEquipe">
                                            <span className="bold" key={`span1${diplome.nom}`}>
                                                {diplome.date}
                                            </span>
                                            , {diplome.nom}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flexEquipe">
                            <BsFillBriefcaseFill style={{ fontsize: "35px", marginTop: "5px" }} />
                            <ul>
                                {this.props.member.experience.map((xp) => {
                                    return (
                                        <li key={`li2${xp.nom}`} className="InfoContentEquipe">
                                            <span className="bold" key={`span2${xp.nom}`}>
                                                {xp.date}
                                            </span>
                                            , {xp.nom}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flexEquipe">
                            <BsPatchPlusFill style={{ fontsize: "35px", marginTop: "5px" }} />

                            <div className="flexEquipe">
                                <ul>
                                    {this.props.member.qualite.map((nom, index) => {
                                        if (index % 2 === 0)
                                            return (
                                                <li key={`li3${nom}`} className="InfoContentEquipe">
                                                    {nom}
                                                </li>)
                                        else return null;
                                    })}
                                </ul>
                                <ul>
                                    {this.props.member.qualite.map((nom, index) => {
                                        if (index % 2 === 1)
                                            return (
                                                <li key={`li4${nom}`} className="InfoContentEquipe">
                                                    {nom}
                                                </li>
                                            )
                                        else return null
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default EquipeCardBis;
