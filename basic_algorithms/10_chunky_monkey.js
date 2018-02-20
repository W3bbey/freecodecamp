// In progress
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var sliced = "";
  var diced = "";
  //var loopSize = arr.length / size;
  var chunky = [];
  var startSlice = "";
  var endSlice = "";
  
  for (var i = 0; i < size; i++) {
    // This is intended to dicate the start slice point in the array
    startSlice = i * size;
    endSlice = (i + 1) * size;
    sliced = arr.slice(startSlice, endSlice);
    chunky.push(sliced);
    
  }
  
  
  //sliced = arr.slice(0,2);
  //chunky.push(sliced);
  return chunky;

}

//should return [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); 
