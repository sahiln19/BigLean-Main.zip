"use client";
import { SectionHeader, SliderWrapper } from "@/components";
import { Categories } from "@/utils/Schemas";
import { SwiperSlide } from "swiper/react";
import ShopCategoryCard from "./ShopCategoryCard";
import { useMediaQuery } from "react-responsive";

export default function ShopByCategory({
  categoriesData,
}: {
  categoriesData: Categories[];
}) {
  const isMobile = useMediaQuery({ minWidth: 280, maxWidth: 450 });

  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full sm:px-4">
      <SectionHeader label="Shop by category" showBtn={true} btnLabel="Show all" />
      {isMobile ? (
        <div className="category-grid">
          {categoriesData &&
            categoriesData.length > 0 &&
            Array.from(
              { length: Math.ceil(categoriesData.length / 2) },
              (_, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  <div className={`category-card ${categoriesData[i * 2]?.name.toLowerCase().includes('vitamins') ? 'vitamins' : ''}`}>
                    <div className="category-label">{categoriesData[i * 2]?.name}</div>
                    <img
                      src={categoriesData[i * 2]?.imageOn}
                      alt={categoriesData[i * 2]?.name}
                      className="max-w-[80%] mx-auto"
                    />
                  </div>
                  {categoriesData[i * 2 + 1] && (
                    <div className={`category-card ${categoriesData[i * 2 + 1]?.name.toLowerCase().includes('vitamins') ? 'vitamins' : ''}`}>
                      <div className="category-label">{categoriesData[i * 2 + 1]?.name}</div>
                      <img
                        src={categoriesData[i * 2 + 1]?.imageOn}
                        alt={categoriesData[i * 2 + 1]?.name}
                        className="max-w-[80%] mx-auto"
                      />
                    </div>
                  )}
                </div>
              )
            )}
        </div>
      ) : (
        <SliderWrapper
          slidePerView={5}
          showBtns={categoriesData?.length > 5 ? true : false}
          breakpoints={{
            640: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
        >
          {categoriesData &&
            categoriesData.length > 0 &&
            categoriesData.map((category) => (
              <SwiperSlide
                key={category?.id}
                className="min-h-full min-w-[200px] !mr-0 aspect-square 
                  md:min-w-[150px] 
                  sm:min-w-[120px]"
              >
                <ShopCategoryCard
                  key={category.id}
                  id={category?.id}
                  image={category.imageOn}
                  label={category.name}
                />
              </SwiperSlide>
            ))}
        </SliderWrapper>
      )}
    </div>
  );
}