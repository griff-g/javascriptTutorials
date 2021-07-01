// Create a function that takes a word and returns the new word without including the first character.

// Examples
// newWord("apple") ➞ "pple"

// newWord("cherry") ➞ "herry"

// newWord("plum") ➞ "lum"

const newWord = (word)=>{
    return word.substr(1)
}

const finalWord = newWord('apple')
console.log(finalWord);