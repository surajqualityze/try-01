import Image from "next/image";
import React from "react";

const FirstComponents = () => {
  return (
    <div className="px-10 flex justify-center items-center h-screen">
      <div className="relative">
        <div className="absolute -inset-5">
          <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
        </div>
        <a
          href="#"
          title=""
          className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Gradient Shadow
        </a>
      </div>
    </div>
  );
};

export default FirstComponents;
