
function confirmEnding(str, target) {
  
  // Get the length of the target
  var targetLen = target.length;
  // Create a variable and assign a value that is the length of target
  // By doing this, I'd hoped that both the target and the remaining 
  // characters in the string would be the same.
  var lastStringChar = str.substring(str.length - targetLen);
  
  // If statement to confirm of lastStringChar did what it was supposed to do
  if (target == lastStringChar) {
    return true;
    
  } else {
    return false;
  }
  
  return str;
}

confirmEnding("Bastian", "ian");
