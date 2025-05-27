const mysql = require('../mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.atualizarusuario = async (req, res) => {
    try {
        const idusuario = number(req.params.id);

        const resultado = await mysqll.execute(
            `UPDATE users
	            SET name = ?,
                    email = ?,
	                password = ?
              WHERE	id = ?;`,
            [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                senhaCriptografada,
                req.body.birth_date,
                req.body.phone,
                idUsuarios
            ]

        );
        return res.status(201).send({ "mensagem": "Usuario atualizado com sucesso!" });

    } catch (error) {
        res.status(500).send({ "Messagem": "Erro ao atualizar o usuario" });

    }
}




