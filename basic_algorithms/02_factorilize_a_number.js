function factorialize(num) {
  var ourArray = [];
  var factorA = 1;
  
  for (var i = 1; i <= num; i++){
    ourArray.push(i);
    var factorB = ourArray.shift();
    factorA *= factorB;
  }

  
   
  // now figure out a way to do factorA *= each index
  //for (var j = 1; i <= )
  
  return factorA;
  
  //var i = 0;
  //while (i <= num) {
  //  ourArray.push(i);
  //  i++
  //}