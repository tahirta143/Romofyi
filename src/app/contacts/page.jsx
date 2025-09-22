import React from "react";

function Contacts() {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 ml-32">
        <input
          type="text"
          placeholder="Name"
          className="w-96 h-10 border-2 border-yellow-400 focus:ring-2 focus:ring-yellow-300 "
        />
        <input
          type="text"
          placeholder="Phome number"
          className="w-96 h-10 border-2 border-yellow-400 focus:ring-2 focus:ring-yellow-300 "
        />
        <input
          type="text"
          placeholder="Email "
          className="w-96 h-10 border-2 border-yellow-400 focus:ring-2 focus:ring-yellow-300 "
        />
        <input
          type="text"
          placeholder="Address"
          className="w-96 h-10 border-2 border-yellow-400 focus:ring-2 focus:ring-yellow-300 "
        />
        <input
          type="text"
          placeholder="Massage"
          className="w-[965px] h-28 border-2 border-yellow-400 focus:ring-2 focus:ring-yellow-300 "
        />
      </div>{" "}
      <button className="bg-blue-950 text-white  ml-32 mt-8 rounded-3xl w-36 h-12 hover:bg-yellow-600 mr-10 transition-all duration-700 ease-in-out hover:scale-105">
        Send
      </button>
    </div>
  );
}

export default Contacts;
