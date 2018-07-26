
const axios = require('axios')

/*
   Gets a fantasy name
   @return {string} - Result of the coin toss
*/ 
module.exports = async function(){

    try {
        let result = await axios.get('https://donjon.bin.sh/name/rpc.cgi?type=Human+Male&n=1')
        return Promise.resolve(result.data);
    } catch (e){
        throw new Error(e)
    }

 }