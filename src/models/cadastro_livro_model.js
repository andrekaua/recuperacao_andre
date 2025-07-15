var database = require("../database/config");

function cadastra_livro(nome, autor, preco_compra, preco_venda, estoque, ano, fkgenero) {
    var instrucaoSql = `
        INSERT INTO livros (nome, autor, preco_compra, preco_venda, estoque, ano, fkgenero) VALUES (
        '${nome}',
        '${autor}',
        '${preco_compra}',
        '${preco_venda}',
        '${estoque}',
        '${ano}',
        ${fkgenero}
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { cadastra_livro }