// This would be well suited a switch
// Maybe another time.


function rot13(str) { // LBH QVQ VG!

    // to push to array
    var readyToPush = [];
    // global var for the letter change
    var converted = "";
    var num = "";
    
    // split str parameter at every character, and space
    var chopped = str.split("");
    
  //  return ".".charCodeAt();
    
    // for loop to iterate
    for (var i = 0; i < str.length; i++){
      
      if (chopped[i].charCodeAt() == 32) {
        // push a space if the charCode is 32
        readyToPush.push(" ");
        
      } else if (chopped[i].charCodeAt() == 33) {
        // push a "!" if the charCode is 33
        readyToPush.push("!");
      
      } else if (chopped[i].charCodeAt() == 46) {
        // push a period if the charCode is 46
        readyToPush.push(".");
      
      } else if (chopped[i].charCodeAt() == 63) {
        // push a "?" if the charCode is 63
        readyToPush.push("?");
        
      } else if (chopped[i].charCodeAt() <= 77){
        
        // the letter "M" is the cutoff before a number would be
        // 13 less than its value to equal its counterpart
        // M = 77, so add 13 to get it's counterpart
        num = chopped[i].charCodeAt() + 13;  
        converted = String.fromCharCode(num);
        readyToPush.push(converted);
      
      } else {
        
        // if the result is higher than 77, subtract 13
        // to equal the counter part
        num = chopped[i].charCodeAt() - 13; 
        converted = String.fromCharCode(num);
        readyToPush.push(converted);
      }
    
      
    }
    return readyToPush.join("");
    
  }
  
  // Change the inputs below to test
  rot13("SERR CVMMN!");
  