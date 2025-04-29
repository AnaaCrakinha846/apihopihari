const mysqll = require("../mysql");

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
                req.body.name,
                req.body.email,
                req.body.password,
                idusuario]
        )
        return res.status(201).send({
            "Messagem": "Usuario atualizado com sucesso",
        });
    } catch (error) {
        res.status(500).send({ "Messagem": "Erro ao atualizar o usuario" });

    }
}




