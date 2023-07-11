import { Box, Button, Container, Input, Stack } from "@mui/material";
import ImgCard from "./ImgCard";
import useFetch from "../06-add-to-cart/useFetch";
import { useEffect, useState } from "react";
import SortBy from "./SortBy";

const ImgSearch = () => {
  const [searchData, setSearchData] = useState("");
  const url = `https://pixabay.com/api/?key=37037831-9eda1c36dc7eb4bf84b75b5c9&q&q=${searchData}`;
  const { data, error, isLoading } = useFetch(url);

  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    if (data) {
      setMainData(data);
    }
  }, [data]);

  console.log(mainData);

  const handleSortList = () => {
    const filterData = mainData.hits?.sort((item, item2) => {
      return item.likes - item2.likes;
    });
    setMainData(filterData);
  };

  const handleSearch = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <Container>
      <Box
        sx={{
          py: 2,
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Input
          placeholder="Type in here…"
          variant="solid"
          value={searchData}
          onInput={handleSearch}
        />
        <Button variant="contained">search</Button>
        <SortBy handleSortList={handleSortList} />
      </Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Stack direction={"row"} flexWrap={"wrap"} gap={3}>
          {mainData.hits?.map((img) => (
            <ImgCard images={img} key={img.id} />
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default ImgSearch;
