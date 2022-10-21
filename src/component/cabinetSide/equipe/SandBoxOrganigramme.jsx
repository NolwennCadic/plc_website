// ...............................
// App.jsx
// ...............................
import React, { useEffect, useState } from "react";
import OrgChart from "./OrgChart";
import getData from "./getData";
import { BsPeopleFill } from "react-icons/bs";
import "./OrgChart.css";

function SandBoxOrganigramme() {
  const [nodeDataArray, setData] = useState([]);
  console.log("nodeDataArray =", nodeDataArray);
  const [bShow, showBackButton] = useState(false);
  const [arr, setBackNode] = useState([]);

  useEffect(() => {
    loadNodes(0); // load & show top nodes.
  }, []);

  function loadNodes(parentNode) {
    arr.push(parentNode);
    console.log("loadNodes() -> arr:", arr);
    getData(parentNode) // <== ALL nodes in the database
      .then((nodes) => {
        setData(nodes); // replaces the nodeDataArray and re-trigger OrgChart's re-rendering.
      });
  }

  function handleBackButtonClick(e) {
    e.preventDefault();
    console.log("handleBackButtonClick()");
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
    console.log("onNodeClickHandler()");
    showBackButton(true);
    loadNodes(nodeKey);
  };

  return (
    //Need to add a title!
    <div style={{ position: "relative", width: "98%" }}>
      <div className="app-orgchart-container">
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
      <div className={"diagram-legend"}>
        <div className="title-part">
          <BsPeopleFill style={{ fontSize: "30px", paddingRight: "5px" }} />
          Equipe
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}><div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid lightGray", position: "relative", left: "10px" }} /><span>Boss</span></div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}><div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid darkblue", position: "relative", left: "10px" }} /><span>Pole Comptabilité</span></div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}><div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid lightCoral", position: "relative", left: "10px" }} /><span>Pole Social</span></div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}><div style={{ width: "20px", height: "20px", backgroundColor: "#333333", border: "3px solid black", position: "relative", left: "10px" }} /><span>Mi-temps comptabilité et social</span></div>
      </div>
    </div>
  );
}

export default SandBoxOrganigramme;
