import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import FanForm from "./components/FanForm";
import FanAnalysis from "./components/FanAnalysis";
import FanProfile from "./components/FanProfile";
import FanDashboard from "./components/FanDashboard";

export default function App() {
  const [fanData, setFanData] = React.useState(null);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://tse3.mm.bing.net/th/id/OIP.ffln6SopmbF1dSGkAGoIWgHaEK?rs=1&pid=ImgDetMain')" }}
      ></div>

      <div className="relative z-10 p-6 flex flex-col items-center">
        <nav className="w-full flex justify-center mb-8">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-yellow-400 hover:underline">Início</Link></li>
            <li><Link to="/formulario" className="text-yellow-400 hover:underline">Formulário</Link></li>
            <li><Link to="/perfil" className="text-yellow-400 hover:underline">Perfil</Link></li>
            <li><Link to="/dashboard" className="text-yellow-400 hover:underline">Ranking</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                {!fanData ? (
                  <>
                    <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">FURIA Fan Insight</h1>
                    <p className="text-gray-300 max-w-md mx-auto mb-8">
                      Descubra seu nível de torcida e entre no ranking dos fãs mais furiosos! Preencha o formulário abaixo para começar sua jornada.
                    </p>
                    <div className="w-full max-w-md mx-auto">
                      <FanForm onSubmit={setFanData} />
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Análise do seu Perfil</h1>
                    <p className="text-gray-300 max-w-md mx-auto mb-8">
                      Veja como você se destaca entre os outros fãs da FURIA!
                    </p>
                    <div className="w-full max-w-2xl mx-auto">
                      <FanAnalysis data={fanData} />
                      <button
                        onClick={() => setFanData(null)}
                        className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
                      >
                        Refazer análise 🔁
                      </button>
                    </div>
                  </>
                )}
              </div>
            }
          />
          <Route
            path="/formulario"
            element={<FanForm onSubmit={setFanData} />}
          />
          <Route
            path="/perfil"
            element={<FanProfile data={fanData} />}
          />
          <Route
            path="/dashboard"
            element={<FanDashboard />}
          />
        </Routes>
      </div>
    </div>
  );
}
