/*
   Gets a fantasy name
   @param {string} - Type of Name to Generate
   @return {string} - Name Generated
*/ 

let generate_name = require('./lib/name_generator');

module.exports = function(type){

    return generate_name(type);

 }