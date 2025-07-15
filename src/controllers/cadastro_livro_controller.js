var cadastroLivroModel = require("../models/cadastro_livro_model");

function cadastra_livro(req, res) {
    var ano = req.body.ano;
    var autor = req.body.autor;
    var nome = req.body.autor;
    var preco_compra = req.body.preco_compra;
    var preco_venda = req.body.preco_venda;
    var estoque = req.body.estoque;
    var ano = req.body.ano;
    var genero = req.body.fkgenero;

    console.log("Teste controller:");
    console.log("Nome:", nome);
    console.log("Autor:", autor);
    console.log("Preco Compra:", preco_compra);
    console.log("Preco Venda:", preco_venda);
    console.log("Estoque:", estoque);
    console.log("Ano:", ano);
    console.log("Genero (fkgenero):", genero);

    if (ano == undefined) {
        res.status(400).send("O ano está indefinido!");
    } else if (autor == undefined) {
        res.status(400).send("O autor está indefinido!");
    }  else if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (preco_compra == undefined) {
        res.status(403).send("O preço de compra está indefinido!");
    } else if (preco_venda == undefined) {
        res.status(403).send("O preço de venda está indefinido!");
    } else if (estoque == undefined) {
        res.status(403).send("O estoque está indefinido!");
    } else if (ano == undefined) {
        res.status(403).send("O ano está indefinido!");
    } else if (genero == undefined) {
        res.status(403).send("O genero está indefinido!");
    }
    else {
        cadastroLivroModel.cadastra_livro(nome, autor, preco_compra, preco_venda, estoque, ano, genero)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = { cadastra_livro }