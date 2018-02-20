
function repeatStringNumTimes(str, num) {
  
    // Create array for upcoming for loop
    var repeat = [];
    
    // loop and push str as many times as specified by the num parameter.
    for (var i = 0; i < num; i++) {
       repeat.push(str);
         
    }
    
   // if (num % 2 == 0) {
     // return repeat.join("");  
    //} else {
    //  return null;  
    //}
    
    // Well there was stuff about returning null if the num parameter was odd
    // But this completes the challenge below.
    return repeat.join("");  
    
  }
  
  repeatStringNumTimes("abc", 3);
  