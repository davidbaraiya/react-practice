import { Add, Remove } from "@mui/icons-material";
import { Box, Button, ButtonGroup } from "@mui/material";
import React, { useReducer } from "react";
import reducer from "./reducer";

const initialstate = {
  count: 0,
};

const Counter = () => {
  const [num, dispatch] = useReducer(reducer, initialstate);

  return (
    <Box>
      <ButtonGroup size="large">
        <Button key="one" onClick={() => dispatch({ type: "INCR" })}>
          <Add />
        </Button>
        <Button key="two">{num.count}</Button>
        <Button key="three" onClick={() => dispatch({ type: "DECR" })}>
          <Remove />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Counter;
