function sumAll(arr) {
  

// I'm not thrilled about my code in this example because I feel like I only 
// copied three other functions and that's the meat of the problem.

  var lineUp = []; // global var to push a range of numbers in a for loop
  
  var max = arr.reduce(function(a,b){ // function to get the highest number
    return Math.max(a,b);
  });
  
  var min = arr.reduce(function(a,b){ // function to get the lowest number
    return Math.min(a,b);
  });
  

  // set i to the lowest number in the range, and increment until equal to the max number
  // this will push 1 - 4 in the current example
  for (var i = min; i == max + 1; i++){
    lineUp.push(i);
  }
  

  // example function nearly verbatim from the example page
  var sum = lineUp.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }); // not sure why there's a 0 in the example, but I removed it and it passed
  
  return sum;
  
//  return spread;
  
}

sumAll([1, 4]);
