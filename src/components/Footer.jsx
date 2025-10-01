import React from "react";

function Footer() {
  return (
    <div className="w-full">
      {/* Top Cards */}
      <div className="relative w-full mt-40">
        <div className="absolute -top-20 left-0 w-full flex flex-col md:flex-row items-center justify-center md:space-x-14 space-y-6 md:space-y-0 px-4">
          {/* Card */}
          {[
            {
              img: "https://html.design/demo/romofyi/images/icon_mony.png",
              text: "Money Back",
            },
            {
              img: "https://html.design/demo/romofyi/images/icon_gift.png",
              text: "Special Gift",
            },
            {
              img: "https://html.design/demo/romofyi/images/icon_car.png",
              text: "Free Shipping",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-72 h-36 md:h-40 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] p-6 flex flex-col items-center justify-center hover:scale-105 transition duration-300"
            >
              <img src={item.img} alt="" className="w-10 md:w-12 mb-2" />
              <h1 className="text-base md:text-lg font-semibold">
                {item.text}
              </h1>
            </div>
          ))}
        </div>

        {/* Main Footer Section */}
        <div className="w-full mt-70 md:mt-32 px-6 py-12 bg-blue-950 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {["INFORMATION", "MY ACCOUNT", "ABOUT", "CONTACTS"].map(
            (title, i) => (
              <div key={i} className="flex flex-col mt-20">
                <h1 className="text-lg md:text-xl mb-4 font-bold">{title}</h1>
                <p className="text-sm md:text-base leading-6 opacity-90">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable.
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center px-6 py-6 space-y-2 md:space-y-0 md:space-x-2 bg-slate-100">
        <h1 className="text-xs sm:text-sm md:text-base text-gray-700">
          © 2019 All Rights Reserved. Design by
        </h1>
        <button className="text-blue-600 hover:text-yellow-600 text-xs sm:text-sm md:text-base font-medium">
          Free Html Templates
        </button>
      </div>
    </div>
  );
}

export default Footer;
