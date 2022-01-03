function countOfAllBooleans(arr) {
  // Insert code here;
  let cnt = 0;
  for (let i of arr){
    if(typeof i === "boolean"){
      cnt++;
    }
  }
  return cnt;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
