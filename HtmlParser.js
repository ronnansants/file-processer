var ejs = require('ejs');

class HtmlParser{
    static async Parse(table){
        return await ejs.renderFile("./table.ejs", {Header: table.header, Rows: table.rows})
    }
}

module.exports =  HtmlParser;