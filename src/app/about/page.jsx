import React from "react";

function About() {
  return (
    <div>
      <div className="bg-yellow-600 w-full  items-center p-8">
        <h1 className="ml-[550px] text-4xl font-semibold text-white">About</h1>
      </div>
      <div className="flex mt-14 justify-center space-x-28">
        <div className="mt-7">
          <h1 className="font-semibold text-3xl">The standard Lorem Ipsum</h1>
          <p className="text-lg mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor incididunt ut labore et <br /> dolore magna
            aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation
            ullamco laboris nisi ut
            <br /> aliquip ex ea commodo consequat.
          </p>
          <button className="bg-blue-950 text-white mt-8 rounded-3xl w-36 h-12 hover:bg-yellow-600 mr-10 transition-all duration-700 ease-in-out hover:scale-105">
            Read more
          </button>
        </div>
        <img
          src="https://html.design/demo/romofyi/images/black-red.png"
          alt=""
          className="w-2/5"
        />
      </div>
    </div>
  );
}

export default About;
