import React from "react";

const Section4 = () => {
  return (
    <section className="w-full bg-black px-4 py-12 text-white pb-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side - Images */}
        <div className="flex flex-col items-center lg:w-1/2 relative">
          <img
            src="https://viralish.com/wp-content/uploads/2024/09/Screenshot-2024-08-30-at-10.02.52 PM-2-1158x1200.png"
            alt="Adley Kinsman"
            className="w-full h-[135vh] rounded-lg shadow-md object-cover"
          />
          <img
            src="https://viralish.com/wp-content/uploads/2024/09/adley-signature-white.png"
            alt="Adley Signature"
            className="w-48 absolute -bottom-16 -right-12"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 space-y-6 mt-10 lg:mt-0">
          <h2 className="text-4xl md:text-6xl uppercase">
            The BEST Attention Hackers in the world.
          </h2>
          <h3 className="text-2xl font-semibold">Meet The Founder</h3>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              Are you struggling to get the views your videos deserve? Whether you’re an entrepreneur aiming to go viral or a major brand seeking to amplify your message, Viralish is here to help.
            </p>
            <p>
              Adley has spent the last three years perfecting a proven method that garners over 1 billion views every month for brands and creators.
            </p>
            <p>
              Having crafted viral videos for renowned brands like{" "}
              <strong className="text-white">Land Rover, AirHeads, Raising Canes, and HP</strong>, Adley knows exactly how to capture and hold attention.
            </p>
            <p>
              Her expertise isn’t just theoretical; it’s the same formula she teaches to her internal team to ensure they consistently deliver content for some of the biggest names in the industry.
            </p>
            <p>
              If you’re ready to unlock millions of views on demand, you’re in the right place.
            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Monthly Views", stat: "2B+" },
              { title: "Followers", stat: "45M+" },
              { title: "Mins Viewed", stat: "50B+" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl p-6 text-center shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="text-md md:text-xl font-medium text-gray-400">
                  {item.title}
                </div>
                <div className="text-3xl md:text-4xl font-bold">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
