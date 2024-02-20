var Reader = require('./Reader.js');
var Processor = require('./Processor.js');
var Table = require('./Table.js');
var HtmlParser = require('./HtmlParser.js');

var leitor = new Reader();

async function main(){
    var dados = await leitor.read('./usuarios.CSV');

    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    console.log(html);
}

main();