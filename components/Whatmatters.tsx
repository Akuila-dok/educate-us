import React from "react";

function WhatMatters() {
  return (
    <div className="bg-gradient-to-r from-blue-50 font-ubuntu to-green-50 py-20 px-8 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-8 font-ubuntu">
          What Truly Matters
        </h2>
        <p className="text-2xl text-gray-800 leading-relaxed mb-6 font-light">
          At the heart of every initiative, every effort, and every moment of
          change lies a simple truth:  
          <span className="text-blue-600 font-medium"> People matter.</span>  
          The power of transformation comes not from grand gestures but from  
          <span className="text-green-600 font-medium">
            {" "}small, consistent acts of kindness, courage, and unity.
          </span>
        </p>
        <p className="text-2xl text-gray-800 leading-relaxed mb-6 font-light">
          The true impact is measured not in numbers, but in  
          <span className="text-blue-500 font-semibold"> smiles restored</span>,  
          <span className="text-green-500 font-semibold"> dreams reignited</span>,  
          and <span className="text-blue-500 font-semibold"> lives uplifted</span>.  
          We stand together, knowing that  
          <span className="text-green-600 font-medium"> change begins with each of us.</span>
        </p>
        <p className="text-3xl font-semibold text-gray-900 font-thin italic">
          Because in the end, what matters most is  
          <span className="text-blue-600"> how we uplift one another.</span>
        </p>

        {/* Donate Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.gofundme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-500 text-green-500 text-xl font-bold px-8 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-lg"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatMatters;
