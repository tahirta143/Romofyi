import React from "react";

function News() {
  return (
    <div>
      <div className="bg-yellow-600 w-full  items-center p-8 ">
        <h1 className="ml-[490px] text-4xl font-semibold text-white">
          Letest News
        </h1>
      </div>
      <div>
        <div className="flex  mt-28 justify-center space-x-6 ">
          <img
            src="https://html.design/demo/romofyi/images/news_img1.jpg"
            alt=""
            className="mr-7"
          />
          <div className="mr-16">
            <h1 className="font-bold text-2xl">
              Specimen book. It has survived not only five
            </h1>
            <div className="flex justify-center space-x-80 mt-4">
              <p>7 July 2019</p>
              <p>Like Comment</p>
            </div>
            <p className="mt-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard
              dummy text ever since the <br /> 1500s, when an unknown printer
              took a galley of type and scrambled it to <br /> make a type
              specimen book.
            </p>
          </div>
        </div>
        <div className="flex  mt-8 justify-center space-x-6">
          <img
            src="https://html.design/demo/romofyi/images/news_img2.jpg"
            alt=""
            className="mr-7"
          />
          <div className="mr-16">
            <h1 className="font-bold text-2xl">
              Specimen book. It has survived not only five
            </h1>
            <div className="flex justify-center space-x-80 mt-4">
              <p>7 July 2019</p>
              <p>Like Comment</p>
            </div>
            <p className="mt-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard
              dummy text ever since the <br /> 1500s, when an unknown printer
              took a galley of type and scrambled it to <br /> make a type
              specimen book.
            </p>
          </div>
        </div>
        <div className="flex  mt-8 justify-center space-x-6">
          <img
            src="https://html.design/demo/romofyi/images/news_img3.jpg"
            alt=""
            className="mr-7"
          />
          <div className="mr-16">
            <h1 className="font-bold text-2xl">
              Specimen book. It has survived not only five
            </h1>
            <div className="flex justify-center space-x-80 mt-4">
              <p>7 July 2019</p>
              <p>Like Comment</p>
            </div>
            <p className="mt-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard
              dummy text ever since the <br /> 1500s, when an unknown printer
              took a galley of type and scrambled it to <br /> make a type
              specimen book.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-7">
          <h1 className="text-3xl">Subscribe To The Newsletter</h1>

          <input
            type="email"
            placeholder="Enter your email "
            className="w-80 ml-20 h-10 border-2 p-2  rounded-full"
          />
        </div>
        <button className="bg-blue-950 mt-0 ml-[840px] text-white w-40 rounded-full h-10 hover:bg-yellow-600 hover:transition-all duration-700 ease-in-out hover:scale-105">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default News;
