// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("h4x0rL4ng", () => {
  it("Takes in a string and returns a coded message.", () => {
      const secretCodeWord1 = "Lackadaisical"
      const secretCodeWord2 = "Gobbledygook"
      const secretCodeWord3 = "Eccentric"

      const expected1 = "L4ck4d41s1c4l"
      const expected2 = "G0bbl3dyg00k"
      const expected3 = "3cc3ntr1c"

      expect(h4x0rL4ng(secretCodeWord1)).toEqual(expected1)
      expect(h4x0rL4ng(secretCodeWord2)).toEqual(expected2)
      expect(h4x0rL4ng(secretCodeWord3)).toEqual(expected3)
  })
})

// Good failure
// FAIL  ./code-challenges.test.js
// h4x0rL4ng
//   ✕ Takes in a string and returns a coded message.

// ● h4x0rL4ng › Takes in a string and returns a coded message.

//   ReferenceError: h4x0rL4ng is not defined

// b) Create the function that makes the test pass.
// Pseudocode
// Function Name: h4x0rL4ng
// Parameters: 1 x string called lameString
// Logic:
//     - Takes in any string
//     - Create a new variable named h4x0rStr to store edited string
//     - Search through string to find all a's, replace with 4's
//     - Complete the same task for e, i, and o with 3, 1, and 0 being the replacements
//     - Return the newly edited string 

// const h4x0rL4ng = (lameString) => {
//   let h4x0rStr = lameString.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
//   return h4x0rStr
// }

// Passed
// PASS  ./code-challenges.test.js
// h4x0rL4ng

// Refactor
const h4x0rL4ng = (lameString) => lameString.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")

// Still passed

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("particularL", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    
      expect(particularL(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(particularL(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

  })
})

// I am failing!!
// particularL
//     ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter

//   ● particularL › takes in an array of words and a single letter and returns all the words that contain that particular letter

//     ReferenceError: particularL is not defined

// b) Create the function that makes the test pass.
// Pseudocode:
//Create a function that will with the name particularL that will take an array and a string as parameters
//use the method .filter that will only keep the values that we need, the words with letter a and e
// Use methods toUpperCase and toLowerCase to get the values that are both upper and lower case
//Use the || OR so that the value includes upper case or lowercase letters

const particularL = (array, string) => {
  return array.filter(value => value.includes(string.toUpperCase()) || value.includes(string.toLowerCase()))
}

// Passed
// PASS  ./code-challenges.test.js
// h4x0rL4ng
//   ✓ Takes in a string and returns a coded message. (1 ms)
// particularL
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.
