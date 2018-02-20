// I thought I needed to create new variables for the provided parameters
// but I did not.

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    

    // add the num parameter to the array, or in other words
    // add arguments[1] to:
    // arugments[0]
    arr.push(num);

    // organize the array from smallets to largest with this function
    arr.sort(function(a, b){
      return a - b;
    
    });

    // return the location of the num paramter / arguments[1], or 3 in this example
    return arr.indexOf(num);
             
  }
  
  getIndexToIns([3, 10, 5], 3);