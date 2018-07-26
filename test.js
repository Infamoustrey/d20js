
const d20js = require('./index')

console.log('Roll 3 d20s.')
console.log( d20js.roll(3, 'd20') )

console.log('Toss a coin, result: ' + d20js.coin())

console.log('Egyptian Name: ' + d20js.name('egyptian') )