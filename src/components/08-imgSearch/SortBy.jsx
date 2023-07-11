import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const SortBy = ({ handleSortList }) => {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    handleSortList();
  });

  const sortArr = ["likes", "views"];

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="sortby">sort</InputLabel>
      <Select
        labelId="sortby"
        id="demo-select-small"
        value={sort}
        label="sort"
        onChange={handleChange}
      >
        {sortArr?.map((sort, i) => {
          return (
            <MenuItem value={sort} key={i}>
              {sort}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SortBy;
