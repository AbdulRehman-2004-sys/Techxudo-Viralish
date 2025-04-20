import React from "react";

const Brand = () => {
  return (
    <>
      <div className="bg-black text-white relative min-h-screen flex flex-col items-center justify-center px-4 py-10">
        <div className="h-screen w-full flex flex-col items-center justify-center mt-[10rem] md:mt-0">
          {/* Overlay Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: `url('/images/uploads/2024/09/Artboard-1-copy-3.png')`,
            }}
          ></div>

          {/* Overlay Content */}
          <div className="relative z-10 text-center max-w-4xl px-4 w-full">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur text-sm font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              The Leaders In <span className="text-white font-bold">Viral Video</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4">
              WORK WITH <br /> VIRALISH
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-200 mb-8">
              If you are a <strong className="text-white">Mass Awareness Brand</strong> who wants to harness the power of viral video with Viralish then we invite you fill out the form below to connect with our team.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm md:text-base font-semibold">
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.3)] text-center">
                <span className="text-red-600 mb-2">
                  <img className="h-16" src="https://viralish.com/wp-content/uploads/2023/10/ACQ_Web_Icon-LeadershipGrowth.png" alt="" />
                </span>
                GUARANTEED <br /> 10M+ VIEWS
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.3)] text-center">
                <span className="text-red-600 mb-2">
                  <img className="h-16" src="https://viralish.com/wp-content/uploads/2023/10/ACQ_Web_Icon-TripleProfit.png" alt="" />
                </span>
                NATURAL INTEGRATION IN VIRAL CONTENT
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.3)] text-center">
                <span className="text-red-600 mb-2">
                  <img className="h-16" src="https://viralish.com/wp-content/uploads/2023/10/ACQ_Web_Icon-FounderLed-2-150x150.png" alt="" />
                </span>
                EXTERNAL MARKETING TEAM
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.3)] text-center">
                <span className="text-red-600 mb-2">
                  <img className="h-16" src="https://viralish.com/wp-content/uploads/2023/10/ACQ_Web_Icon-ValuableEnterprise-150x150.png" alt="" />
                </span>
                END-TO-END CAMPAIGN MANAGEMENT
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Brand;

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "023ebe30-f62d-4a73-b8d2-07b81fa7eddd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="text-white py-12 px-4 flex justify-center items-center z-50">
      <div className="bg-[#1c1c1c] w-full max-w-3xl rounded-lg p-6 md:p-10 shadow-lg">
        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Get In Touch
          </button>
        </form>

        {/* Email link */}
        <p className="text-center mt-6 text-gray-300">
          Or email us at{" "}
          <a
            href="mailto:betsy@viralish.com"
            className="text-white font-bold underline"
          >
            betsy@viralish.com
          </a>
        </p>
      </div>
    </div>
  );
};
