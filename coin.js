
/*
   Flips a coin and returns the result
   @return {string} - Result of the coin toss
*/ 
module.exports = function(){

    return Math.floor( Math.random() * 2 ) ? 'heads' : 'tails';

 }