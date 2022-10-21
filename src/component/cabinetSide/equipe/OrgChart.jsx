// ...............................
// OrgChart.jsx
// ...............................
import React, { useEffect } from "react";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

// import "./OrgChart.css"; // contains .diagram-component CSS
import { SideTreeLayout } from "./SideTreeLayout";

const OrgChartProps = { nodeDataArray: [], OnNodeClickEvent: null };

const OrgChart = (OrgChartProps) => {
  useEffect(() => {
    console.log(
      `OrgChart() -> useEffect()  count of: ${OrgChartProps.nodeDataArray.length}`
    );
    return () => initDiagram;
  });
  console.log("OrgChartProps.nodeDataArray =", OrgChartProps.nodeDataArray)
  // call the parent page's event handler passed through the props and indicate which node was selected.
  function handleNodeChange(nodeKey) {
    OrgChartProps.OnNodeClickEvent(nodeKey);
  }

  /**
   * Diagram initialization method, which is passed to the ReactDiagram component.
   * This method is responsible for making the diagram and initializing the model and any templates.
   * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
   */
  function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";

    const diagram = $(go.Diagram, {
      autoScale: go.Diagram.Uniform,
      contentAlignment: go.Spot.Top,
      maxSelectionCount: 1, // users can select only one part at a time
      initialDocumentSpot: go.Spot.Top,
      initialViewportSpot: go.Spot.Center,
      validCycle: go.Diagram.CycleDestinationTree, // make sure users can only create trees
      "clickCreatingTool.archetypeNodeData": {
        // allow double-click in background to create a new node
        name: "(lead person)",
      },
      "clickCreatingTool.insertPart": function (loc) {
        // scroll to the new node
        var node = go.ClickCreatingTool.prototype.insertPart.call(this, loc);
        if (node !== null) {
          this.diagram.select(node);
          this.diagram.commandHandler.scrollToPart(node);
          this.diagram.commandHandler.editTextBlock(node.findObject("NAMETB"));
        }
        return node;
      },
      model: $(go.TreeModel),
      layout: $(SideTreeLayout, {
        treeStyle: go.TreeLayout.StyleLastParents,
        arrangement: go.TreeLayout.ArrangementHorizontal,
        // properties for most of the tree:
        angle: 90,
        layerSpacing: 35,
        // properties for the "last parents":
        alternateAngle: 90,
        alternateLayerSpacing: 35,
        alternateAlignment: go.TreeLayout.AlignmentBus,
        alternateNodeSpacing: 20,
      }),
      "undoManager.isEnabled": false // enable undo & redo
    });

    var graygrad = $(go.Brush, "Linear", { 0: "rgb(248,249,250)", 0.7: "rgb(126, 130, 130)", 1: "rgb(30,30,30)" });

    // when the document is modified, add a "*" to the office abbr and enable the "Save" button
    diagram.addDiagramListener("Modified", function (e) {
      var button = document.getElementById("SaveButton");
      if (button) button.disabled = !diagram.isModified;
      try {
        var idx = document.abbr.indexOf("*");
        if (diagram.isModified) {
          if (idx < 0) document.abbr += "*";
        } else {
          if (idx >= 0) document.abbr = document.abbr.substr(0, idx);
        }
      } catch { }
    });

    // manage parent info manually when a node or link is deleted from the diagram
    diagram.addDiagramListener("SelectionDeleting", function (e) {
      var part = e.subject.first(); // e.subject is the diagram.selection collection,
      // so we'll get the first since we know we only have one selection
      diagram.startTransaction("clear parent");
      var child, parentText;
      if (part instanceof go.Node) {
        var it = part.findTreeChildrenNodes(); // find all child nodes
        while (it.next()) {
          // now iterate through them and clear out the parent information
          child = it.value;
          parentText = child.findObject("parent"); // since the parent TextBlock is named, we can access it by name
          if (parentText === null) return;
          parentText.text = "";
        }
      } else if (part instanceof go.Link) {
        child = part.toNode;
        parentText = child.findObject("parent"); // since the parent TextBlock is named, we can access it by name
        if (parentText === null) return;
        parentText.text = "";
      }
      diagram.commitTransaction("clear parent");
    });

    //var levelColors = ["#AC193D", "#2672EC", "#8C0095", "#5133AB", "#008299", "#D24726", "#008A00", "#094AB2"];
    const teamsColors = [
      "lightgray",
      "darkblue",
      "lightcoral",
      "black",
    ];

    // override TreeLayout.commitNodes to also modify the background brush based on the tree depth level
    diagram.layout.commitNodes = function () {
      go.TreeLayout.prototype.commitNodes.call(diagram.layout); // do the standard behavior
      // then go through all of the vertexes and set their corresponding node's Shape.fill
      console.log("diagram.layout.network =", diagram.layout.network);
      // to a brush dependent on the TreeVertex.level value
      //   diagram.layout.network.vertexes.each(function (v) {
      //     if (v.node) {
      //       var level = v.level % teamsColors.length;
      //       var color = teamsColors[level];
      //       var shape = v.node.findObject("SHAPE");
      //       console.log("Shape =", shape);
      //       if (shape)
      //         shape.fill = $(go.Brush, "Linear", {
      //           0: color,
      //           1: go.Brush.lightenBy(color, 0.05),
      //           start: go.Spot.Left,
      //           end: go.Spot.Right
      //         });
      //     }
      //   });
    };
    // ------------------------------------------------------------
    // when a node is double-clicked, pass the vent and the node key to the parent component (App.js)
    // ------------------------------------------------------------
    function nodeDoubleClick(e, obj) {
      var clicked = obj.part;
      if (clicked !== null) {
        var thisoffice = clicked.data;
        // call the parent page's evenyt handler to indicate a node was selected. Pass the node Key value.
        handleNodeChange(thisoffice.key);
      }
    }

    // this is used to determine feedback during drags
    function mayWorkFor(node1, node2) {
      if (!(node1 instanceof go.Node)) return false; // must be a Node
      if (node1 === node2) return false; // cannot work for yourself
      if (node2.isInTreeOf(node1)) return false; // cannot work for someone who works for you
      return true;
    }

    // This function provides a common style for most of the TextBlocks.
    // Some of these values may be overridden in a particular TextBlock.
    function textStyle() {
      return { font: "9pt  Segoe UI,sans-serif", stroke: "white" };
    }

    function findColor(team) {
      return teamsColors[team]
    }

    // define the Node template
    diagram.nodeTemplate = $(
      go.Node,
      "Auto",
      {
        doubleClick: nodeDoubleClick,
        isShadowed: true,
        shadowOffset: new go.Point(3, 3),
        shadowColor: "#C5C1AA"
      },
      /*          {
            selectionChanged: node => handleNodeChange(node.key)
          },
*/
      {
        // handle dragging a Node onto a Node to (maybe) change the reporting relationship
        mouseDragEnter: function (e, node, prev) {
          var diagram = node.diagram;
          var selnode = diagram.selection.first();
          if (!mayWorkFor(selnode, node)) return;
          var shape = node.findObject("SHAPE");
          if (shape) {
            shape._prevFill = shape.fill; // remember the original brush
            shape.fill = "darkred";
          }
        },
        mouseDragLeave: function (e, node, next) {
          var shape = node.findObject("SHAPE");
          if (shape && shape._prevFill) {
            shape.fill = shape._prevFill; // restore the original brush
          }
        },
        mouseDrop: function (e, node) {
          var diagram = node.diagram;
          var selnode = diagram.selection.first(); // assume just one Node in selection
          if (mayWorkFor(selnode, node)) {
            // find any existing link into the selected node
            var link = selnode.findTreeParentLink();
            if (link !== null) {
              // reconnect any existing link
              link.fromNode = node;
            } else {
              // else create a new link
              diagram.toolManager.linkingTool.insertLink(
                node,
                node.port,
                selnode,
                selnode.port
              );
            }
          }
        }
      },
      // for sorting, have the Node.text be the data.name
      new go.Binding("text", "abbr"),
      {
        // define a tooltip for each node that displays the office name
        toolTip: $(
          "ToolTip",
          $(go.TextBlock, { margin: 4 }, new go.Binding("text", "role")) // tooltip shows full office name
        ) // end of Adornment
      },
      // bind the Part.layerName to control the Node's layer depending on whether it isSelected
      new go.Binding("layerName", "isSelected", function (sel) {
        return sel ? "Foreground" : "";
      }).ofObject(),
      // define the node's outer shape
      $(go.Shape, "RoundedRectangle", {
        //name: "SHAPE", fill: "white", stroke: null,
        name: "SHAPE",
        fill: graygrad,
        stroke: "white",
        strokeWidth: 3.5,
        // set the port properties:
        portId: "",
        fromLinkable: true,
        toLinkable: true,
        cursor: "pointer",
      },
        new go.Binding("stroke", "team", findColor)),//There we bind --> We want one color by team --> and a diff color for half
      $(
        go.Panel,
        "Horizontal",
        // define the panel where the text will appear
        $(
          go.Panel,
          "Table",
          {
            minSize: new go.Size(130, NaN),
            maxSize: new go.Size(210, NaN),
            margin: new go.Margin(10, 5, 5, 5),
            defaultAlignment: go.Spot.Center
          },
          $(go.RowColumnDefinition, { column: 2, width: 4, row: 3 }),
          // ****************************
          // *** the office name - Row 1
          // ****************************
          $(
            go.TextBlock,
            textStyle(),
            {
              name: "NAMETB",
              row: 0,
              column: 0,
              columnSpan: 5,
              font: "10pt Segoe UI,sans-serif",
              wrap: go.TextBlock.OverflowClip,
              editable: false,
              isMultiline: false,
              alignment: go.Spot.Center,
              minSize: new go.Size(14, 16),
              margin: new go.Margin(1, 0, 3, 1)
            },
            new go.Binding("text", "role").makeTwoWay()
          ),
          // ****************************
          // *** lead person name - Row 3
          // ****************************
          $(
            go.TextBlock,
            textStyle(),
            {
              row: 2,
              column: 1,
              columnSpan: 4,
              editable: false,
              isMultiline: false,
              wrap: go.TextBlock.OverflowClip,
              minSize: new go.Size(10, 14),
              margin: new go.Margin(3, 0, 0, 3)
            },
            new go.Binding("text", "name").makeTwoWay()
          ),
          // $(
          //   go.TextBlock,
          //   textStyle(),
          //   { row: 4, column: 6 },
          //   new go.Binding("text", "teams", function (v) {
          //     return "(" + v + ")";
          //   })
          // ),
          /*
               $(go.TextBlock, textStyle(),
                { row: 4, column: 0 },
                new go.Binding("text", "key", function(v) { return "Key: " + v; })),
              $(go.TextBlock, textStyle(),
                 { name: "parent", row:4, column: 3, }, // we include a name so we can access this TextBlock when deleting Nodes/Links
                new go.Binding("text", "parent", function(v) { return "parent: " + v; })),
 */
          // ****************************
          // *** Comments - Row 4
          // ****************************
          // $(
          //   go.TextBlock,
          //   textStyle(), // the comments
          //   {
          //     row: 4,
          //     column: 1,
          //     columnSpan: 4,
          //     font: "normal 9pt sans-serif",
          //     wrap: go.TextBlock.WrapFit,
          //     editable: false, // by default newlines are allowed
          //     minSize: new go.Size(10, 14),
          //     margin: new go.Margin(3, 0, 0, 3)
          //   },
          //   new go.Binding("text", "comments").makeTwoWay()
          // )
        ) // end Table Panel
      ) // end Horizontal Panel
    ); // end Node

    // the context menu allows users to make a position vacant,
    // remove a role and reassign the subtree, or remove an office
    diagram.nodeTemplate.contextMenu = $(
      "ContextMenu",
      $("ContextMenuButton", $(go.TextBlock, "Vacate Position"), {
        click: function (e, obj) {
          var node = obj.part.adornedPart;
          if (node !== null) {
            var thisoffice = node.data;
            diagram.startTransaction("vacate");
            // update the key, name, and comments
            diagram.model.setDataProperty(thisoffice, "name", "(Vacant)");
            diagram.model.setDataProperty(thisoffice, "comments", "");
            diagram.commitTransaction("vacate");
          }
        }
      }),
      $("ContextMenuButton", $(go.TextBlock, "Remove Office"), {
        click: function (e, obj) {
          // remove the whole subtree, including the node itself
          var node = obj.part.adornedPart;
          if (node !== null) {
            diagram.startTransaction("remove office");
            diagram.removeParts(node.findTreeParts());
            diagram.commitTransaction("remove office");
          }
        }
      }),
      $("ContextMenuButton", $(go.TextBlock, "Add Office"), {
        click: function (e, obj) {
          // remove the whole subtree, including the node itself
          var clicked = obj.part;
          var node = clicked.adornedPart;
          var thisoffice = clicked.data;
          if (node !== null) {
            diagram.startTransaction("add office");
            var newoffice = {
              office: "(office or branch name)",
              name: "(lead person)",
              comments: "",
              parent: thisoffice.key
            };
            diagram.model.addNodeData(newoffice);
            diagram.commitTransaction("add office");
          }
        }
      }),
      $("ContextMenuButton", $(go.TextBlock, "Toggle Assistant"), {
        click: function (e, obj) {
          // remove the whole subtree, including the node itself
          var node = obj.part.adornedPart;
          if (node !== null) {
            diagram.startTransaction("toggle assistant");
            diagram.model.setDataProperty(
              node.data,
              "isAssistant",
              !node.data.isAssistant
            );
            diagram.layout.invalidateLayout();
            diagram.commitTransaction("toggle assistant");
          }
        }
      })
    );

    // define the Link template
    diagram.linkTemplate = $(
      go.Link,
      go.Link.Orthogonal,
      { corner: 5, relinkableFrom: true, relinkableTo: true },
      $(go.Shape, { strokeWidth: 1.5, stroke: "gray" })
    ); // the link shape

    // read in the JSON-format data from the "mySavedModel" element
    // load();
    /*

    // Show the diagram's model in JSON format
    function save() {
      document.getElementById("mySavedModel").value = diagram.model.toJson();
      diagram.isModified = false;
    }
    function load() {
      diagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
      // make sure new data keys are unique positive integers
      var lastkey = 1;
      diagram.model.makeUniqueKeyFunction = function(model, data) {
        var k = data.key || lastkey;
        while (model.findNodeDataForKey(k)) k++;
        data.key = lastkey = k;
        return k;
      };
    }
 */

    return diagram;
  } // end init

  //console.log(`OrgChart() is rendering with  nodeDataArray count of: ${OrgChartProps.nodeDataArray.length}`);
  // console.log(`OrgChart() nodeDataArray =>: ${JSON.stringify(OrgChartProps.nodeDataArray)}`);
  return (
    <div>
      {/* <p><button id="zoomToFit">Zoom to Fit</button> <button id="centerRoot">Center on root</button></p> */}
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={OrgChartProps.nodeDataArray}
      />

      {/*         <div>
            <div>
              <button id="SaveButton" onclick="save()">Save</button>
              <button onclick="load()">Load</button>
              Diagram Model saved in JSON format:
            </div>
        </div>
 */}
    </div>
  );
};

export default OrgChart;
