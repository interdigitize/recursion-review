// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//possible inputs: array, obj, nested...
//output: string with everything within unchanged

var stringifyJSON = function(obj) {
  if (typeof obj === 'string' ) {
    return '"' + obj + '"';
  }
  if ( obj === null) {
    return 'null';
  }
  if ( typeof obj === 'boolean' ) {
    if (obj === true) {
      return 'true';
    } else {
      return 'false';
    }
  }
  if (typeof obj === 'function' || typeof obj === undefined) {
    return undefined;  
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
    var stringifiedArr = '[';
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        stringifiedArr += stringifyJSON(obj[i]);         
      } else {
        stringifiedArr += stringifyJSON(obj[i]) + ',';         
      }
    }
    stringifiedArr += ']';
    return stringifiedArr; 
  } 
  if (typeof obj === 'object') {
    var objValuesArr = [];
    for (var prop in obj) {
      if (stringifyJSON(obj[prop]) !== undefined) {
        objValuesArr.push([ prop, obj[prop]]);
      }
    }
    var stringifiedObj = '{';
    for (var i = 0; i < objValuesArr.length; i++) {
      if (i === objValuesArr.length - 1) {
        stringifiedObj += '"' + objValuesArr[i][0] + '":' + stringifyJSON(objValuesArr[i][1]);
      } else {
        stringifiedObj += '"' + objValuesArr[i][0] + '":' + stringifyJSON(objValuesArr[i][1]) + ',';
      }
    }
    stringifiedObj += '}';
    return stringifiedObj;
  }
};

