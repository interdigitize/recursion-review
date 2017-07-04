// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// input: should be a string
// output: an array, string, obj, number, boolean, null 

var parseJSON = function(json) {
  //check first character is array or object
  //if array
  if (json.charAt(0) === '[') {
    // get the array string length
    var indexBeforeEndBracket = json.length - 1;
    // slice between the brackets, store into a value '1,2,3' --> ["1","2","3"] '"one","two"' --> ["one", "two"]
    var jsonGuts = json.slice(1, indexBeforeEndBracket);
    // concatenate that into a new array
    return jsonGuts.split(',').map(function(e) {
    //iterate through each element
      //if is a string
      if (e.charAt(0) === '"') {
        return e.slice(1, e.length - 1);
      }      
      //if is null
      if (e.charAt(0) === 'n') {
        return null;
      }
      //if is boolean
      if (e.charAt(0) === 't') {
        return true;
      }
      if (e.charAt(0) === 'f') {
        return false;
      }
      //if element is a number
      if (parseInt(e.charAt(0)) !== NaN) {
        //return parseInt
        return parseFloat(e);
      }
      
    });
    
  }

};
