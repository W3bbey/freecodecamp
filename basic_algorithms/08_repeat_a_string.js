
function truncateString(str, num) {
  
    // get the length of the str for comparison later
    var stringLen = str.length;
    
    // Started with this condition because I think the next condtion
    // was always going to be true with the tests provided.
    if (num <= 3) {
      // according to the instructions, don't reduce space for the elipsis
      return str.substr(0, num) + "...";
      // most or all examples allowed this next condition to be true
    } else if (stringLen > num) {
      // minus 3 to make room for the elipsis
      return str.substr(0,num - 3) + "...";
    } else {
    
    }
    
    // Return the modified string
    return str;
  }
  
  truncateString("A-", 1);
  