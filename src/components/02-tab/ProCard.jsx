import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {BsCartPlus} from 'react-icons/bs'

const ProCard = ({data}) => {

  const { name, category, discription} = data;



  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{maxWidth : '300px'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
         {category}
        </Typography>
        <Typography variant="h5" component="div">
        {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {discription}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" endIcon={<BsCartPlus />} className="m-2">add to cart</Button>
    </Card>
  );
};

export default ProCard;
