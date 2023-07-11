import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CartPage = ({ cart }) => {
  const [cartList, setCartList] = useState(cart);

  const deletItem = (id) => {
    const filterArr = cartList.filter((e) => e.id !== id);
    setCartList(filterArr);
  };

  const subTotal = cartList.reduce((acc, item) => (acc += item.price), 0);
  const TaxPer = 10;
  return (
    <>
      <section className="pt">
        <Container>
          <Stack direction={"row"} gap={3} flexWrap={"Wrap"}>
            {cartList?.map(({ title, price, id }) => {
              return (
                <Card sx={{ maxWidth: 180 }} key={id}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2">{price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => deletItem(id)}>
                      delet
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Stack>
        </Container>
      </section>

      <TableContainer sx={{ marginTop: "60px" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{subTotal.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{TaxPer + "%"}</TableCell>
              <TableCell align="right">
                {((subTotal * TaxPer) / 100).toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {(subTotal + (subTotal * TaxPer) / 100).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartPage;
