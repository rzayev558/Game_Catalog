import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { SortOption, sortOptions } from "../types";
type SortingProps = {
  sortBy: SortOption;
  handleSort: (event: SelectChangeEvent<SortOption>) => void;
};

export const Sorting = ({ handleSort, sortBy }: SortingProps) => {
  return (
    <FormControl variant="outlined">
      <InputLabel id="sort-select-label">Sort by</InputLabel>
      <Select
        className="w-full sm:w-auto min-w-48"
        id="sort-select"
        value={sortBy}
        onChange={(event: SelectChangeEvent<SortOption>) => handleSort(event)}
        label="Sort by"
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
