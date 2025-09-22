import React from "react";

function Footer() {
  return (
    <div>
      <div className="relative w-full h-[500px] bg-blue-300 mt-60">
        <div className="absolute -top-[100px] left-0 w-full h-44 flex justify-center space-x-14">
          <div className="w-72 h-44 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-12">
            <img
              src="https://html.design/demo/romofyi/images/icon_mony.png"
              alt=""
              className="ml-14"
            />
            <h1 className="ml-12">Money Back</h1>
          </div>
          <div className="w-72 h-44 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-12">
            <img
              src="https://html.design/demo/romofyi/images/icon_gift.png"
              alt=""
              className="ml-14"
            />
            <h1 className="ml-14">Special Gift</h1>
          </div>{" "}
          <div className="w-72 h-44 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-12">
            <img
              src="https://html.design/demo/romofyi/images/icon_car.png"
              alt=""
              className="ml-14"
            />
            <h1 className="ml-12">Free Shipping</h1>
          </div>
        </div>
        <div className="w-full mt-0 p-20 h-[500px] bg-blue-950 flex text-xl space-x-2">
          <div className="mt-8 p-6 text-white ">
            <h1 className="text-white text-2xl mb-5 font-bold">INFORMATION</h1>
            <p>
              There are many variations of <br /> passages of Lorem <br /> Ipsum
              available, but the <br /> majority have suffered <br /> alteration
              in some form, <br /> by injected humour, or <br /> randomised
              words which <br /> don't look even slightly <br /> believable
            </p>
          </div>
          <div className="mt-8 p-6 text-white ">
            <h1 className="text-white text-2xl mb-5 font-bold">MY ACCOUNT</h1>
            <p>
              There are many variations of <br /> passages of Lorem <br /> Ipsum
              available, but the <br /> majority have suffered <br /> alteration
              in some form, <br /> by injected humour, or <br /> randomised
              words which <br /> don't look even slightly <br /> believable
            </p>
          </div>
          <div className="mt-8 p-6 text-white ">
            <h1 className="text-white text-2xl mb-5 font-bold">ABOUT</h1>
            <p>
              There are many variations of <br /> passages of Lorem <br /> Ipsum
              available, but the <br /> majority have suffered <br /> alteration
              in some form, <br /> by injected humour, or <br /> randomised
              words which <br /> don't look even slightly <br /> believable
            </p>
          </div>
          <div className="mt-8 p-6 text-white ">
            <h1 className="text-white text-2xl mb-5 font-bold">CONTACTS</h1>
            <p>
              There are many variations of <br /> passages of Lorem <br /> Ipsum
              available, but the <br /> majority have suffered <br /> alteration
              in some form, <br /> by injected humour, or <br /> randomised
              words which <br /> don't look even slightly <br /> believable
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-1 justify-center   p-8">
        <h1>© 2019 All Rights Reserved. Design by</h1>
        <button className="bg-none hover:text-yellow-600">
          Free Html Templates
        </button>
      </div>
    </div>
  );
}

export default Footer;
