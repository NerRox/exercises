function fact(n) {
  if (n <= 0) {
    return 1
  }

  let acc = n

  while (n > 1) {
    acc = acc * (n - 1)
    n--
  }

  return acc
}