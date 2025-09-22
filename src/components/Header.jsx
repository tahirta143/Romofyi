import React from "react";
import { FiSearch } from "react-icons/fi";
import { Mail, Phone, ShoppingBag, ShoppingCart } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShoppingBag,
  FaTwitter,
} from "react-icons/fa";

function Header() {
  return (
    <div>
      <nav className="flex justify-between  text-black bg-slate-300   p-3">
        <span className="flex items-center  text-black cursor-pointer underline hover:text-blue-500">
          <Phone size={20} className="ml-10" />

          <span>+92 300 1234567</span>
        </span>
        <span className="text-black flex space-x-2 pl-12 ml-10">
          <FaFacebook
            size={30}
            className="hover:text-yellow-500 cursor-pointer hover:transition-all duration-300 ease-in-out hover:scale-105"
          />
          <FaInstagram
            size={30}
            className="hover:text-yellow-500 cursor-pointer hover:transition-all duration-300 ease-in-out hover:scale-105"
          />
          <FaLinkedin
            size={30}
            className="hover:text-yellow-500 cursor-pointer hover:transition-all duration-300 ease-in-out hover:scale-105"
          />
          <FaTwitter
            size={30}
            className="hover:text-yellow-500 cursor-pointer hover:transition-all duration-300 ease-in-out hover:scale-105"
          />
        </span>
        <span className=" items-center flex">
          <select className="bg-none border-2 bg-gray-100  rounded-2xl  w-24 h-6 ml-10">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </select>
          <p className="ml-5 mr-10"> Open hour: 8.00 - 18.00</p>
        </span>
      </nav>
      <div className="p-9 items-center justify-between flex pl-4">
        <span className="items-center flex ml-6 hover:text-blue-800 cursor-pointer space-x-1">
          <Mail />
          <p>info@gmail.com</p>
        </span>
        <img
          src="https://html.design/demo/romofyi/images/logo.png"
          alt=""
          className="cursor-pointer"
        />
        <span className="flex space-x-5">
          <FaShoppingBag size={30} className="text-blue-950 " />
          <button className="bg-blue-950 text-white  rounded-3xl w-36 h-8 hover:bg-yellow-600 mr-10 transition-all duration-700 ease-in-out hover:scale-105">
            Order Now
          </button>
        </span>
      </div>
      <div className="bg-blue-950 mt-0 min-w-full  flex">
        <a href="/">
          <div className="bg-blue-950 ml-20 w-[100px] h-20 hover:bg-yellow-600 transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white  text-lg">HOME</span>
          </div>
        </a>
        <a href="/about">
          <div className="bg-blue-950 w-[100px] h-20 hover:bg-yellow-600 transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white  text-lg">ABOUT</span>
          </div>
        </a>
        <a href="/products">
          <div className="bg-blue-950 w-[120px] h-20 hover:bg-yellow-600 transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white  text-lg">PRODUCTS</span>
          </div>
        </a>
        <a href="/fashion">
          <div className="bg-blue-950 w-[100px] h-20 hover:bg-yellow-600 transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white  text-lg">FASHION</span>
          </div>
        </a>{" "}
        <a href="/news">
          <div className="bg-blue-950 w-[100px] h-20 hover:bg-yellow-600 transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white  text-lg">NEWS</span>
          </div>
        </a>{" "}
        <a href="/contacts">
          <div className="bg-blue-950 w-[125px] h-20 hover:bg-yellow-600 transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white  text-lg">CONTACT US</span>
          </div>
        </a>
        <div className="relative w-96 mt-5 ml-10">
          <FiSearch className="absolute left-[350px] top-5 mb-[10px] transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border bg-gray-100 border-gray-300 rounded-full focus:outline-none  "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
