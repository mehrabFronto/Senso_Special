"use client";

import React, { useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { foodsData } from "../_data/foodsData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import Menu from "./Menu";

const Foods = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  // تغییر اسلایدر با کلیک روی دسته‌بندی
  const handleCategoryClick = (category: string) => {
    if (swiperRef.current) {
      const targetIndex = foodsData.findIndex(
        (food) => food.category === category
      );
      if (targetIndex !== -1) {
        swiperRef.current.slideToLoop(targetIndex); // رفتن به اسلاید مناسب
      }

      // به‌روزرسانی searchParams
      const params = new URLSearchParams(searchParams);
      params.set("category", category);
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  };

  // تغییر searchParams هنگام تغییر اسلاید
  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.realIndex;
      const activeCategory = foodsData[activeIndex]?.category;

      if (activeCategory) {
        const params = new URLSearchParams(searchParams);
        params.set("category", activeCategory);
        router.replace(`?${params.toString()}`, { scroll: false });
      }
    }
  };

  return (
    <>
      <Menu onCategoryClick={handleCategoryClick} />

      <section className="p-md space-y-xl" dir="ltr">
        {/* ارسال تابع برای کلیک */}
        <Swiper
          slidesPerView={1.4}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange} // رویداد تغییر اسلاید
          className="w-full"
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {foodsData.map((food) => (
            <SwiperSlide key={food.id}>
              {({ isActive }) => (
                <FoodCard foodData={food} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
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
      dir="rtl"
      className={`min-w-[250px] p-md bg-secondary rounded-2xl border border-dark-gray flex flex-col items-center gap-y-xs transition-all duration-200 ${
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
