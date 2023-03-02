import React, { useState } from "react";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";




const Colors = () => {

  const getColor = localStorage.getItem('color' )

  const [curColor, setCurColor] = useState(getColor);

  const colorHander = (e) => {
    setCurColor(e.target.value);
    localStorage.setItem('color', e.target.value)

  };


  const colors = [
    {
      id: 1,
      color: "bb4c4c",
      label: "red",
    },
    {
      id: 2,
      color: "af60af",
      label: "purple",
    },
    {
      id: 1,
      color: "ff98d6",
      label: "pink",
    },
  ];

  return (
    <div className="container">
      <Box className="box" style={{ background: curColor }}></Box>
      <div className="color-box mt-5">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            pick Color
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={curColor}
            onChange={colorHander}
          >
            {colors.map(({ id, color, label }) => (
              <FormControlLabel
                value={"#"+color}
                control={<Radio />}
                label={label}
                key={id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Colors;

const Box = styled.div`
  width: 150px;
  height: 150px;
`;
