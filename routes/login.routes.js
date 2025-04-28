const express = require ("express");

const router = express.Router();

router.post("/login", ()=>{console.log("Rota de login")});
router.post("/cadastro", ()=>{console.log("Rota de login")});
router.put("/atualizar-usuario", ()=>{console.log("Rota de login")});

module.exports = router;



