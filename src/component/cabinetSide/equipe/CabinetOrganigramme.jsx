// ...............................
// App.jsx
// ...............................
import React, { useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import pouleImg from "../../../images/poule.jpg";
import "./OrgChart.css";
import chartImage from "../../../images/orgChart.svg";
function CabinetOrganigramme() {
  // La poule pour papa
  const [isControlPressed, setIsControlPressed] = useState(false);
  const [showPoule, setShowPoule] = useState(false);
  // const [hasSmallWindow, setHasSmallWindow] = useState(window.innerWidth < 890);

  const handleMouseEnter = (e) => {
    setShowPoule(isControlPressed);
  }

  const handleMouseLeave = () => {
    setShowPoule(false);
  }

  // const updatePredicate = () => {
  //   setHasSmallWindow(window.innerWidth < 890);
  // }

  // check size of window
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      var name = event.key;
      setIsControlPressed(name === "Control");
    }, false);

    // Add event listener on keyup
    document.addEventListener('keyup', (event) => {
      if (isControlPressed) {
        setIsControlPressed(false);
        setShowPoule(false);
      }
    }, false);

    // window.addEventListener("resize", updatePredicate);
  })



  return (
    //Need to add a title!
    <div>
      <div className={"diagram-div"}>
        <div>
          <div className="title-part">
            <BsPeopleFill style={{ fontSize: "30px", paddingRight: "5px" }} />
            Equipe
            {showPoule &&
              <img
                src={pouleImg}
                style={{ width: "70px", position: "relative", marginLeft: "10px" }}
                alt={"Easter egg poule"}
              />
            }
          </div>
          <div className={"diagram-legend-list"}>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid lightGray", position: "relative", left: "10px" }} />
              <span>Expert-comptable</span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", gap: "10px" }}
            >
              <div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid darkblue", position: "relative", left: "10px" }} />
              <span><span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Pole</span> Comptabilité</span></div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid lightCoral", position: "relative", left: "10px" }} />
              <span><span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Pole</span> Social</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid black", position: "relative", left: "10px" }} />
              <span>Mi-temps comptabilité et social</span>
            </div>
          </div>
        </div>
          <img
            src={chartImage}
            className={"diagram-component"}
            alt={"organigramme de l'entreprise"}
          />
      </div>
    </div>
  );
}

export default CabinetOrganigramme;
