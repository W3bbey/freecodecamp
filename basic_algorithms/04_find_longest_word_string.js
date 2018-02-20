// My delay here was making some assumptions on my own.
// I wanted return the word with the most characters.
// I may have been trying to return the number the whole time, but
// it's not important in this case that I know which word is the longest.
// It's not a stretch find find which word is the longest, but I couldn't
// tell you how to do it immediately.


function findLongestWord(str) {
  // turn the string into an array of separate strings at the spaces.
  var makeArray = str.split(" ");
  var arrayLengths = [];
  
  // iterate through the array and push to new array of just ints
  for (var i = 0; i < makeArray.length; i++) {
    arrayLengths.push(makeArray[i].length);
    
  }
  
  // find the highst number in the newly created array
  var largest = Math.max.apply(Math, arrayLengths);
  // return the highest number
  return largest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//---------------------------------------------------------------------------------------


// This is currently broken

function findLongestWord(str) {
    var makeArray = str.split(" ");
    var champion = makeArray.shift();
    
    for (var i = 0; i < makeArray[0].length; i = 6) {
    
      var contender = makeArray.shift();
      
      if (contender.length >= champion.length) {
        makeArray.push(champion);
        champion = contender;
        
        
      } else {
        makeArray.push(contender);
      }
    
        
    }
    
    return makeArray;
  }
  
  findLongestWord("What if we try a super-long word such as otorhinolaryngology");
  