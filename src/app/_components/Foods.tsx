"use client";

import React from "react";
import { foodsData } from "../_data/foodsData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Foods = () => {
  return (
    <section className="p-md foods__slider">
      <Swiper
        slidesPerView={1.4}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        className="w-full"
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {foodsData.map((food) => (
          <SwiperSlide key={food.id}>
            {({ isActive }) => <FoodCard foodData={food} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Foods;

type FoodCardProps = {
  foodData: {
    label: string;
    description: string;
    price: string;
    img: string;
  };
  isActive: boolean;
};

const FoodCard = ({
  foodData: { label, img, price, description },
  isActive,
}: FoodCardProps) => {
  return (
    <div
      className={`min-w-[250px] p-md bg-gradient-to-br from-[#3A3A3A] to-[#4A4A4A] rounded-2xl border border-[#7A7A7A] flex flex-col items-center gap-y-xs transition-all duration-200 ${
        isActive ? "scale-100 blur-0" : "scale-[0.80] blur-[2px]"
      }`}
    >
      <Image
        src={img}
        alt=""
        width={220}
        height={220}
        className="object-cover w-full"
      />

      <h3 className="font-bold text-xl lg:text-2xl">{label}</h3>
      <p className="text-xs lg:text-sm">{description}</p>

      <span className="w-full flex items-center justify-center bg-primary text-background text-2xl font-bold py-1 rounded-lg mt-2">
        {price}
      </span>
    </div>
  );
};
