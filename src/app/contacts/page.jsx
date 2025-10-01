import React from "react";

function Contacts() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 mt-10">
      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full h-12 border-2 border-yellow-400 rounded-md px-4 focus:ring-2 focus:ring-yellow-300 outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full h-12 border-2 border-yellow-400 rounded-md px-4 focus:ring-2 focus:ring-yellow-300 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full h-12 border-2 border-yellow-400 rounded-md px-4 focus:ring-2 focus:ring-yellow-300 outline-none"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full h-12 border-2 border-yellow-400 rounded-md px-4 focus:ring-2 focus:ring-yellow-300 outline-none"
        />
        {/* Message field spanning both columns */}
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full md:col-span-2 border-2 border-yellow-400 rounded-md p-4 focus:ring-2 focus:ring-yellow-300 outline-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-950 text-white rounded-3xl w-36 h-12 hover:bg-yellow-600 transition-all duration-700 ease-in-out hover:scale-105">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contacts;
