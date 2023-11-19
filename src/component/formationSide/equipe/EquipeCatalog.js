import React, { useState } from "react";
// import team from "../../../data/formation/formationEquipe.json";
import team from "../../../data/formation/formationEquipe.json";
// import EquipeCard from "./EquipeCard";
import EquipeCard from "./EquipeCard";
import { ReactComponent as ChevronLeft } from "../../../images/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../../images/icons/chevron-right.svg";


export function EquipeCatalog() {
    const [indexMemberShown, setIndexMemberShown] = useState(0)
    const goLeft = () => { setIndexMemberShown(indexMember => indexMember - 1) }
    const goRight = () => { setIndexMemberShown(indexMember => indexMember + 1) }

    console.log(indexMemberShown)
    console.log(team.length)
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    height: "calc(100vh - 200px)",
                    justifyContent: "center",
                }}
                id={"Equipe"}
            >
                
                <EquipeCard 
                member={team[indexMemberShown]} 
                key={`member${indexMemberShown}`} 
                leftArrow={indexMemberShown > 0 ?
                    <div>
                        <ChevronLeft
                            onClick={goLeft}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    </div>
                    : <></>
                }
                rightArrow={indexMemberShown < team.length - 1 ?
                    <div>
                        <ChevronRight
                            onClick={goRight}
                            style={{ transform: "scale(2)", cursor: "pointer" }}
                        />
                    </div>
                    : <></>
                }/>
                
            </div>
        </div>
    )
}

export default EquipeCatalog;
