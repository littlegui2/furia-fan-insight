import React, { useState } from "react";
import FanAnalysis from "./FanAnalysis";

export default function FanForm({ onSubmit }) {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    jogadorFavorito: "",
    frequencia: "Sempre",
    humor: "",
    redeSocial: "Instagram"
  });

  const [perfil, setPerfil] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fanData = {
      name: form.nome,
      avatar: "",
      team: form.jogadorFavorito,
      age: parseInt(form.idade),
      city: "Desconhecida",
      level: form.frequencia,
      score: 0
    };

    try {
      const response = await fetch("http://localhost:3001/api/fan-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fanData),
      });

      const data = await response.json();

      if (response.ok) {
        const id = data.data.insertId;
        const resPerfil = await fetch(`http://localhost:3001/api/fan-profile/${id}`);
        const perfilData = await resPerfil.json();

        const perfilFinal = {
          ...perfilData,
          nome: form.nome,
          idade: form.idade,
          jogadorFavorito: form.jogadorFavorito,
          frequencia: form.frequencia,
          humor: form.humor,
          redeSocial: form.redeSocial,
        };

        setPerfil(perfilFinal);
        onSubmit?.(perfilFinal); // Notifica o App.jsx, se necessário

        setForm({
          nome: "",
          idade: "",
          jogadorFavorito: "",
          frequencia: "Sempre",
          humor: "",
          redeSocial: "Instagram"
        });
      } else {
        alert("Erro ao salvar perfil.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro de conexão.");
    }
  };

  return (
    <div className="space-y-6">
      {!perfil && (
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 w-full max-w-md"
        >
          <h2 className="text-xl font-bold text-yellow-400">Conheça seu perfil FURIOSO!</h2>

          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="idade"
            placeholder="Sua idade"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            value={form.idade}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="jogadorFavorito"
            placeholder="Jogador favorito"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            value={form.jogadorFavorito}
            onChange={handleChange}
          />
          <select
            name="frequencia"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            value={form.frequencia}
            onChange={handleChange}
          >
            <option>Sempre</option>
            <option>Às vezes</option>
            <option>Raramente</option>
          </select>
          <input
            type="text"
            name="humor"
            placeholder="Como você está hoje?"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            value={form.humor}
            onChange={handleChange}
          />
          <select
            name="redeSocial"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            value={form.redeSocial}
            onChange={handleChange}
          >
            <option>Instagram</option>
            <option>Twitter</option>
            <option>TikTok</option>
            <option>Discord</option>
          </select>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition"
          >
            Gerar análise 🔍
          </button>
        </form>
      )}

      {perfil && (
        <>
          <FanAnalysis data={perfil} />
          <button
            onClick={() => setPerfil(null)}
            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            Refazer análise 🔁
          </button>
        </>
      )}
    </div>
  );
}
