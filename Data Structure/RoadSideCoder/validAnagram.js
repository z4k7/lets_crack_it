// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// const isAnagram = (s, t) => {
//     s = s.split('').sort().join('')
//     t = t.split('').sort().join('')

//     return s === t
// }

// let s = 'anagram'
// let t = 'nagaram'

// console.log(isAnagram(s,t))

// ______________________________________________________________________

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

let result = isAnagram("anagram", "nagaram");

console.log(result);
