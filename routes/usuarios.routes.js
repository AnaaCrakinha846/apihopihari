const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post('/:id', usuariosController.atualizarusuario);
router.post('/',()=>{console.log("Rota de login")});

module.exports = router;

router.post('/login', usuariosController.login
);