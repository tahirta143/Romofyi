import React from "react";

function Footer() {
  return (
    <div className="w-full">
      {/* Top Cards */}
      <div className="relative w-full mt-40 ">
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
              className="w-full sm:w-72 h-40 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] p-6 flex flex-col items-center justify-center"
            >
              <img src={item.img} alt="" className="w-12 mb-2" />
              <h1 className="text-lg font-semibold">{item.text}</h1>
            </div>
          ))}
        </div>

        {/* Main Footer Section */}
        <div className="w-full mt-40 md:mt-32 px-6 py-12 h-[500px] bg-blue-950 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["INFORMATION", "MY ACCOUNT", "ABOUT", "CONTACTS"].map(
            (title, i) => (
              <div key={i} className="flex flex-col mt-28">
                <h1 className="text-xl md:text-2xl mb-4 font-bold">{title}</h1>
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
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 p-6 text-center">
        <h1 className="text-sm md:text-base">
          © 2019 All Rights Reserved. Design by
        </h1>
        <button className="text-blue-600 hover:text-yellow-600 text-sm md:text-base">
          Free Html Templates
        </button>
      </div>
    </div>
  );
}

export default Footer;
