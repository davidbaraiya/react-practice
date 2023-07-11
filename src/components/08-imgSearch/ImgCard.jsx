import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function ImgCard({ images }) {
  const { largeImageURL, likes, views } = images;

  return (
    <Card sx={{ maxWidth: 150, width: "100%" }}>
      <CardMedia
        sx={{ height: 60 }}
        image={largeImageURL}
        title="green iguana"
      />
      <CardActions sx={{ flexDirection: "column" }}>
        <Button size="small" p={0}>
          {`Likes (${likes})`}
        </Button>
        <Button size="small" p={0}>
          {`views (${views})`}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgCard;
