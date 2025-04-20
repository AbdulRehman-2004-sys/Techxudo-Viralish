import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 w-full bg-black text-white">
      {/* Top Headline */}
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h3 className="text-3xl sm:text-5xl lg:text-7xl uppercase flex flex-col gap-2 sm:gap-4">
          <span className="leading-tight">We Help Entrepreneurs & Big</span>
          <span className="leading-tight">
            Brands create 
             <span className="text-red-600 inline-block animate-pulse hover:animate-none transition-colors duration-300 ml-8">Viral</span> Content
          </span>
        </h3>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold max-w-2xl">
            Work With Us To Harness the power of viral videos
          </h2>
          <a
            href="#work-with-us"
            className="w-full sm:w-auto px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base sm:text-lg font-medium whitespace-nowrap"
          >
            Work With Us
          </a>
        </div>
      </div>

      <div id="work-with-us" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {/* Entrepreneur Section */}
        <div
          id="entrepreneur"
          className="bg-cover bg-center w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen relative rounded-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.02]"
          style={{
            backgroundImage:
              "url('/images/uploads/2024/09/60s-AI-voice-Starburst-Drink-low.gif')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-opacity duration-300 group-hover:opacity-90">
            <div
              id="brand"
              className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col items-center transform transition-transform duration-300 group-hover:translate-y-0"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center">
                For Entrepreneurs
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-center px-4 text-gray-100 max-w-2xl">
                We help motivated <strong className="text-red-500">Entrepreneurs</strong> make viral
                videos. More attention = more leads.
              </p>
              <a
                href="https://www.goviralish.com/bvfp"
                className="w-full sm:w-auto px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 flex justify-center items-center transform hover:scale-105 hover:shadow-lg text-base sm:text-lg font-medium"
              >
                Become A Viralish Entrepreneur
              </a>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div
          className="bg-cover bg-center w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen relative rounded-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.02]"
          style={{
            backgroundImage:
              "url('images/uploads/2024/09/30-second-car-shower-low.gif')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-opacity duration-300 group-hover:opacity-90">
            <div
              id="brand"
              className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col items-center transform transition-transform duration-300 group-hover:translate-y-0"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center">For Big Brands</h2>

              <p className="text-base sm:text-lg lg:text-xl text-center px-4 text-gray-100 max-w-2xl">
                We integrate <strong className="text-red-500">Big Brands</strong> into cultural relevance
                at scale.
              </p>

              <Link
                to="/brand"
                className="w-full sm:w-auto px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 flex justify-center items-center transform hover:scale-105 hover:shadow-lg text-base sm:text-lg font-medium"
              >
                Work With Viralish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
