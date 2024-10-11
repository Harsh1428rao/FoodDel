import React from 'react';
import pxfuel from '../assets/pxfuel2.jpg'; // Importing the image

const Banner = () => {
  return (
    <div className="relative h-96 bg-gray-100 flex items-center justify-center"> {/* Set height to 96 (24rem) */}
      {/* Image Section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={pxfuel}
          alt="Farm background"
          className="w-full h-full object-cover" // Ensures the image covers the entire section
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black h-full w-full">
        {/* Content Section */}
        <div className="flex items-center justify-end h-full">
          {/* Text on the Right Side with Padding */}
          <div className="w-1/2 p-10 pr-16 text-white text-right">
            <h1 className="text-5xl font-bold mb-4">Taste the World From your Kitchen</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
