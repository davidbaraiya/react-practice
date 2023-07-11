import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const ToDo = () => {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);

  const handleInput = (event) => {
    event.preventDefault();
    setData([...data, inputData]);
  };

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <div className="container">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleInput}
      >
        <div className="w-100 d-flex align-items-center justify-content-center flex-column">
          <h2 className="mb-3"> </h2>
          <div className="d-flex gap-2">
            <TextField
              id="outlined-basic"
              label="Type here"
              variant="outlined"
              size="small"
              name="inputVal"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <Button size="small" variant="contained" type="submit">
              add
            </Button>
          </div>
          <List sx={style}>
            {data.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
      </Box>
    </div>
  );
};

export default ToDo;
