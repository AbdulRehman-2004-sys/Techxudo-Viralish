import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Section3 = () => {
  return (
    <section className="w-full px-4 py-16 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          {/* Headline */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-6xl uppercase flex flex-wrap gap-2">
              We have
              <span className="text-red-600">virality</span>
              down to a science...
            </h3>
          </div>

          {/* Subheading */}
          <div className="text-left">
            <h2 className="text-xl md:text-3xl font-medium">
              Check out some of our results...
            </h2>
          </div>

          {/* Carousel */}
          <div className="w-full mt-10">
            <CarouselCounter />
          </div>
        </div>
      </div>
    </section>
  );
};

const counterData = [
  {
    image: "/images/uploads/2024/09/LIT-Final-low.gif",
    views: "81",
    suffix: "M+",
  },
  {
    image: "/images/uploads/2024/09/Snapinsta.app_video_E6486A1750BE76AE648C9DA0869AB781_video_dashinit-low.gif",
    views: "102",
    suffix: "M+",
  },
  {
    image: "/images/uploads/2024/09/Snapinsta.app_video_4C4C3646368EE82C8E8E8F9F2348DF93_video_dashinit-low.gif",
    views: "18.7",
    suffix: "M+",
  },
  {
    image: "/images/uploads/2024/09/60s-AI-voice-Starburst-Drink-low.gif",
    views: "48",
    suffix: "M+",
  },
  {
    image: "/images/uploads/2024/09/30-second-car-shower-low.gif",
    views: "89",
    suffix: "M+",
  },
];

const CarouselCounter = () => {
  return (
    <div className="w-full bg-black py-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {counterData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full rounded-lg overflow-hidden group">
              <img
                src={item.image}
                alt={`Slide ${index}`}
                className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 rounded-xl p-4 w-[90%] text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                  {item.views}
                  <span className="text-lg font-medium ml-1">
                    {item.suffix}
                  </span>
                </h2>
                <p className="mt-1 text-white text-xl md:text-2xl">Views</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section3;
