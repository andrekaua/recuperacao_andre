var database = require("../database/config");

function cadastra_livro() {
    var instrucaoSql = `
        INSERT INTO livros (nome, autor, preco_compra, preco_venda, estoque, ano, fkgenero) VALUES (
        '${nome}',
        '${autor}',
        '${preco_compra}',
        '${preco_venda}',
        '${estoque}',
        '${ano}',
        '${fkgenero}'
        );
    `
}