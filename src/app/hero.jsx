import React from "react";
import Image from "next/image";
function hero() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-[url('/bg.jpg')] bg-cover bg-center px-6 lg:px-16 py-20">
        <div className="space-y-4 lg:mt-20 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-blue-950">
            Romofyi
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-yellow-600">
            Trands 2019
          </h1>
          <h1 className="text-lg sm:text-xl lg:text-2xl">
            A huge fashion collection for ever
          </h1>
          <button className="bg-blue-900 text-white rounded-full px-6 py-3 hover:bg-yellow-600 transition-all duration-700 ease-in-out hover:scale-105">
            Shop now
          </button>
        </div>

        <div className="mt-10 lg:mt-0 lg:ml-20 flex justify-center">
          <Image
            src="/girl.jpg"
            alt="Girl"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        {[
          { src: "shoes.png", label: "Shoes" },
          { src: "underwear.png", label: "Underwear" },
          { src: "pent.png", label: "Pant & Socks" },
          { src: "t_shart.png", label: "T-shirt & Tanktop" },
          { src: "jakit.png", label: "Cardigans & Jumpers" },
          { src: "helbet.png", label: "Top & Hat" },
        ].map((item, i) => (
          <div
            key={i}
            className={`w-40 sm:w-48 h-52 flex flex-col items-center justify-center ${
              i % 2 === 0 ? "bg-yellow-600" : "bg-blue-950"
            }`}
          >
            <Image
              src={`https://html.design/demo/romofyi/images/${item.src}`}
              alt={item.label}
              width={100}
              height={100}
            />
            <h1 className="text-white font-bold mt-2 text-center">
              {item.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default hero;
