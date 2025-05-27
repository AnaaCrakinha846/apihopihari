const mysqll = require("../mysql");

exports.cadastrarusuario = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
      
            `INSERT INTO users (
         first_name,
         last_name, 
         email, 
         password,
         birth_date,
         phone, 

             ) VALUES (?, ?, ?, ?, ?, ?);`,
            [
                req.body.name,
                req.body.email,
                hash
            ]
        ;
        const usuario = number(req.params.id);

        const resultado = await mysql.execute(
            
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

    } const match = await bcrypt.compare(usuario[0].password, req.body.password);
    console.log(match);
    ;
}

exports.login = async () => {
    try {
        const usuario = await mysql.execute(
            `SELECT * FROM users WHERE email = ? and password = ?;`,
            [req.body.email]
        );
        if (usuario.length == 0) {
            return res.status(401).send({
                "mensagem": "usuario não cadastrado!"
            });
        }

        const match = await bcrypt.compare(usuario[0].password, req.body.password)
        if (!match) {
            return res.status(401).send({
                "mensagem": "senha incorreta!"
            });
        }
        console.log(match, req.body.password, usuario[0].password);

        const token = jwt.sign(
            { id: usuario[0].id, email: usuario[0].email },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );


        return res.status(201).send({
            "mensagem": "Usuario logado com sucesso!",
            "resultado": resultado
        });
    }
    catch (error) {
        return res.status(500).send({ "Error": error });
    }
}






