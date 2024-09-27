import { useEffect, useState } from "react";
import { Game, GameType } from "./types";
import { fetchGames } from "./api/service";
import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [showingBaseGames, setShowingBaseGames] = useState(false);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  const handleSearch = (searchTerm: string) => {
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  // not a big fan of doing this here but it's a small app
  // but we would ideally have this state as a global state in the store
  const handleFilterBaseGames = () => {
    if (showingBaseGames) {
      setFilteredGames(games);
      setShowingBaseGames(false);
    } else {
      const baseGames = games.filter((game) => game.type === GameType.BaseGame);
      setFilteredGames(baseGames);
      setShowingBaseGames(true);
    }
  };

  // Fetch games when the component mounts
  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        data.sort((a, b) => a.name.localeCompare(b.name));
        setGames(data);
        setFilteredGames(data); // Initially show all games
      } catch (error) {
        console.error("Error loading games:", error);
      }
    };

    loadGames();
  }, []);

  return (
    <div className="App">
      <Navbar
        onSearch={handleSearch}
        onFilterBaseGames={handleFilterBaseGames}
      />
      <HomePage filteredGames={filteredGames} />
    </div>
  );
}

export default App;
