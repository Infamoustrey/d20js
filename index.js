
class d20js {

    constructor(){

        this.roll = require('./roll')
        this.coin = require('./coin')
        this.name = require('./name')

    }

}

module.exports = new d20js();