import React from "react";
import Section1 from "./Section1";
import "../../index.css";

const Hero = () => {
  return (
    <div className="overflow-hidden relative z-10 w-full min-h-screen text-white bg-gray-900 bg-cover bg-center bg-[url(/images/uploads/2024/09/Artboard-1-copy-3.png)]">
      <div className="relative z-10 w-full min-h-[200vh]">
        <div className="flex flex-col items-center justify-center h-[100vh] px-4 pt-32 md:pt-40 lg:pt-20">
          {/* Badge */}
          <div className="px-4 py-2 mb-8 md:mb-2 text-xs sm:text-sm text-gray-200 bg-[rgba(255,255,255,0.1)] rounded-full w-fit backdrop-blur-md bg-opacity-30 border border-white/10 shadow-md flex gap-2 items-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-3 h-3 sm:w-3 sm:h-3 bg-red-600 rounded-full flex items-center justify-center">
              <span className="animate-ping w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full"></span>
            </div>
            Viralish Is The Leader In Viral Videos
          </div>

          {/* Main Heading */}
          <h2 className="mb-6 md:mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight text-white text-center tracking-tight">
            WE KNOW HOW <br /> TO GET <br /> ATTENTION
          </h2>

          {/* Decorative Image */}
          <div className="relative w-full flex justify-center mb-8 md:mb-2">
            <img
              className="w-48 sm:w-56 md:w-64 lg:w-72 lg:translate-x-56"
              src="images/uploads/2024/09/And-a-lot-of-it.png"
              alt="And a lot of it"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col w-full max-w-4xl px-4 space-y-4 sm:px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-8 md:justify-center">
            <a
              href="#entrepreneur"
              className="w-full md:w-1/3 lg:w-1/4 p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex justify-center items-center flex-col  "
            >
              <span className="block text-base sm:text-lg font-semibold">
                Work With Us
              </span>
              <span className="block text-xs sm:text-sm mt-1 text-red-100">
                For Entrepreneurs & Creators
              </span>
            </a>
            <a
              href="#brand"
              className="w-full md:w-1/3 lg:w-1/4 p-3 bg-gray-700 hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex justify-center items-center flex-col  "
            >
              <span className="block text-base sm:text-lg font-semibold">
                Work With Us
              </span>
              <span className="block text-xs sm:text-sm mt-1 text-gray-300">
                As A Big Brand
              </span>
            </a>

            <a
              href="https://www.newleafspeakers.com/speaker/adley-kinsman/?utm_source=viralishwebsite&utm_medium=button&utm_campaign=amygray&utm_content=%20-----%20https://goviralish.com/mapply?utm_source=email&utm_medium=swipefile-email&utm_campaign=mastermind-upsell&utm_content=booktospeak"
              target="_blank"
              className="w-full md:w-1/3 lg:w-1/4 p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex justify-center items-center flex-col  "
            >
              <span className="block text-base sm:text-lg font-semibold">
                Book Adley To Speak
              </span>
              <span className="block text-xs sm:text-sm mt-1 text-red-100">
                For Events
              </span>
            </a>
          </div>
        </div>
        <Section1 />
      </div>
    </div>
  );
};

export default Hero;
