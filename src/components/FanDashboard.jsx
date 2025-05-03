import React, { useEffect, useState } from "react";

export default function FanDashboard() {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação do usuário logado (pode vir de props/context futuramente)
  const user = {
    name: "Guilherme Pereira",
    avatar: "https://i.imgur.com/8Km9tLL.png",
    timeTorcida: "FURIA",
    idade: 25,
    cidade: "Rio Branco, AC",
    nivel: "Furioso",
  };

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/fan-ranking");
        const data = await res.json();
        setRanking(data);
      } catch (err) {
        console.error("Erro ao buscar ranking:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, []);

  const userPontuacao = ranking.find((f) => f.name === user.name)?.score || 0;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Perfil do Fã */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-80 text-center">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-yellow-400"
        />
        <h2 className="text-xl font-bold text-yellow-400">{user.name}</h2>
        <p className="text-gray-400">Torcedor da {user.timeTorcida}</p>
        <p className="text-sm text-gray-500">{user.cidade} • {user.idade} anos</p>
        <div className="mt-4 bg-yellow-400 text-black px-3 py-1 rounded-full inline-block font-semibold">
          Nível: {user.nivel}
        </div>
        <p className="mt-2 text-sm text-gray-300">Pontuação: {userPontuacao}</p>
      </div>

      {/* Ranking da Torcida */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Ranking da Torcida</h3>
        {loading ? (
          <p className="text-gray-400 text-center">Carregando ranking...</p>
        ) : (
          <ul className="space-y-3">
            {ranking.map((f, index) => (
              <li
                key={f.id}
                className={`flex justify-between px-4 py-2 rounded ${
                  f.name === user.name ? "bg-yellow-400 text-black font-bold" : "bg-gray-800"
                }`}
              >
                <span>
                  {index + 1}. {f.name}
                </span>
                <span>{f.score} pts</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
