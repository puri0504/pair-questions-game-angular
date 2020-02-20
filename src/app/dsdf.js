arr = [1, 2, 3]
funcs = []

for(var i = 0; i < arr.length; i++) {
  funcs[i] = (i) => arr[i]
}
console.log(funcs[1]());
