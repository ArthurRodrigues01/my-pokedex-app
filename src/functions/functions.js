
export const replaceUselessCharacters = function(string, arrayOfChars) {
  return [...string].map(item => {
    if (arrayOfChars.indexOf(item) != -1) {
      return ' '
    } 
    
    return item;
  });
}
export const capitalize = word => {
  word = [...word].map((item, index) => index != 0 ? item : item.toUpperCase());
  
  return word;
}
