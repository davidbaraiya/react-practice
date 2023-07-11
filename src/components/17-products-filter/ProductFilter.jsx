import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Col, Container, Row } from "react-bootstrap";
import { Box, List, ListItem, Slider } from "@mui/material";

const BASE_URL = "https://dummyjson.com/products";

const ProductFilter = () => {
  const { data, loading, error } = useFetch(BASE_URL);
  const [filterCate, setFilterCate] = useState(data.products || []);
  const [filterCategory, setFilterCategory] = useState("all");

  // console.log(data.products);
  const minValue = Math.min(
    ...(data.products?.map((item) => item.price) ?? [])
  );
  const maxValue = Math.max(
    ...(data.products?.map((item) => item.price) ?? [])
  );
  const [rangevalue, setRangeValue] = useState([minValue, maxValue]);

  useEffect(() => {
    setFilterCate(data.products);
    setRangeValue([minValue, maxValue]);
  }, [data, minValue, maxValue]);

  // get uniq categories
  const getUniqueCategories = (products) => {
    const categories = new Set();
    products.forEach((item) => {
      categories.add(item.category);
    });
    return ["all", ...categories];
  };
  const uniqueCategories = getUniqueCategories(data.products || []);

  // handle Filter Categories
  const handleFilterCat = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setFilterCategory(value);
      const filter = data.products.filter((item) => item.category === value);
      filterProByPriceRange(rangevalue);
      setFilterCate(filter);
    }
    if (value === "all" || !checked) {
      setFilterCategory("all");
      filterProByPriceRange(rangevalue);
      setFilterCate(data.products);
    }
  };

  const filterProByPriceRange = (newValue) => {
    const [min, max] = newValue;

    const priceFilter = data.products.filter(
      ({ price }) => price >= min && price <= max
    );

    const categoryFilter = priceFilter.filter(
      ({ category }) => category === filterCategory || filterCategory === "all"
    );
    setFilterCate(categoryFilter);
  };

  // price range
  const handlePriceRange = (event, newValue) => {
    setRangeValue(newValue);
    filterProByPriceRange(newValue);
  };

  if (loading || uniqueCategories.length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      <Container>
        <Row>
          <Col sm={4}>
            <Box>
              <div>
                <h6 className="mb-3">category</h6>
                {uniqueCategories?.map((category, i) => (
                  <div key={i}>
                    <label htmlFor={category} className="me-2">
                      {category}
                    </label>
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      id={category}
                      onChange={handleFilterCat}
                    />
                  </div>
                ))}
              </div>
            </Box>
            <Box sx={{ width: 300 }}>
              <Slider
                // getAriaLabel={() => "Temperature range"}
                value={rangevalue}
                min={minValue}
                max={maxValue}
                onChange={handlePriceRange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </Box>
          </Col>
          <Col sm={8}>
            <List>
              {filterCate?.map((item, i) => (
                <ListItem key={i}>
                  {item.title}
                  <span className="bg-info ms-2">{item.category}</span>
                  <span className="bg-success ms-2">{item.price}</span>
                </ListItem>
              ))}
            </List>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductFilter;
