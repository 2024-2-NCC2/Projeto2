const db = require('../config/db');


const faleConoscoMessage = async (req, res) => {
  const { nome_FaleConosco, email_FaleConosco, mensagem } = req.body;

  try {
   
    const [existingMessage] = await db.query('SELECT * FROM FaleConosco WHERE email_FaleConosco = ?', [email_FaleConosco]);
    if (existingMessage.length) {
      return res.status(400).json({ error: 'Este e-mail já foi registrado em uma mensagem anterior.' });
    }

  
    await db.query(
      'INSERT INTO FaleConosco (nome_FaleConosco, email_FaleConosco, mensagem) VALUES (?, ?, ?)',
      [nome_FaleConosco, email_FaleConosco, mensagem]
    );

   
    res.status(201).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir mensagem:', error);
    res.status(500).json({ error: 'Erro ao registrar a mensagem, tente novamente mais tarde.' });
  }
};

module.exports = { faleConoscoMessage };
