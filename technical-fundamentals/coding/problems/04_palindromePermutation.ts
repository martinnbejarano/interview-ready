// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {

  const clean = str.toLowerCase().replaceAll(" ", "")
  const hash: Map<String, number | undefined> = new Map()

  for (let i = 0; i < clean.length; i ++) {
    const char = clean[i]
    hash.set(char, (hash.get(char) ?? 0) + 1)
  }
  
  return Array.from(hash.values()).filter(v => v % 2 == 1).length <= 1
}