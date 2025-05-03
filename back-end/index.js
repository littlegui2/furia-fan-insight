const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Rota POST para salvar perfil de fã
app.post('/api/fan-profile', (req, res) => {
  const { name, avatar, team, age, city, level, score } = req.body;

  const query = `
    INSERT INTO fan_profile (name, avatar, team, age, city, level, score)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query(query, [name, avatar, team, age, city, level, score], (err, result) => {
    if (err) {
      console.error('Erro ao salvar perfil:', err);
      return res.status(500).json({ error: 'Erro ao salvar no banco de dados' });
    }
    res.status(200).json({ message: 'Perfil salvo com sucesso!', data: result });
  });
});

// Rota GET para ranking dos fãs (somente com score > 0)
app.get('/api/fan-ranking', (req, res) => {
    const query = `
    SELECT id, name, score
    FROM fan_profile
     ORDER BY score DESC;

  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar ranking:', err);
      return res.status(500).json({ error: 'Erro ao buscar ranking no banco' });
    }
    res.status(200).json(results);
  });
});

// Rota GET para buscar um perfil específico pelo ID
app.get('/api/fan-profile/:id', (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM fan_profile WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erro ao buscar perfil:', err);
      return res.status(500).json({ error: 'Erro ao buscar perfil no banco' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Perfil não encontrado' });
    }
    res.status(200).json(result[0]);
  });
});

// Rota de teste do banco
app.get('/api/test-db', (req, res) => {
  connection.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
      console.error('Erro na consulta de teste:', err);
      return res.status(500).json({ message: 'Erro no banco de dados' });
    }
    res.json({ message: 'Banco de dados conectado com sucesso!', resultado: results[0].resultado });
  });
});

// Iniciar o servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
