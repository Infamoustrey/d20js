

/*
   Validates Dice Type
   @param {string} - Value to be validated
   @return {boolean} - if the dicetype is a valid dice type
*/ 
function isValidDiceType (diceType){

    return diceType.substring(0,1) == 'd' 
        && !isNaN( diceType.substring(1,diceType.length) )

}

/*
   Rolls a specified number of dice of a specified dice type
   @param {number} - Number of Dice to Roll 
   @param {string} - Type of Dice to Roll
   @return {array} - Array of roll objects
*/ 
module.exports = function(numberOfDice, diceType){

    if( isNaN( numberOfDice ) ){throw 'Invalid Number of Dice'}
    if( !isValidDiceType(diceType) ){ throw 'Invalid Dice Type' }

    let diceValue = parseInt( diceType.substring(1, diceType.length) );
    numberOfDice = parseInt(numberOfDice);

    let results = [];

    for(let i = 1; i <= numberOfDice; i++){

        let result = Math.ceil(Math.random() * diceValue);

        results.push({
            roll: i,
            result: result 
        })
    }

    return results;


 }