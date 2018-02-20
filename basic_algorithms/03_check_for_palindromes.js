
function palindrome(str) {
  // Good luck!

  // Turn the provided string into all lowe case
  var lowerCase = str.toLowerCase();
  // Take the result of lowerCase and remove all
  // characters that are not letters - including whitespace
  var final = lowerCase.replace(/[^\w]|_/g, "");
  // split all the characters and pass to variable as an array
  // with individual indices
  var toSplitArray = final.split("");
  // Reverse the order of the indices and pass to variable
  var reversedArray = toSplitArray.reverse();
  // join all the indices and pass to a variable - the result
  // will be a string
  var reverseString = reversedArray.join("");
 
  // Compare the two variables
  // A palindrome should be completely identical, therefore true
  if (final === reverseString){
    return true;
  } else {
    return false;
  }
  
}



palindrome("*!?-_ Eyeasdf");


// garbage failed code or notes.

//.replace(/\s+/g, " ");
// Need a loop to separate the string and add to an array
//var reversed = toArray.reverse();
//var reverse = final.reverse();
