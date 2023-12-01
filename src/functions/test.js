function splitArray(array, divisor) {
  const sizeOfLowerArrays = array.length / divisor
  const arr = []

  
  for (let i = 0; i < array.length; i += sizeOfLowerArrays) {
    arr.push(array.slice(i, i + sizeOfLowerArrays))
  }

  return arr
}
function dummyArray(fill = 1) {
  let arr = []
  
  for (let i = 0; i < fill; i++) {
    arr.push(i + 1)
  }

  return arr
}

const array = dummyArray(60)

console.log(...splitArray(array, 5))

// expected result [[1,2,3],[4,5,6],[7,8,9],...,[46,47,48]]

