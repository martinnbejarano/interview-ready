// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).


// aab
//

export default function stringCompression (str: string) : string {
  let last = str[0]
  let count = 0
  let res = ""

  for (let i = 0; i < str.length; i ++) {
    let c = str[i]

    if (c == last) {
      count ++ 
    } else {
      res += last + count 
      count = 1
      last = c

  }
}

  res += last + count 

  return res.length < str.length ? res : str

}