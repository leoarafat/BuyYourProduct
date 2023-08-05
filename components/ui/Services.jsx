"use client";
import React from "react";
import Service from "./Service";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Office",
      description:
        "Discover a productive and efficient workspace with our Office collection. From ergonomic furniture to stylish decor, create an atmosphere that boosts your creativity and productivity.",
      img: "/images/office.png",
    },
    {
      id: 2,
      name: "Toys",
      description:
        "Explore a world of joy and excitement with our Toys selection. From interactive educational toys to fun outdoor playsets, our collection offers endless possibilities for kids of all ages.",
      img: "/images/toys.png",
    },
    {
      id: 3,
      name: "Beauty",
      description:
        "Enhance your natural beauty and pamper yourself with our Beauty products. From luxurious skincare to glamorous makeup essentials, we have everything you need to look and feel your best.",
      img: "/images/beauty.png",
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
