var namestring = "yourName";
var firstChar = namestring.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = namestring.slice(1,namestring.length);

var capitalisedName = upperCaseFirstChar + restOfName;

console.log("Hello, " + capitalisedName);