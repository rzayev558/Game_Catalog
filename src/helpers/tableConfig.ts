import { Game, SortOption } from "../types";

export type ColumnConfig<T> = {
  label: string;
  getValue: (item: T) => any;
  sortKey: SortOption;
  resizable?: boolean;
};

export const COLUMN_CONFIG: ColumnConfig<Game>[] = [
  {
    label: "Name",
    getValue: (item: Game) => item.name,
    sortKey: SortOption.Name,
    resizable: true,
  },
  {
    label: "Publisher",
    getValue: (item: Game) => item.publisher,
    sortKey: SortOption.Publisher,
    resizable: true,
  },
  {
    label: "Release Year",
    getValue: (item: Game) =>
      item.releaseYear ? item.releaseYear : "No release year",
    sortKey: SortOption.ReleaseYear,
    resizable: true,
  },
  {
    label: "Min Players",
    getValue: (item: Game) => item.players.min,
    sortKey: SortOption.MinPlayers,
  },
  {
    label: "Max Players",
    getValue: (item: Game) => item.players.max,
    sortKey: SortOption.MaxPlayers,
  },
  {
    label: "Type",
    getValue: (item: Game) => item.type,
    sortKey: SortOption.Type,
  },
];
