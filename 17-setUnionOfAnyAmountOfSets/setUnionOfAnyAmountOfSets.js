function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var result = new Set();  
  for (let set of [...args]){
    for (let i of set){
      result.add(i);
    }
  }
  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
