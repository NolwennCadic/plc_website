var database = require("../../../data/testData.json");

async function getData(parentID) {
  var jsonObj = []; // init empty array
  var parentData = JSON.parse(JSON.stringify(database)); // make a copy of the database
  // This now generates the Top Nodes array when parentID = 0.
  // Simply, any node in the database with a key < 20 makes it to the Top node tree.
  if (parentID === 0) {
    parentData.forEach((office) => {
      if (office.key < 20) {
        var children = parentData.filter((a) => a.parent === office.key); // get an array of children
        office.teams = children.length;
        jsonObj.push(office);
      }
    });
    //console.log(`getData()=> Node:${parentID}, ${JSON.stringify(jsonObj)}`);
    return jsonObj;
  }

  // Any other parentID passed (<> 0), will go thru here.
  // This routine find sub-branches for the parent node double-clicked (parentID)
  // Simply, get rows where parent (i.e., parentKey) = parentID

  // Search for the parent node or head node
  var parentRow = parentData.find((_item) => _item.key === parentID);
  try {
    parentRow.parent = undefined;
    console.log(`getData()=> ${JSON.stringify(parentRow)}`);
    var childs = []; // Since we are creating a new tree,
    jsonObj.push(parentRow); // add the parent row (clicked node) to the response array.

    // Iterate an find sub-nodes to add
    for (var i = 0, length = parentData.length; i < length; i++) {
      if (parentData[i].parent === parentID) {
        var key = parentData[i].key;
        var name = parentData[i].abbr;
        childs = parentData.filter((a) => a.parent === key); // compute the number of teams
        parentData[i].teams = childs.length;
        /*     console.log(
          `getData()=> Node:${parentID}, Child: ${name}, Sub-Childrens=${childs.length}`
        );
    */
        jsonObj.push(parentData[i]);
        //console.log ( `getData()=> ${JSON.stringify(parentData[i])}`);
      }
    }
  } catch (err) {
    console.log("ERR:", err.message);
  }
  //console.log ( `getData()=> ${parentID}, records=${jsonObj.length}`);
  //console.log(`getData()=> Node:${parentID}, ${JSON.stringify(jsonObj)}`);
  return jsonObj;
}

export default getData;
