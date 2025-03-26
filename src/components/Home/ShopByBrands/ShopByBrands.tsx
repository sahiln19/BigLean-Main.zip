"use client";
import { SectionHeader, SliderWrapper } from "@/components";
import { Brands } from "@/utils/Schemas";
import { useRouter } from "next/navigation";
import { SwiperSlide } from "swiper/react";
import BrandCard from "./BrandCard";
import { useMediaQuery } from "react-responsive";

type Props = {
  brandsData: Brands[];
};

export default function ShopByBrands({ brandsData }: Props) {
  const router = useRouter();
  const isMobile = useMediaQuery({ minWidth: 280, maxWidth: 450 });

  return (
    <div className="w-[1200px] mx-auto mt-[60px] 
        max-[1200px]:w-full 
        flex flex-col gap-[40px] 
        md:mt-[40px] md:gap-[30px] 
        sm:mt-[30px] sm:gap-[20px] 
        sm:px-4">
      <SectionHeader
        onClick={() => router.push("/shop-by-brands")}
        label="Shop by brands"
        showBtn={true}
        btnLabel="Show all"
      />
      {isMobile ? (
        <div className="grid grid-cols-3 gap-4">
          {brandsData &&
            brandsData.map((brand) => (
              <div key={brand.id} className="flex justify-center">
                <BrandCard brandData={brand} />
              </div>
            ))}
        </div>
      ) : (
        <SliderWrapper
          slidePerView={5}
          showBtns={brandsData?.length > 5}
          breakpoints={{
            640: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
        >
          {brandsData &&
            brandsData.map((brand) => (
              <SwiperSlide
                key={brand?.id}
                className="min-h-full min-w-[200px] !mr-0 aspect-square 
                  md:min-w-[150px] 
                  sm:min-w-[120px]"
              >
                <BrandCard brandData={brand} />
              </SwiperSlide>
            ))}
        </SliderWrapper>
      )}
    </div>
  );
}