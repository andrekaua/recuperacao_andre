var express = require("express");
var router = express.Router();

var cadastroLivroController = require("../controllers/cadastro_livro_controller");

router.post("/cadastrar", function (req, res) {
    cadastroLivroController.cadastra_livro(req, res);
});

module.exports = router;