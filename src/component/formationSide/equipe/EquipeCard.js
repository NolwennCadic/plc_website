import React, { useState } from "react";
import member1 from "../../../images/sabine.jpg";
import member2 from "../../../images/yann.jpg";
import { BsAwardFill, BsFillBriefcaseFill, BsLinkedin, BsPatchPlusFill } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { ButtonEquipeCard } from "./ButtonEquipeCard";

const memberMap = {
    1: member1,
    2: member2,
}
export function EquipeCard(props) {
    const { member, leftArrow, rightArrow } = props
    const [partShown, setPartShown] = useState("diploma");
    const [indexSelected, setIndexSelected] = useState(0);

    const changePartShown = (part, index) => {
        setPartShown(part);
        setIndexSelected(index);
    }

    return (
        <div>
            <div className={"container-card-equipe"}>
                <div className="arrow-card-equipe">
                    {leftArrow}
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <div className="card-container-top">
                        <div className={"container-photo-equipe"}>
                            <div className={"ext-photo-equipe"}>
                                <img src={memberMap[member.id]} className={"photo-equipe"} alt={member.nom} />
                            </div>
                        </div>
                        {/* <div style={{ display: "flex", flexDirection: "column" }}> */}

                        <h3 style={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center" }}>
                            {member.nom}
                            {member.linkedIn ? <Nav.Link href={member.linkedIn} className="InfoContentEquipe"><BsLinkedin style={{ fontsize: "30px", color: "black" }} /></Nav.Link>
                                : <></>}
                        </h3>
                        {/* </div> */}
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", gap: "5px", marginBottom: "20px" }}>
                        <ButtonEquipeCard
                            indexSelected={indexSelected}
                            indexButton={0}
                            Icon={BsAwardFill}
                            setPartShown={() => changePartShown("diploma", 0)}
                        />
                        <ButtonEquipeCard
                            indexSelected={indexSelected}
                            indexButton={1}
                            Icon={BsFillBriefcaseFill}
                            setPartShown={() => changePartShown("experience", 1)}
                        />
                        <ButtonEquipeCard
                            indexSelected={indexSelected}
                            indexButton={2}
                            Icon={BsPatchPlusFill}
                            setPartShown={() => changePartShown("skills", 2)}
                        />
                    </div>
                    <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
                        {partShown === "diploma"
                            ? <div className="flexEquipe">
                                <ul>
                                    {member.diplomes.map((diplome) => {
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
                            : partShown === "experience"
                                ? <div className="flexEquipe">
                                    <ul>
                                        {member.experience.map((xp) => {
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
                                            {member.qualite.map((nom, index) => {
                                                if (index % 2 === 0)
                                                    return (
                                                        <li key={`li3${nom}`} className="InfoContentEquipe">
                                                            {nom}
                                                        </li>)
                                                else return null;
                                            })}
                                        </ul>
                                        <ul>
                                            {member.qualite.map((nom, index) => {
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
                <div className="arrow-card-equipe">
                    {rightArrow}
                </div>
            </div >
        </div >
    )

}

export default EquipeCard;
