import React from "react";

const Section1 = () => {
  const cards = [
    {
      href: "#elementor-action:action=popup:open&settings=eyJpZCI6IjI1NzIiLCJ0b2dnbGUiOmZhbHNlfQ==",
      imgSrc: "https://viralish.com/wp-content/uploads/2024/09/LIT-Final-low.gif",
      hiddenOn: "tablet-mobile",
    },
    {
      href: "#elementor-action:action=popup:open&settings=eyJpZCI6IjI1NzMiLCJ0b2dnbGUiOmZhbHNlfQ==",
      imgSrc: "https://viralish.com/wp-content/uploads/2024/09/Snapinsta.app_video_E6486A1750BE76AE648C9DA0869AB781_video_dashinit-low.gif",
      // overlayImg: "https://viralish.com/wp-content/uploads/2024/09/Click-To-View.png",
    },
    {
      href: "#elementor-action:action=popup:open&settings=eyJpZCI6IjI1NTAiLCJ0b2dnbGUiOmZhbHNlfQ==",
      imgSrc: "https://viralish.com/wp-content/uploads/2024/09/30-second-car-shower-low.gif",
    },
    {
      href: "#elementor-action:action=popup:open&settings=eyJpZCI6IjI1NzAiLCJ0b2dnbGUiOmZhbHNlfQ==",
      imgSrc: "https://viralish.com/wp-content/uploads/2024/09/60s-AI-voice-Starburst-Drink-low.gif",
    },
    {
      href: "#elementor-action:action=popup:open&settings=eyJpZCI6IjI1NzEiLCJ0b2dnbGUiOmZhbHNlfQ==",
      imgSrc: "https://viralish.com/wp-content/uploads/2024/09/Snapinsta.app_video_4C4C3646368EE82C8E8E8F9F2348DF93_video_dashinit-low.gif",
      hiddenOn: "tablet-mobile",
    },
  ];

  const carouselImages = [
    "https://viralish.com/wp-content/uploads/2024/08/6570b1794f02eb91c2fa8a75-300x167.png",
    "https://viralish.com/wp-content/uploads/2024/08/656f6f93f7f645371ca1ff70-300x167.png",
    "https://viralish.com/wp-content/uploads/2024/08/6570b179ca696ac112012596-300x167.png",
    "https://viralish.com/wp-content/uploads/2024/08/6570b179e78edb621d5a3612-300x167.png",
    "https://viralish.com/wp-content/uploads/2024/08/6570b2b94f02ebb8e1fa8aeb-300x167.png",
    "https://viralish.com/wp-content/uploads/2024/08/Business-Insider-300x93.png",
    "https://viralish.com/wp-content/uploads/2024/08/CBS-logo-300x91.png",
    "https://viralish.com/wp-content/uploads/2024/08/entrepreneur-logo-300x59.png",
    "https://viralish.com/wp-content/uploads/2024/08/Yahoo-Finance.png",
  ];

  return (
    <div className="relative z-50 w-full px-4 md:px-8 mt-36">

      <div className="absolute z-50 w-full h-full bg-gradient-to-t from-gray-800 to-transparent opacity-50"></div>
      {/* GIF Cards Section */}
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, i) => (
          <a
            href={card.href}
            key={i}
            className={`relative w-full sm:w-[48%] md:w-[30%] lg:w-[18%] ${
              card.hiddenOn === "tablet-mobile"
                ? "hidden md:block"
                : i === 1
                ? "-translate-y-6 sm:-translate-y-10"
                : i === 2
                ? "-translate-y-10 sm:-translate-y-20"
                : i === 3
                ? "-translate-y-6 sm:-translate-y-10"
                : ""
            }`}
          >
            {card.overlayImg && (
              <img
                src={card.overlayImg}
                alt="Overlay"
                className="absolute top-2 left-2 w-16 h-auto z-10"
              />
            )}
            <img
              src={card.imgSrc}
              alt={`GIF ${i + 1}`}
              className="w-full h-auto rounded-xl object-cover"
            />
          </a>
        ))}
      </div>

      {/* Carousel */}
      <div className="mt-10 w-full overflow-hidden">
        <div className="flex items-center gap-10 animate-scroll whitespace-nowrap">
          {carouselImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`carousel-img-${index}`}
              className={`h-12 md:h-20 w-auto object-contain ${
                index >= 5 ? "h-10 md:h-[50px]" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-40%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Section1;
