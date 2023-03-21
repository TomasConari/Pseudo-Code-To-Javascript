function longestConsec(strarr, k) {
  let longest = "";
  for(let i = 0;i <= strarr.length;i += 1){
    let temporaryString = strarr.slice(i, i + k).join("");
    if(temporaryString.length > longest.length){
      longest = temporaryString;
    }
  }
  return longest;
}
const strarr = ["tree", "foling", "trashy", "blue", "abcdefg", "hijklmn"];

console.log(longestConsec(strarr,2));