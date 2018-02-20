
// This idea of having two for loops isn't sustainable
// I need to look into a way of incorporating all of the change in one for loop.

function chunkArrayInGroups(arr, size) {
  
    var newArrayOne = [];
    var newArrayTwo = [];
    var combinedArr = [];
    var shifted = "";
    
    for (var i = 0; i < size; i++){
      shifted = arr.shift();
      newArrayOne.push(shifted);
      
    }
    
    for (var j = 0; j < size; j++) {
      shifted = arr.shift();
      newArrayTwo.push(shifted);
    }
    
    combinedArr.push(newArrayOne);
    combinedArr.push(newArrayTwo);
    
    return combinedArr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  