import React from "react";
import Hero from "@/components/slider/Hero";
import ProductCategory from "@/components/products/ProductCategory";
import Slider from "@/components/ui/Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Hero />
      <ProductCategory />
    </>
  );
};

export default HomePage;
