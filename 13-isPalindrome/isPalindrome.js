function isPalindrome(word) {
  // Insert code here;
  if (word.length==1){
    return true;
  }
  for(let i = 0; i < word.length/2; i++){
    if(word[i] != word[word.length-1-i])
      return false;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
