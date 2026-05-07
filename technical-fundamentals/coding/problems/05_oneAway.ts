// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  let diff = 0;  
  let p1 = 0;
  let p2 = 0

  // pale
  // ple 
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  while(p1 < str1.length && p2 < str2.length){


    if (str1[p1] == str2[p2]) {
      p1 ++
      p2 ++
      continue
    } else {
      diff ++
      if (diff > 1) { return false }
    }

    if (str1.length == str2.length) {
      p1 ++
      p2 ++
    } else if (str1.length > str2.length) {
      p1 ++
    } else {
      p2 ++
    }

  }
  return true 

}