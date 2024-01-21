function isPalindrome(word) {
  // Write your algorithm here
  const wordArr = word.split('') 
  const wordArrReversed = wordArr.reverse();
  const wordReversed = wordArrReversed.join('');
  console.log(wordReversed) 
  if (word === wordReversed){
    return true
  } else {
    return false
  }
}


/* 

To check if a word is a palindrome I need to flip the string argument backwards this can be broken down into steps and sub-steps using a string of 'abcd' as an example:

1. The string argument must be broken apart into an array of separate letters using split() method: 
'abcd' gets turned into [a,b,c,d]

2. This array of separate letters can now be reversed using reverse() method
[a,b,c,d] gets turned into [d,c,b,a]

3. Now the reversed array can be joined back into a string using join() method
[d,c,b,a] gets turned into 'dcba'

4. With the original string argument of 'abcd' and our new reversed string of 'dcba' we can check if they are strictly equal to each other by using the === method in conjunction with an if-else statement
if 'abcd' === 'dcba' then this is/is not a palindrome

*/

/*
  Add written explanation of your solution here
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
