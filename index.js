function isPalindrome(word) {
  // Write your algorithm here
  const smallWorld =word.toLowerCase()
  const wordArray = word.split('')
  const reverseWordArray = wordArray.reverse()
  const reverseWord = reverseWordArray.join('')
  if(smallWorld === reverseWord){ 
    return true
  }else{
    return false
  }

}

/* )
  Add your pseudocode here
  convert string to lower case
   convert string to an array
   reverse the elements of the array
   convert the array back to string
   compare the original string with the new string that has been converted to the array
   if they are the same return true or else return false

  
*/

/*
  Add written explanation of your solution here
  toLowerCase() method converts string to lower case
  split() method converts to  array
  the array is reversed using the reverse method
  the reversed array was turned back to a string using reversed() method
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
