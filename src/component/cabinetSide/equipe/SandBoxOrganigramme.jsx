// ...............................
// App.jsx
// ...............................
import React, { useEffect, useState } from "react";
import OrgChart from "./OrgChart";
import getData from "./getData";
import { BsPeopleFill } from "react-icons/bs";
import pouleImg from "../../../images/poule.jpg";
import "./OrgChart.css";
import chartImage from "../../../images/orgChart.png";
function SandBoxOrganigramme() {
  const [nodeDataArray, setData] = useState([]);
  const [bShow, showBackButton] = useState(false);
  const [arr, setBackNode] = useState([]);

  useEffect(() => {
    loadNodes(0); // load & show top nodes.
  }, []);

  function loadNodes(parentNode) {
    arr.push(parentNode);
    getData(parentNode) // <== ALL nodes in the database
      .then((nodes) => {
        setData(nodes); // replaces the nodeDataArray and re-trigger OrgChart's re-rendering.
      });
  }

  function handleBackButtonClick(e) {
    e.preventDefault();
    arr.pop();
    var parentKey = arr.pop();
    loadNodes(parentKey); // restore view to parent node
    if (arr.length < 2) showBackButton(false);
  }

  // This event is called by the child component OrgChart when the user
  // double-clicked on a node.  We will find sub-branches for that node
  // here and re-trigger the OrgChart display to show those sub-branches.
  const onNodeClickHandler = (nodeKey) => {
    // get sub-tree for this parent nodeKey
    showBackButton(true);
    loadNodes(nodeKey);
  };


  // La poule pour papa
  const [isControlPressed, setIsControlPressed] = useState(false);
  const [showPoule, setShowPoule] = useState(false);
  const [hasSmallWindow, setHasSmallWindow] = useState(window.innerWidth < 890);

  const handleMouseEnter = (e) => {
    setShowPoule(isControlPressed);
  }

  const handleMouseLeave = () => {
    setShowPoule(false);
  }

  const updatePredicate = () => {
    setHasSmallWindow(window.innerWidth < 890);
  }

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

    window.addEventListener("resize", updatePredicate);
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
              <span>Boss</span>
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
        {hasSmallWindow ?
          <img
            src={chartImage}
            style={{ width: "60vw", height: "auto", backgroundColor: "white", marginTop: "10px" }}
            alt={"organigramme de l'entreprise"}
          />
          :
          <div className="app-orgchart-container">
            <div style={{ backgroundColor: "white", width: "180px", height: "84px", position: "absolute", zIndex: 5 }}></div>
            {bShow && (
              <button className="app-backbutton" onClick={handleBackButtonClick}>
                {bShow && <span>BaxkIcon</span>}
                {/* {bShow && <BackIcon className="app-backbutton" />} */}
              </button>
            )}
            <p />
            <OrgChart
              nodeDataArray={nodeDataArray}
              OnNodeClickEvent={onNodeClickHandler}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default SandBoxOrganigramme;
