import React from "react";
import { Game } from "../types";

interface GameItemProps {
  game: Game;
}

const GameItem: React.FC<GameItemProps> = ({ game }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-300 rounded-3xl p-6 transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold mb-2">{game.name}</h2>
      <p className="text-gray-700">
        <strong>Publisher:</strong> {game.publisher}
      </p>
      <p className="text-gray-700">
        <strong>Players:</strong> {game.players.min} -{" "}
        {game.players.max || "N/A"}
      </p>
      {game.releaseYear && (
        <p className="text-gray-700">
          <strong>Release Year:</strong> {game.releaseYear}
        </p>
      )}
      <p
        className={`text-gray-700 ${
          game.type === "BaseGame" ? "text-green-500" : "text-blue-500"
        }`}
      >
        <strong>Type:</strong> {game.type}
      </p>
      {game.expansions && game.expansions.length > 0 && (
        <p className="text-gray-700">
          <strong>Expansions:</strong> {game.expansions.length}
        </p>
      )}
      {game.baseGame && (
        <p className="text-gray-700">
          <strong>Base Game:</strong> {game.baseGame}
        </p>
      )}
    </div>
  );
};

export default GameItem;
