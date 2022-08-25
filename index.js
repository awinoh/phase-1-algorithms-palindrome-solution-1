function isPalindrome(word) {
  // Write your algorithm here
  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }

    return true
}


/* 
  Add your pseudocode here
  -loop through the string
  -check if last element != element at beginning
  -if elements do not match return false
  -else return true
  -increment start
  -decrement end
*/

/*
  Add written explanation of your solution here
  -A palindrome is a word that is pronounced the same in both ways. In this case I have
  created a function that allows a user to input a word. I start by checking if the length 
  of the word is less than 2. A one letter word and an empty string are palindromes. The program 
  returns true if the word has a length of less than 2. The program loops through the string once if the length 
  is greater or equal to 2. This happens in O(n) time and it does not require any extra space
  to run the function. It returns false when the last element does not match the first element.
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
