"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { Mail, Phone, Menu, X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShoppingBag,
  FaTwitter,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <nav className="flex flex-col md:flex-row md:justify-between items-center text-black bg-slate-300 p-3 space-y-2 md:space-y-0">
        {/* Phone */}
        <span className="flex items-center space-x-2 cursor-pointer underline hover:text-blue-500">
          <Phone size={20} />
          <span>+92 300 1234567</span>
        </span>

        {/* Social Icons */}
        <span className="flex space-x-3 ml-18">
          {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
            <Icon
              key={i}
              size={22}
              className="hover:text-yellow-500  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          ))}
        </span>

        {/* Language + Hours */}
        <span className="flex items-center space-x-3">
          <select className="border bg-gray-100 rounded-xl w-24 h-7 text-sm">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </select>
          <p className="text-sm">Open hour: 8.00 - 18.00</p>
        </span>
      </nav>

      {/* Middle Bar */}
      <div className="p-4 flex flex-col md:flex-row items-center justify-between">
        {/* Email */}
        <span className="flex items-center space-x-2 text-sm md:text-base cursor-pointer hover:text-blue-800">
          <Mail />
          <p>info@gmail.com</p>
        </span>

        {/* Logo */}
        <img
          src="https://html.design/demo/romofyi/images/logo.png"
          alt="Logo"
          className="cursor-pointer my-3 md:my-0 w-32 md:w-40"
        />

        {/* Bag + Button */}
        <span className="flex items-center space-x-4">
          <FaShoppingBag size={25} className="text-blue-950" />
          <button className="bg-blue-950 text-white rounded-3xl px-5 py-1 text-sm md:text-base hover:bg-yellow-600 transition-all duration-500 ease-in-out hover:scale-105">
            Order Now
          </button>
        </span>
      </div>

      {/* Bottom Nav */}
      <div className="w-full bg-blue-950 md:flex md:items-center md:justify-between relative">
        {/* Hamburger for Mobile */}
        <div className="flex justify-between items-center p-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex ml-11 flex-wrap items-center justify-center md:justify-start">
          {[
            { label: "HOME", link: "/" },
            { label: "ABOUT", link: "/about" },
            { label: "PRODUCTS", link: "/products" },
            { label: "FASHION", link: "/fashion" },
            { label: "NEWS", link: "/news" },
            { label: "CONTACT US", link: "/contacts" },
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <div className="px-5 py-4 hover:bg-yellow-600 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm md:text-lg">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}

          {/* Search Bar */}
          <div className="relative w-full md:w-80 p-3">
            <FiSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2 border bg-gray-100 border-gray-300 rounded-full focus:outline-none text-sm md:text-base"
            />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="flex flex-col bg-blue-950 md:hidden px-6 pb-4 space-y-2">
            {[
              { label: "HOME", link: "/" },
              { label: "ABOUT", link: "/About" },
              { label: "PRODUCTS", link: "/Products" },
              { label: "FASHION", link: "/Fashion" },
              { label: "NEWS", link: "/News" },
              { label: "CONTACT US", link: "/Contacts" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="py-2 text-white hover:bg-yellow-600 rounded-md text-center transition"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Search */}
            <div className="relative w-full">
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-2 border bg-gray-100 border-gray-300 rounded-full focus:outline-none text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
