import React from "react";
import PricingPlan from "../PricingPlan";

const index = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold text-[#1730c6] mb-10 text-center">
        Support Our Work
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl ml-96">
        {PricingPlan.map((item, index) => (
          <div
            key={index}
            className="transform transition-transform duration-500 hover:scale-105 rounded-xl border-2 border-[#1730c6] bg-gradient-to-br from-white to-gray-100 shadow-lg"
          >
            <div className="p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.duration}
              </h2>
              <p className="mt-4 text-4xl font-bold text-gray-900">
                Rs {item.price}
              </p>

              <ul className="mt-6 space-y-2 text-gray-700 text-left font-bold">
                <li>✅ Empower Innovation</li>
                <li>✅ Support Free Tools</li>
                <li>✅ Fuel AI Growth</li>
                <li>✅ Keep It Free</li>
              </ul>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border-2 border-[#344cc1] bg-[#344cc1] text-white px-6 py-2 text-sm font-bold hover:bg-[#1330c3] transition-colors duration-300 "
              >
                Support Us
              </a>
            </div>
          </div>
        ))}
      </div>

      <a href="https://ai-studio-project.vercel.app/" className="mt-20">
        <button className='className="mt-6 inline-block rounded-lg border-2 border-[#344cc1] px-6 py-2 font-medium transition-colors duration-300"'>
          <h1 className="text-xl font-bold text-[#1730c6] text-center">
            Go back to AI STUDIO
          </h1>
        </button>
      </a>
    </div>
  );
};

export default index;
