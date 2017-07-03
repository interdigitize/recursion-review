// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //set storage array
  var output = [];
  //define helper function
  var visitEachNode = function(node) {
    //get the childnodes for the current node
    var children = node.childNodes;
    //iterate the nodes
    for (var i = 0; i < children.length; i++) {
      //if has classname
      if (_.contains(children[i].classList, className)) {
        //add to the nodelist array
        output.push(children[i]);
      }
      //if node has any childen
      if (node.childNodes) {
        //run visetEachNode
        visitEachNode(children[i]);        
      }
    }  
  };

  //call function on body
  visitEachNode(document.body);
  //return array
  return output;
};
