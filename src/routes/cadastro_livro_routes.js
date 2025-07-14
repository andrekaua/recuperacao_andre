var express = require("express");
var router = express.Router();

var cadastro_livro = require("../controllers/cadastro_livro_controller");

router.get("/cadastra_livro", function (req, res) {
    cadastro_livro_controller.cadastro_livro(req, res);
});

module.exports = router;