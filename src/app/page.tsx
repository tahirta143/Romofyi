import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
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

      {/* Featured Products */}
      <div className="mt-16 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Featured Products
        </h1>
        <div className="bg-yellow-600 h-1 w-40 mx-auto my-4"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 p-3">
          {[
            "shoes1.png",
            "shoes2.png",
            "shoes3.png",
            "shoes4.png",
            "shoes5.png",
            "tisat1.png",
            "tisat2.png",
            "tisat3.png",
            "tisat4.png",
            "tisat5.png",
            "mix1.png",
            "mix2.png",
            "mix3.png",
            "mix4.png",
            "mix5.png",
          ].map((src, i) => (
            <div
              key={i}
              className="bg-[#f2f2f2] p-4 flex flex-col items-center"
            >
              <Image
                src={`https://html.design/demo/romofyi/images/${src}`}
                alt="Product"
                width={140}
                height={200}
              />
              <h1 className="text-center mt-4 text-sm sm:text-base">
                Short Openwork Cardigan $120.00
              </h1>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-blue-900 text-white rounded-full px-6 py-3 hover:bg-yellow-600 transition-all duration-700 ease-in-out hover:scale-105">
            See More
          </button>
        </div>
      </div>

      {/* Fashion Banner */}
      <div className="mt-20 flex justify-center ">
        <Image
          src="https://html.design/demo/romofyi/images/fashion.jpg"
          alt="Fashion Banner"
          width={1200}
          height={400}
          className="max-w-full h-auto "
        />
      </div>

      <div className="mt-20 px-4 ml-16 lg:ml-32 mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
          Latest News
        </h1>
        <div className="bg-yellow-600 h-1 w-40 my-4 mx-auto lg:mx-0"></div>

        {["news_img1.jpg", "news_img2.jpg", "news_img3.jpg"].map((img, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row items-center gap-6 mt-10"
          >
            <Image
              src={`https://html.design/demo/romofyi/images/${img}`}
              alt="News"
              width={360}
              height={200}
              className="rounded-lg "
            />
            <div>
              <h1 className="font-bold text-xl sm:text-2xl">
                Specimen book. It has survived not only five
              </h1>
              <div className="flex justify-between text-sm mt-2">
                <p>7 July 2019</p>
                <p>Like · Comment</p>
              </div>
              <p className="mt-4 text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        ))}

        <div className="text-center mt-16 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Subscribe To The Newsletter
          </h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 h-10 border-2 rounded-full px-4"
          />
          <div>
            <button className="bg-blue-950 text-white rounded-full px-6 py-2 mt-2 hover:bg-yellow-600 transition-all duration-700 ease-in-out hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
