let strings = ['none', 'xenon']

let findPalindromPairs = strings => {
  let res = []
  for(let i = 0; i < strings.length; i++)
    for(let j = 0; j < strings.length; j++) {
      if(i===j) continue
      let str = strings[i] + strings[j]
      if(isPalindrom(str)) res.push([strings[i], strings[j]])
    }

  return res
}

let isPalindrom = (str) => str.split('').every((x,i) => str[i] === str[str.length - i - 1])

console.log(findPalindromPairs(strings))

/*
Your previous Plain Text content is preserved below:

# Given a dictionary, find all pairs of words that,
# when concatenated together, form a palindrome.
# ‘none', 'xenon': 'nonexenon' is a palindrome
# 'none', 'xexenon': 'nonexexenon' is a palindrome

example
[‘none', 'xenon'] => [[‘none', 'xenon']] because nonexenon reversed is nonexenon, check so return an array of word pairs given a massive array of strings (a dectionary)
['you', 'me', ‘none', 'xenon'] => [[‘none', 'xenon']]
i.e

let arrayOfWorPairsThatConcatenatedArePalindromds = findPalindromPairs(strings)

// is this correct ?

// High level solution
// so we have a array of strings, lets fort form the naive solution, alright naive solution is to concatenate every word with another word (2 for loops) and check if concatenation equals concatenation.reverse()
// this runs in O(n^2), is this suffienect ?

none xex enon
 */
