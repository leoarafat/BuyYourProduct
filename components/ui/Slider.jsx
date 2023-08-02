"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const slidesData = [
    {
      imageSrc:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Electronics",
      description:
        "This image showcases a collection of electronic devices, including smartphones, laptops, and gadgets. The vibrant colors and modern design represent the cutting-edge technology of today's world.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/6899543/pexels-photo-6899543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Office",
      description:
        "In this image, we see a well-organized and contemporary office space with a stylish interior. The setup exudes professionalism and productivity, making it an ideal workspace for business professionals.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3755445/pexels-photo-3755445.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Men Jersey",
      description:
        " This image features a sporty men's jersey, perfect for active individuals who enjoy sports and outdoor activities. The jersey's sleek design and breathable fabric make it comfortable for both casual wear and athletic performance.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Beauty",
      description:
        "This captivating image showcases the world of beauty and cosmetics. It includes an assortment of makeup products, fragrances, and skincare items, emphasizing self-care and personal grooming.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Electronics",
      description:
        "This intriguing image captures a mesmerizing landscape with a picturesque view. The serene environment and natural beauty evoke a sense of tranquility and wonder.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/748598/pexels-photo-748598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Electronics",
      description:
        "Another glimpse of the world of electronics, this image focuses on high-tech gadgets and devices, reflecting the constant innovation in the tech industry.",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={slide.imageSrc} alt={slide.title} />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
                <div className="p-4 text-white font-bold">
                  <h3 className="text-2xl font-bold mt-72">{slide.title}</h3>
                  <p className="text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
