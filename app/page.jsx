import React from "react";
import Hero from "@/components/slider/Hero";
import ProductCategory from "@/components/products/ProductCategory";
import Slider from "@/components/ui/Slider";
import Footer from "@/components/ui/Footer";
import UserReviewSlider from "@/components/ui/UserReview";
import Sponsorship from "@/components/ui/SponserShip";
import Contact from "@/components/ui/Contact";
import FeatureProducts from "@/components/products/FeatureProducts";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Hero />
      <ProductCategory />
      <FeatureProducts />
      <Sponsorship />
      <Contact />
      {/* <UserReviewSlider /> */}
      <Footer />
    </>
  );
};

export default HomePage;
