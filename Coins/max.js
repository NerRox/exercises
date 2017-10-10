function maxArrayItem(arr) {
  if (arr.length < 1) {
    return null
  }

  else {

  let result = arr.reduce(function(max, current) {
  max = arr[0]
  if (max > current) {
    return max} 

    return current
  }, 0)

  return result
  }
}
