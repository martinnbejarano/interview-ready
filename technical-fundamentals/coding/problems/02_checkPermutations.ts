// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

// abc, cba

export default function checkPermutations(s1: string, s2: string): boolean {
  const hash = new Map<string, number | undefined >()

  for (let i = 0; i < s1.length; i ++){
    const char = s1[i]
    hash.set(char, (hash.get(char) ?? 0) + 1)
  }

  for (let i = 0; i < s2.length; i ++ ){
    const char = s2[i]
    if (!hash.has(char)) { return false }
    hash.set(char, (hash.get(char) ?? 0) - 1)
  }

  return Object.values(hash).filter(v => v !== 0).length == 0
}
