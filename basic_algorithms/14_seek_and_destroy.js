
function destroyer(arr) {
    
    // declare a variable for the first array
    var peasants = arguments[0];
    // set a global var
    var toBeCulled = "";
    // set a global var
    var culled = "";
    
    // The intended effect is to iterate through the arguments following the first
    for (var i = 1; i < arguments.length; i++){
        
      // worked better declaring the variable equal to the iterated argument  
      toBeCulled = arguments[i];
      
      // begin the function to filter
      culled = peasants.filter(function(val){
      
        return val != toBeCulled;
     
      });
      
      // set peasants equal to the filter array for the next iteration
      peasants = culled;
      
    }
    
    // return the array after it has been filtered
    return culled;
    
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  