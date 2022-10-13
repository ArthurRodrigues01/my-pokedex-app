
export const replaceUselessCharacters = function(string, arrayOfChars) {
  let newString = '';
  [...string].forEach(item => {
    if (arrayOfChars.indexOf(item) != -1) {
      newString += ' ';
    } else {
      newString += item;
    } 
  })
  
  return newString;
}
export const capitalize = word => {
  word = [...word].map((item, index) => index != 0 ? item : item.toUpperCase());
  
  return word;
}
