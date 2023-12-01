function capitalize( word: string): string {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1)

  return capitalized
}
function rmFchars(str: string): string {
  // return str.replace(/-\n/g,'')
  return str.replace(/\f/g, '\n')
}
function splitArray(array: any[], divisor: number): any[][] {
  const sizeOfLowerArrays = array.length / divisor
  const higherArray = []

  
  for (let i = 0; i <= array.length; i += sizeOfLowerArrays) {
    higherArray.push(array.slice(i, i + sizeOfLowerArrays))
  }

  return higherArray
}



export { capitalize, rmFchars, splitArray}