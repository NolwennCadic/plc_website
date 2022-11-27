import React from "react";
import member1 from "../../../images/sabine.jpg";
import { BsAwardFill, BsFillBriefcaseFill, BsLinkedin, BsPatchPlusFill } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { ButtonEquipeCard } from "./ButtonEquipeCard";

const memberMap = {
    1: member1,
}
class EquipeCard extends React.Component {

    constructor() {
        super();
        this.state = {
            partShown: "diploma",
            indexSelected: 0,
        };
        this.setPartShown = this.setPartShown.bind(this);
    }

    setPartShown(part, index) {
        console.log(" setPartShown index =", index);
        this.setState({
            partShown: part,
        });
        this.setState({
            indexSelected: index,
        });
    }

    render() {
        return (
            <div>
                <div className={"container-card-equipe"}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row", height: "10vw" }}>
                            <div className={"container-photo-equipe"}>
                                <div className={"ext-photo-equipe"}>
                                    <img src={memberMap[this.props.member.id]} className={"photo-equipe"} alt={this.props.member.nom} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ textAlign: "center" }}>{this.props.member.nom}</h3>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <BsLinkedin style={{ fontsize: "35px", marginTop: "12px" }} />
                                    <Nav.Link href={this.props.member.linkedIn} className="InfoContentEquipe">{this.props.member.nom}</Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: "5px", marginBottom: "20px" }}>
                            <ButtonEquipeCard
                                indexSelected={this.state.indexSelected}
                                indexButton={0}
                                Icon={BsAwardFill}
                                setPartShown={() => this.setPartShown("diploma", 0)}
                            />
                            <ButtonEquipeCard
                                indexSelected={this.state.indexSelected}
                                indexButton={1}
                                Icon={BsFillBriefcaseFill}
                                setPartShown={() => this.setPartShown("experience", 1)}
                            />
                            <ButtonEquipeCard
                                indexSelected={this.state.indexSelected}
                                indexButton={2}
                                Icon={BsPatchPlusFill}
                                setPartShown={() => this.setPartShown("skills", 2)}
                            />
                            {/* <button className={"button-equipe"} onClick={() => this.setPartShown("diploma")}><BsAwardFill className={"button-equipe-content"}/></button >
                            <button className={"button-equipe"} onClick={() => this.setPartShown("experience")}><BsFillBriefcaseFill className={"button-equipe-content"}/></button >
                            <button className={"button-equipe"} onClick={() => this.setPartShown("skills")}><BsPatchPlusFill className={"button-equipe-content"}/></button > */}
                            {/* <button><BsAwardFill className={"button-equipe"} onClick={() => this.setPartShown("diploma")} /></button> */}
                            {/* <BsFillBriefcaseFill className={"button-equipe"} onClick={() => this.setPartShown("experience")} /> */}
                            {/* <BsPatchPlusFill className={"button-equipe"} onClick={() => this.setPartShown("skills")} /> */}
                        </div>
                        <div style={{height: "100px", display: "flex", alignItems: "center"}}>
                            {this.state.partShown === "diploma"
                                ? <div className="flexEquipe">
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
                                : this.state.partShown === "experience"
                                    ? <div className="flexEquipe">
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
                                    : <div className="flexEquipe">
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
                            }
                        </div>
                    </div >
                </div >
            </div >
        )
    }

}

export default EquipeCard;
