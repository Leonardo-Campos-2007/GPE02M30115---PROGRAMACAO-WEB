const express = require('express'); //instancia do express

const router = express.Router(); //modulariza as rotas

const db = require('../db'); //conecta com o banco de dados

router.post('/cadastrar', (req, res) => {
    const { nome, email } = req.body;
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], 
        (err, result) => {
            if (err) {
                return res.status(500).send(err);

            }
            res.status(201).json({ id: result.insertId, nome, email });
        });
});

router.get('/listar', (req, res) =>{
    db.query('select * from users', (err, results) =>{
        if(err)  return res.status(500).send(err);
        res.json(results);
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db.query('delete from users where id = ?', [id],
        (err)=> {
            if(err) return res.status(500).send(err);
            res.sendStatus(204);
    
        });

});

//criar as rotas
//cadastrar usuário
//editar usuário
//listar todos os usuários
//excluir o usuário

module.exports = router;
