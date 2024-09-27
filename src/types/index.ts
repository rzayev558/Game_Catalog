type Players = {
  min: number;
  max?: number;
};

export type Game = {
  id: string;
  name: string;
  releaseYear?: number;
  players: Players;
  publisher: string;
  expansions?: string[];
  baseGame?: string;
  standalone?: boolean;
  type: GameType;
};

export enum GameType {
  BaseGame = "BaseGame",
  Expansion = "Expansion",
}

export type GameList = Game[];

export enum SortOption {
  Name = "name",
  Year = "year",
  MaxPlayers = "maxPlayers",
  MinPlayers = "minPlayers",
}

export type SortOptionType = {
  value: string;
  label: string;
};

export const sortOptions: SortOptionType[] = [
  { value: "name", label: "Sort by Name" },
  { value: "year", label: "Sort by Year" },
  { value: "maxPlayers", label: "Sort by Max Players" },
  { value: "minPlayers", label: "Sort by Min Players" },
];
