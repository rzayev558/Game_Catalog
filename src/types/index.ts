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
  Publisher = "publisher",
  ReleaseYear = "releaseYear",
  MaxPlayers = "maxPlayers",
  MinPlayers = "minPlayers",
  Type = "type",
}
