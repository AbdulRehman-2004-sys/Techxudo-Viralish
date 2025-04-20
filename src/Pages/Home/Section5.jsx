import React from "react";

const Section5 = () => {
  return (
    <div className="w-full py-12 bg-black text-white flex flex-col items-center pb-64 border-b border-gray-100">
      <h3 className="text-3xl sm:text-4xl md:text-7xl uppercase text-center mb-10 px-4">
        See what everyone is <br /> saying about <br />
        <span className="text-red-600 decoration-red-500 ml-4">
          Viralish
        </span>
      </h3>

      <VideoSection1 />
      <VideoSection2 />

      <div className="flex flex-wrap gap-4 mt-10 sm:flex-row md:flex-row justify-center">
        <a
          href="#entrepreneur"
          className="bg-red-600 px-4 py-2 rounded-lg text-white font-semibold w-full sm:w-[40vw] md:w-[20vw] flex flex-col items-center justify-center"
        >
          <h2 className="text-center">Work With Us</h2>
          <p className="text-center">For Entrepreneurs & Creators</p>
        </a>
        <a
          href="#brand"
          className="bg-gray-700 px-4 py-2 rounded-lg text-white font-semibold w-full sm:w-[40vw] md:w-[20vw] flex flex-col items-center justify-center"
        >
          <h1 className="text-center">Work With Us</h1>
          <p className="text-center">As A Big Brands</p>
        </a>
      </div>
    </div>
  );
};

export default Section5;

const testimonials = [
  {
    videoUrl:
      "https://player.vimeo.com/video/1057958183?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=0d2798d49c#t=",
    rating: "⭐⭐⭐⭐⭐",
    reviewer: "-Brian Mark",
  },
];

const VideoSection1 = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 px-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-full sm:w-4/5 md:w-[40vw] lg:w-[20vw] flex flex-col items-center bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full aspect-video h-[40vh] lg:h-[60vh] rounded-lg"
            src={testimonial.videoUrl}
            allowFullScreen
            allow="clipboard-write"
          />
          <div className="w-full p-4 text-center border-t border-gray-800">
            <p className="text-xl font-semibold">{testimonial.reviewer}</p>
            <p className="text-yellow-400 text-lg">{testimonial.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const testimonials2 = [
  {
    videoUrl:
      "https://player.vimeo.com/video/1057958235?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=002c6b1283#t=",
    rating: "⭐⭐⭐⭐⭐",
    reviewer: "-Chrissy",
  },
  {
    videoUrl:
      "https://player.vimeo.com/video/1057963810?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=5188610414#t=",
    rating: "⭐⭐⭐⭐",
    reviewer: "-Monica Baker",
  },
];

const VideoSection2 = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 mt-12 px-4">
      {testimonials2.map((testimonial, index) => (
        <div
          key={index}
          className="w-full sm:w-4/5 md:w-[40vw] flex flex-col items-center bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full aspect-video"
            src={testimonial.videoUrl}
            allowFullScreen
            allow="clipboard-write"
          />
          <div className="w-full p-4 text-center border-t border-gray-800">
            <p className="text-xl font-semibold">{testimonial.reviewer}</p>
            <p className="text-yellow-400 text-lg">{testimonial.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
