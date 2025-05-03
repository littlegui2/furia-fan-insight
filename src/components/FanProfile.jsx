import React from "react";

export default function FanProfile({ data }) {
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl text-yellow-400 font-bold mb-4">Perfil do Fã</h1>
        <p className="text-gray-300">Nenhum dado encontrado. Preencha o formulário primeiro!</p>
      </div>
    );
  }

  const handleEditClick = () => {
    alert("Funcionalidade de edição em breve! 🚀");
    // No futuro aqui você pode abrir um modal, navegar para uma página de edição, etc.
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-80 text-center">
        <img
          src={data.avatar || "https://i.imgur.com/8Km9tLL.png"}
          alt="Avatar do Fã"
          className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-yellow-400"
        />
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">{data.name}</h2>
        <p className="text-gray-400 mb-1">Torcedor da {data.favoriteClub}</p>
        <p className="text-sm text-gray-500 mb-4">{data.city} • {data.age} anos</p>

        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mb-2">
          Nível: {data.level || "Furioso"}
        </div>
        <p className="text-gray-300 text-sm mb-6">Pontuação: {data.points || 8720} pts</p>

        {/* Botão Editar Perfil */}
        <button
          onClick={handleEditClick}
          className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors"
        >
          Editar Perfil
        </button>
      </div>
    </div>
  );
}
