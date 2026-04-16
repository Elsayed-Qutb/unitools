import React from "react";
import { Sparkle } from 'lucide-react';

export default function Sectionone() {
  return (
    <div>
      <section className="bg-[#4b54d4] flex justify-center">
        <div className="container flex justify-center">
          <div className=" text-white w-[70%] flex flex-col justify-center items-center py-19 gap-5">
            <div className="flex items-center justify-center gap-2">
               <Sparkle />
              <p className="font-bold">Student Marketplace</p>
            </div>
            <h1 className="text-[50px] font-bold text-center">
              Quality Study Tools at <br></br> Student Prices
            </h1>
            <p className="font-medium text-[17px]">
              Buy, sell, and rent engineering tools, textbooks, lab equipment,
              and more from fellow students.
            </p>
            <div class="flex items-center border-2 w-100 focus-within:border-black transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
              <input
                type="text"
                placeholder="Search for products"
                class="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="22"
                height="22"
                viewBox="0 0 30 30"
                fill="#6B7280"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
