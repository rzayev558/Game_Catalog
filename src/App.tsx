import { useEffect, useState } from "react";
import { Game } from "./types";
import { fetchGames } from "./api/service";
import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  const [games, setGames] = useState<Game[]>([]);

  // Fetch games when the component mounts
  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        data.sort((a, b) => a.name.localeCompare(b.name));
        setGames(data); // Initially show all games
      } catch (error) {
        console.error("Error loading games:", error);
      }
    };

    loadGames();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HomePage Games={games} />
    </div>
  );
}

export default App;
