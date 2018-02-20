//Working solution:
// --------------------------------------------------------------------------------------------
function titleCase(str) {
  // turn into an array
  var makeArray = str.split(" ");
  // save for strings in lower case to push
  var lower = [];
  // storing the lower case strings
  var smallArray = [];
  // * keep for captilized words to be pushed
  var titleArray = [];
  // this variable will store a shifted character to then unshift as a 
  // capital letter
  var shiftForCaps = "";
  
  for (var i = 0; i < makeArray.length; i++) {
    // Change the first index of the array to all lower case 
    // and store in a variable
    lower = makeArray[i].toLowerCase();
    // split the index into separate indices
    smallArray = lower.split("");
    // shift off the first character and store in a variable
    shiftForCaps = smallArray.shift();
    // unshift the variable back into the array as uppercase
    smallArray.unshift(shiftForCaps.toUpperCase());
    // push the array into a new array, joined together
    titleArray.push(smallArray.join(""));
    
  }
    
    // The above, and the return statement below are necessary to join
    // because it was a case like this:
    // ['a','b','c'] ---> ['abc']
    // then after the for loop completes, it's a case of this:
    // ['abc', 'def'] and we need a string like this: "abc def"
    
    // Return the array that was iterated, joined together as a string
    return titleArray.join(" ");

}

titleCase("I'm a little tea pot");

// --------------------------------------------------------------------------------------------

// map method attempt
titleArray = smallArray.map(function(val) {
  return val[0][0].toUpperCase();
});


// Failed Attempt
// this doesn't loop the way I expected, instead it returns "I" 5 times.


function titleCase(str) {
    // turn into an array
    var makeArray = str.split(" ");
    // save for strings in lower case to push
    var lower = [];
    // storing the lower case strings
    var smallArray = [];
    // * keep for capitalizing the first character
    var upperFirst = [];
    // * keep for captilized words to be pushed
    var titleArray = [];
    
    for (var i = 0; i < makeArray.length; i++) {
      lower = makeArray[i].toLowerCase();
      //return lower;
      smallArray.push(lower);
      //return smallArray;
      upperFirst = smallArray[0][0].toUpperCase();
      titleArray.push(upperFirst);
      
    }
    
     for (var j = 1; j < smallArray[0].length; j++) {
        titleArray.push(smallArray[0][j]);
      }
     
    
    return titleArray;
    
    
    //return smallArray ;
    //return str.toUpperCase();
  }
  
  titleCase("I'm a little tea pot");
  