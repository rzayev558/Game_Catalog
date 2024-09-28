import { CompactTable } from "@table-library/react-table-library/compact";

import { Game, GameList } from "../types";
import { useSort } from "@table-library/react-table-library/sort";
import { SortOption } from "../types";
import { useState } from "react";
import { Search } from "@mui/icons-material";
import { useTableTheme } from "../helpers/tableTheme";
import { COLUMN_CONFIG, ColumnConfig } from "../helpers/tableConfig";
interface TableProps {
  games: GameList;
}

export const Table = ({ games }: TableProps) => {
  let data = { nodes: games };
  const [search, setSearch] = useState<string>("");
  const theme = useTableTheme();

  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const columns = COLUMN_CONFIG.map((config: ColumnConfig<Game>) => ({
    label: config.label,
    renderCell: (item: Game) => config.getValue(item),
    sort: { sortKey: config.sortKey },
    resize: config.resizable ?? false,
  }));

  const sort = useSort(
    data,
    {
      onChange: () => {},
    },
    {
      sortFns: {
        [SortOption.Name]: (array) =>
          array.sort((a, b) => a.name.localeCompare(b.name)),
        [SortOption.ReleaseYear]: (array) =>
          //if no release year, sort to the end
          array.sort((a, b) => {
            const yearA = a.releaseYear ?? Infinity;
            const yearB = b.releaseYear ?? Infinity;
            return yearA - yearB;
          }),
        [SortOption.Publisher]: (array) =>
          array.sort((a, b) => {
            const publisherA = a.publisher || "";
            const publisherB = b.publisher || "";
            return publisherA.localeCompare(publisherB);
          }),
        [SortOption.MinPlayers]: (array) =>
          array.sort((a, b) => a.players.min - b.players.min),
        [SortOption.MaxPlayers]: (array) =>
          array.sort((a, b) => a.players.max - b.players.max),
        [SortOption.Type]: (array) =>
          array.sort((a, b) => a.type.localeCompare(b.type)),
      },
    }
  );

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={handleSearch}
          className="w-64 px-4 py-2 pl-10 border-b border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-300"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <br />
      <CompactTable data={data} columns={columns} theme={theme} sort={sort} />
    </>
  );
};
