import { ShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const ProCard = ({ product, addToCart }) => {
  const { description, image, price, title, id } = product;
  return (
    <Card sx={{ maxWidth: 190 }}>
      {/* <CardMedia component="img" height="194" image={image} alt="Paella dish" /> */}
      <CardContent>
        <Typography variant="h6" my={2}>
          {title.slice(0, 10)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0, 50)}
        </Typography>
        <Typography variant="h6">{price}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          endIcon={<ShoppingCart />}
          onClick={() => addToCart(product)}
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProCard;
