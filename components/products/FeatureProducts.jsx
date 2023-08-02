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
  Rating,
  Button,
} from "@mui/material";
import "./ProductCat.Module.css";
import axios from "axios";
import Link from "next/link";
export const getFeaturedProduct = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/all-products`);
  return data;
};
const FeatureProducts = async () => {
  const featureProducts = await getFeaturedProduct();
  console.log(featureProducts.products);
  const cardHeight = 450;
  return (
    <div>
      <Box
        style={{
          marginBottom: "4rem",
          padding: "4rem",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Our Featured Products
        </Typography>
        <Grid container spacing={3} mt={4}>
          {featureProducts?.products?.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Link href={`/product/${product._id}`}>
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
                        height: "250px",
                        width: "300px",
                        objectFit: "contain",
                      }}
                      src={
                        product?.images[0]?.url || "/images/default_product.png"
                      }
                      alt={product.name}
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
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          marginBottom: "0.5rem",
                        }}
                      >
                        Price: ${product.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          marginBottom: "0.5rem",
                        }}
                      >
                        Stock: {product.stock}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          marginBottom: "0.5rem",
                        }}
                      >
                        Rating:{" "}
                        <Rating
                          value={product?.ratings}
                          precision={0.5}
                          readOnly
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Link href={`/all-products`}>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="contained" color="inherit">
              See All Products
            </Button>
          </div>
        </Link>
      </Box>
    </div>
  );
};

export default FeatureProducts;
