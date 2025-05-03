import React from "react";

export default function FanAnalysis({ data }) {
  if (!data) return null;

  const saudacao = data.idade < 18 ? "Furiosinho" : "FURIOSO";
  const frequenciaMsg = {
    "Sempre": "Você é daqueles que vive a FURIA 24/7 🔥",
    "Às vezes": "Acompanha quando dá, mas sempre na torcida 💛",
    "Raramente": "Vamos te trazer mais pra perto da matilha 🐺"
  };

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-yellow-400">Análise do Fã</h2>
      <p>Salve, {saudacao} <strong>{data.nome}</strong> 👊</p>
      <p>Seu jogador favorito é <strong>{data.jogadorFavorito || "não informado"}</strong>.</p>
      <p>Você acompanha os jogos com frequência: <em>{data.frequencia}</em>.</p>
      <p>{frequenciaMsg[data.frequencia]}</p>
      <p>Hoje você está se sentindo: <strong>{data.humor || "neutro(a)"}</strong>.</p>
      <p>Sua rede social favorita é o <strong>{data.redeSocial}</strong>.</p>
      <p className="text-sm text-gray-400">Curtiu? Compartilha esse perfil com a galera!</p>
    </div>
  );
}
