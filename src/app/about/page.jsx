import React from "react";

function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-yellow-600 w-full p-6 md:p-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          About
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-14 px-6 md:px-16 lg:px-28 gap-10">
        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="font-semibold text-2xl sm:text-3xl">
            The standard Lorem Ipsum
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-6 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-blue-950 text-white mt-8 rounded-3xl px-6 py-3 text-sm sm:text-base hover:bg-yellow-600 transition-all duration-500 ease-in-out hover:scale-105">
            Read more
          </button>
        </div>

        {/* Image */}
        <img
          src="https://html.design/demo/romofyi/images/black-red.png"
          alt="About illustration"
          className="w-full md:w-2/5 max-w-md rounded-lg"
        />
      </div>
    </div>
  );
}

export default About;
