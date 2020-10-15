// Count
function count(array, element) {
    let n = 0
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        n++
      }
    }
  
    return n
  }
  console.log(count([1, 2, 1, 4], 1))
  
  // Average
  function average(array) {
    const total = array.length
  
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i] // sum = sum + array[i]
    }
  
    return sum / total
  }
  console.log(average([1, 2, 3, 4])
  )

  // min
  function min(array) {
    let smallest = Infinity
  
    for (let i = 0; i < array.length; i++) {
      if (smallest > array[i]) {
        smallest = array[i]
      }
    }
  
    return smallest
  }
  console.log(min([16, 06, 15, 08]),)
  
  // max
  function max(array) {
    let highest = -Infinity
  
    for (let i = 0; i < array.length; i++) {
      if (highest < array[i]) {
        highest = array[i]
      }
    }
  
    return highest
  }
  console.log(max([14, 09, 20, 01]),)
  
  // shift
  function shift(array) {
    let newArray = []
  
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i])
    }
  
    return newArray
  }
  console.log(shift([1, 2, 3, 4]),)
  
  // diff
  function diff(array) {
    const highest = max(array)
    const smallest = min(array)
  
    return Math.abs(highest - smallest)
  }
  console.log(diff([5, 10, 15, 20, 25]),)