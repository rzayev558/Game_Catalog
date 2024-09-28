import React from "react";
import { GameList } from "../types";
import { Table } from "../components/Table";

interface HomePageProps {
  Games: GameList;
}

const HomePage: React.FC<HomePageProps> = ({ Games }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl justify-center items-center flex font-bold text-center mb-4 sm:mb-4">
        Board Games Catalog
      </h1>
      {Games.length > 0 ? (
        <Table games={Games} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          No games found.
        </div>
      )}
    </div>
  );
};

export default HomePage;
