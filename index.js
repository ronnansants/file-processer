const fs = require('fs');

function modificarUsuario(nome, idade, altura, curso="Engenharia de Software"){
    fs.readFile('./usuario.json',{encoding: 'utf-8'}, (err, dados) => {
        if(err){
            console.log("Reading file Failed.")
        }else{
            let data = JSON.parse(dados);
            data.nome= nome
            data.idade = idade
            data.altura = altura
            data.curso = curso;
    
            fs.writeFile('./usuario.json', JSON.stringify(data),(err) => {
                if (err) {
                    console.log("Erro ao escrever arquivo")
                }
            })
            console.log(data)
        }
    })
}

modificarUsuario("Ronnan C. S.",  24, 175);  //Modificando os valores do usuário