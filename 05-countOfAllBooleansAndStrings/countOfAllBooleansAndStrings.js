function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let cnt = 0;
  for (let i of arr){
    if(typeof i === "boolean" || typeof i === "string"){
      cnt++;
    }
  }
  return cnt;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
