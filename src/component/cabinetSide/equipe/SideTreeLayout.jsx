// ...............................
// SideTreeLayout.jsx
// ...............................
import * as go from "gojs";

// Assume that the SideTreeLayout determines whether a node is an "assistant" if a particular data property is true.
// You can adapt this code to decide according to your app's needs.
export function isAssistant(n) {
  if (n === null) return false;
  return n.data.isAssistant;
}

// This is a custom TreeLayout that knows about "assistants".
// A Node for which isAssistant(n) is true will be placed at the side below the parent node
// but above all of the other child nodes.
// An assistant node may be the root of its own subtree.
// An assistant node may have its own assistant nodes.
export function SideTreeLayout() {
  go.TreeLayout.call(this);
}
go.Diagram.inherit(SideTreeLayout, go.TreeLayout);

SideTreeLayout.prototype.makeNetwork = function (coll) {
  var net = go.TreeLayout.prototype.makeNetwork.call(this, coll);
  // copy the collection of TreeVertexes, because we will modify the network
  var vertexcoll = new go.Set(go.TreeVertex);
  vertexcoll.addAll(net.vertexes);
  for (var it = vertexcoll.iterator; it.next(); ) {
    var parent = it.value;
    // count the number of assistants
    var acount = 0;
    var ait = parent.destinationVertexes;
    while (ait.next()) {
      if (isAssistant(ait.value.node)) acount++;
    }
    // if a vertex has some number of children that should be assistants
    if (acount > 0) {
      // remember the assistant edges and the regular child edges
      var asstedges = new go.Set(/*go.TreeEdge*/);
      var childedges = new go.Set(/*go.TreeEdge*/);
      var eit = parent.destinationEdges;
      while (eit.next()) {
        var e = eit.value;
        if (isAssistant(e.toVertex.node)) {
          asstedges.add(e);
        } else {
          childedges.add(e);
        }
      }
      // first remove all edges from PARENT
      eit = asstedges.iterator;
      while (eit.next()) {
        parent.deleteDestinationEdge(eit.value);
      }
      eit = childedges.iterator;
      while (eit.next()) {
        parent.deleteDestinationEdge(eit.value);
      }
      // if the number of assistants is odd, add a dummy assistant, to make the count even
      if (acount % 2 == 1) {
        var dummy = net.createVertex();
        net.addVertex(dummy);
        net.linkVertexes(parent, dummy, asstedges.first().link);
      }
      // now PARENT should get all of the assistant children
      eit = asstedges.iterator;
      while (eit.next()) {
        parent.addDestinationEdge(eit.value);
      }
      // create substitute vertex to be new parent of all regular children
      var subst = net.createVertex();
      net.addVertex(subst);
      // reparent regular children to the new substitute vertex
      eit = childedges.iterator;
      while (eit.next()) {
        var ce = eit.value;
        ce.fromVertex = subst;
        subst.addDestinationEdge(ce);
      }
      // finally can add substitute vertex as the final odd child,
      // to be positioned at the end of the PARENT's immediate subtree.
      var newedge = net.linkVertexes(parent, subst, null);
    }
  }
  return net;
};

SideTreeLayout.prototype.assignTreeVertexValues = function (v) {
  // if a vertex has any assistants, use Bus alignment
  var any = false;
  var children = v.children;
  for (var i = 0; i < children.length; i++) {
    var c = children[i];
    if (isAssistant(c.node)) {
      any = true;
      break;
    }
  }
  if (any) {
    // this is the parent for the assistant(s)
    v.alignment = go.TreeLayout.AlignmentBus; // this is required
    v.nodeSpacing = 350; // control the distance of the assistants from the parent's main links
    v.layerSpacing = 0;
    v.layerSpacingParentOverlap = 1;
  } else if (v.node == null && v.childrenCount > 0) {
    // found the substitute parent for non-assistant children
    //v.alignment = go.TreeLayout.AlignmentCenterChildren;
    //v.breadthLimit = 3000;
    v.layerSpacing = 0;
  }
};
/*
  if (any) {
    // this is the parent for the assistant(s)
    v.alignment = go.TreeLayout.AlignmentBus; // this is required
    v.nodeSpacing = 50; // control the distance of the assistants from the parent's main links
  } else if (v.node == null && v.childrenCount > 0) {
    // found the substitute parent for non-assistant children
    //v.alignment = go.TreeLayout.AlignmentCenterChildren;
    //v.breadthLimit = 3000;
    v.layerSpacing = 0;
  }
};
*/

SideTreeLayout.prototype.commitLinks = function () {
  go.TreeLayout.prototype.commitLinks.call(this);
  // make sure the middle segment of an orthogonal link does not cross over the assistant subtree
  var eit = this.network.edges.iterator;
  while (eit.next()) {
    var e = eit.value;
    if (e.link == null) continue;
    var r = e.link;
    if (isAssistant(r.toNode)) {
      /// added
      r.fromSpot = go.Spot.LeftRightSides;
      r.fromNode.portSpreading = go.Node.SpreadingNone; ///  changed: go.Node.SpreadingNone;
    }
    // does this edge come from a substitute parent vertex?
    var subst = e.fromVertex;
    if (subst.node == null && r.routing == go.Link.Orthogonal) {
      r.updateRoute();
      r.startRoute();
      // middle segment goes from point 2 to point 3
      var p1 = subst.center; // assume artificial vertex has zero size
      var p2 = r.getPoint(2).copy();
      var p3 = r.getPoint(3).copy();
      var p5 = r.getPoint(r.pointsCount - 1);
      var dist = 10;
      if (subst.angle == 270 || subst.angle == 180) dist = -20;
      if (subst.angle == 90 || subst.angle == 270) {
        p2.y = p5.y - dist; // (p1.y+p5.y)/2;
        p3.y = p5.y - dist; // (p1.y+p5.y)/2;
      } else {
        p2.x = p5.x - dist; // (p1.x+p5.x)/2;
        p3.x = p5.x - dist; // (p1.x+p5.x)/2;
      }
      r.setPoint(2, p2);
      r.setPoint(3, p3);
      r.commitRoute();
    }
  }
}; // end of SideTreeLayout
