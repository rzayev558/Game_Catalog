import axios from "axios";
import { GameList } from "../types";

export const fetchGames = async () => {
  try {
    const response = await axios.get<GameList>(
      process.env.REACT_APP_API_URL as string
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
