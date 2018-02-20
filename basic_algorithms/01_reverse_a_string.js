function reverseString(str) {
  var toArray = str.split("");
  var reversed = toArray.reverse();
  var joined = reversed.join("");
  
  return joined;
  
}

reverseString("This is a test with spaces lol");