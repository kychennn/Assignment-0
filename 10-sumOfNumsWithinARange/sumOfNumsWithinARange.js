function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let cnt = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i]>=start && nums[i]<=end){
      cnt++;
    }
  }
  return cnt;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
