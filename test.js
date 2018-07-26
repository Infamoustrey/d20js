
const d20js = require('./index')

console.log('Roll 3 d20s.')
console.log( d20js.roll(3, 'd20') )

console.log('Toss a coin, result: ' + d20js.coin())

d20js.name()
    .then(name => console.log('Rando Fantasy Name: ' + name ) )
