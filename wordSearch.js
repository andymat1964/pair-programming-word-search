
// For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found


// Bring in Transpose from Matrix: 

const transpose = function(letters) {
  const newArray = [];
      for (let i = 0; i < letters[0].length; i++) {
        newArray.push([])
      }
      for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
          newArray[j].push(letters[i][j]);
        }
      }
      return newArray;
    };

//

const wordSearch = (letters, word) => { 
  console.log(word.length);
  if (word.length === 0) {
      return false
  };
  const horizontalJoin = transpose(letters).map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) {
      return true;
  } else if (word.length === 0) {
      return false;
  } else {
      return false;
  }
}
  const verticalJoin = transpose(letters).map(ls => ls.join(''))
  for (l of verticalJoin) {
      if (l.includes(word)) {
      return true;
  } else if (!l === []) {
      return true
  } else {
      return false;
      }
  };
};

const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], ['SEINFELD'])


console.log(result);

module.exports = wordSearch

