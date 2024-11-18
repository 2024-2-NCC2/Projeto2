const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;

    try {
        // Verifica se o email já existe
        const [existingUser] = await db.query('SELECT * FROM Usuario WHERE email_usu = ?', [email]);
        if (existingUser.length) {
            return res.status(400).json({ error: 'Email já registrado' });
        }

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Insere o usuário no banco de dados
        await db.query(
            'INSERT INTO Usuario (nome_usu, dtnascimento_usu, senha_usu, email_usu) VALUES (?, ?, ?, ?)',
            [`${nome} ${sobrenome}`, null, hashedPassword, email]
        );

        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar usuário', details: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email_usu, senha_usu } = req.body;

    try {
        // Busca o usuário pelo email
        const [users] = await db.query('SELECT * FROM Usuario WHERE email_usu = ?', [email_usu]);
        if (!users.length) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const user = users[0];

        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(senha_usu, user.senha_usu);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Senha inválida' });
        }

        
        const token = jwt.sign({ id: user.ID_usuario, email: user.email_usu }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ message: 'Login realizado com sucesso!', token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login', details: error.message });
    }
};

module.exports = { registerUser, loginUser };
