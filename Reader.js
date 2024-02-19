const fs = require('fs');
const util = require('util');

class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async read(filepath){
        try {
            return await this.reader(filepath, 'utf8')
        }catch(err){
            console.log(`Error reading file: ${err}`);
        }
    }
}

module.exports = Reader;