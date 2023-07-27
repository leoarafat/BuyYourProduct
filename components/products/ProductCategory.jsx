"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import "./ProductCat.Module.css";
import axios from "axios";
import Link from "next/link";

export const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  return data;
};

const ProductCategory = async () => {
  const productCategories = await getProducts();
  // const cardWidth = 450;
  const cardHeight = 500;
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Our Product Categories
      </Typography>
      <Grid container spacing={3} mt={4}>
        {productCategories?.products?.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
            <Link href={`/all-products`}>
              <Card
                className="Card-root"
                style={{
                  // maxWidth: cardWidth,
                  width: "100%",
                  height: cardHeight,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    className="Card-media"
                    component="img"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={
                      category?.images[0]?.url || "/images/default_product.png"
                    }
                    alt={category.name}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      style={{
                        marginBottom: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      {category.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategory;
