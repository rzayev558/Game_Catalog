import React, { useState } from "react";
import GameItems from "../components/GameItems";
import { GameList, SortOption } from "../types";
import { SelectChangeEvent } from "@mui/material";
import { Sorting } from "../components/Sorting";

interface HomePageProps {
  filteredGames: GameList;
}

const HomePage: React.FC<HomePageProps> = ({ filteredGames }) => {
  const [sortBy, setSortBy] = useState<SortOption>(SortOption.Name);

  const handleSort = (event: SelectChangeEvent<SortOption>) => {
    //not sure why typescript complains without typecasting
    setSortBy(event.target.value as SortOption);
  };

  const sortedGames = filteredGames.sort((a, b) => {
    switch (sortBy) {
      case SortOption.Name:
        return a.name.localeCompare(b.name);

      case SortOption.Year:
        if (!a.releaseYear) return 1;
        if (!b.releaseYear) return -1;
        return a.releaseYear - b.releaseYear;

      case SortOption.MaxPlayers:
        return (a.players?.max ?? 0) - (b.players?.max ?? 0);

      case SortOption.MinPlayers:
        return (a.players?.min ?? 0) - (b.players?.min ?? 0);

      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl items-center flex font-bold text-center mb-4 sm:mb-0">
          Board Games Catalog
        </h1>
        <Sorting handleSort={handleSort} sortBy={sortBy} />
      </div>
      {sortedGames.length > 0 ? (
        <GameItems games={sortedGames} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          No games found.
        </div>
      )}
    </div>
  );
};

export default HomePage;
