function minArrayItem(arr) {
  if (arr.length < 1) {
    return null
  }

  else {
  let result = arr.reduce(function(min, current) {
    if (current < min) {
      return current
    }

    return min
  })

  return result
  }
}
