import React from "react";
import { Game } from "../types";
import GameItem from "./GameItem";

interface GameItemsProps {
  games: Game[];
}

const GameItems: React.FC<GameItemsProps> = ({ games }) => {
  return (
    <div>
      {games.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameItem key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          No games found.
        </div>
      )}
    </div>
  );
};

export default GameItems;
