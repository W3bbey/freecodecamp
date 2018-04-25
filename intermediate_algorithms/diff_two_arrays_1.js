
function diffArray(arr1, arr2) {
  var newArr = [];
  
  // Added this variable as a placeholder in the loop
  // Needed to be able to check if the indexOf was -1 
  var check = "";
  // Same, same; but different.
  
  // First for loop to compare all in arr2 to see if anything was different
  // I started with arr2 because I didn't think it would be required for both
  // but if one is longer than the other, it appears to have been required
  for (var i = 0; i < arr2.length; i++){
    check = arr1.indexOf(arr2[i]);
    if (check == -1){
      newArr.push(arr2[i]);
    }
  }
  

  // Second for loop to check arr1 indexOf against arr2
  // gotta make sure you use the same variable throughout!
  for (var j = 0; j < arr1.length; j++){
    check = arr2.indexOf(arr1[j]);
    if (check == -1){
      newArr.push(arr1[j]);
    }
  }

  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



/* function diffArray(arr1, arr2) {
  var newArr = [];
  var obj = "";
  var result = [];
  // Same, same; but different.
  //return newArr;
  
  // Couldn't just do greater than, because some examples are equal in length
  if (arr1.length >= arr2.length){
    // The idea here is to iterate through the array and compare each
    // index to the index of the other array
    // the initial if statement is to find the longer of the two arrays so
    // the interation goes through the entire index.
    for (var i = 0; i < arr1.length; i++){
      // if a comparison is not equal, push it to its own array
      // This isn't working though.
      if (arr1[i] != arr2[i]){
        result.push(arr1[i]);
      } else {
        
      }
    }
    
    return arr1;
    
  } else {
    for (var j = 0; j < arr1.length; j++){
      if (arr2[j] != arr1[j]){
        result.push(arr2[j]);
        
      } else {
        
      }
      
    }
    
    return result;
  }
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
 */