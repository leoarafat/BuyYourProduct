"use client";
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden md:flex">
      <figure className="px-10 pt-10 md:w-1/2">
        <img
          src={img}
          alt={name}
          className="rounded-xl w-40 h-40 mx-auto md:w-full md:h-auto"
        />
      </figure>
      <div className="card-body items-center text-center py-6 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Service;
