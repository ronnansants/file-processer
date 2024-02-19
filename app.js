var Reader = require('./Reader.js');
var Processor = require('./Processor.js');
var Table = require('./Table.js');

let leitor = new Reader();

//var dados = leitor.read('./usuarios.CSV');

async function main(){
    var dados = await leitor.read('./usuarios.CSV');

    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    usuarios.rows.push("bastião", "34", "ADS", "9"); //adicionando um novo registro na t
    console.log(usuarios.RowCount)
}

main();