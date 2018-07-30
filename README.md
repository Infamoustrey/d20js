# d20js
> A JS Libary for random things, like dice rolls, random data, etc...

### Credit
 
* Code for the Name Generator provided by [donjon](https://donjon.bin.sh/code/name/)

## Install
---

``` bash
npm i --save d20js
```

## Usage
---

``` javascript
const d20js = require('d20js');

console.log( d20js.coin() )
// heads/tails

console.log( d20js.roll(1, 'd6') )
// [ {roll: 1, result 6} ]


```