import {
  AppBar,
  Badge,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import ProCard from "./ProCard";
import useFetch from "./useFetch";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import CartPage from "./CartPage";

const url = "https://fakestoreapi.com/products";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const AddToCart = () => {
  const { data, error, isLoading } = useFetch(url);
  const [cart, setCart] = useState([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("already in cart");
    } else {
      const cartData = [...cart, product];
      setCart(cartData);
    }
  };

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Container>
          <CustomToolbar>
            <Typography variant={"h4"}>
              <RouterLink to={"/"}>find</RouterLink>
            </Typography>
            <Box justifySelf="flex-end" color={"#fff"}>
              <RouterLink to={"/CartPage"} element={<CartPage cart={cart} />}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon color="#fff" />
                </Badge>
              </RouterLink>
            </Box>
          </CustomToolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route
          path="/"
          element={
            <section className="pt">
              <Container>
                <Stack direction="row" gap={3} flexWrap="wrap">
                  {data.map((product) => (
                    <ProCard
                      key={product.id}
                      product={product}
                      addToCart={addToCart}
                    />
                  ))}
                </Stack>
              </Container>
            </section>
          }
        />
        <Route path="CartPage" element={<CartPage cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AddToCart;
