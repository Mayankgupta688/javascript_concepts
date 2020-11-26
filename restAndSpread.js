var onputData = [10, 20, 30, 40, 50, 60, 70]

function someFunction(a, b, ...c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

someFunction(...onputData)