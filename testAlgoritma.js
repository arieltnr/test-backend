// 1.

function reverseString(str){
    let newStr = "";
    for (let i = str.length - 1; i >=0 ; i--){
        newStr += str[i]
    }
    return newStr;
}

console.log(reverseString("NEGIE1"));

// 2. 

const sentence = "Saya sangat senang mengerjakan soal algoritma"

function searchLongestWord(str){
    let longestWord = "";
    const text = str.split(" ");
    for (let i = 0; i < text.length ; i++){
        if (longestWord.length < text[i].length){
            longestWord = text[i]
        }
    }
    return longestWord;
}

console.log(searchLongestWord(sentence))

// 3. 
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

function countOccurrences(input, query) {
  const output = [];
  
  for (let i = 0; i < query.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        count++;
      }
    }
    output.push(count);
  }
  
  return output;
}

const OUTPUT = countOccurrences(INPUT, QUERY);
console.log(OUTPUT);  // Output: [1, 0, 2]

// 4. 
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
];

function diagonalDifference(matrix) {
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    primaryDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][n - 1 - i];
  }

  return primaryDiagonalSum - secondaryDiagonalSum;
}

const result = diagonalDifference(matrix);
console.log(result);