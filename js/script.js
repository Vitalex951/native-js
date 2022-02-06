
console.log(typeof 4); //'number'
console.log(typeof NaN); //'number'
console.log(typeof Infinity); //'number'

console.log(Number.isNaN(NaN)); //true
console.log(Number.isFinite(Infinity)); //false

console.log(typeof null) //'object'
console.log(typeof {}) //'object'
console.log(typeof []) //'object'
console.log(Array.isArray([]) ) //true


console.log(typeof (() => {})) //'function'