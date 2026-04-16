import React from "react";
import { HeartPulse } from "lucide-react";

export default function BrowseCategories() {
  return (
    <div>
      <section className="flex justify-center p-10 border-b-1 border-black/25">
        <div className="container flex flex-col gap-5">
          <h1 className="text-[30px] font-bold">Browse Categories</h1>

          <div className="mama w-full flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className=" p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#eae8fd] px-2 py-1 rounded-md">
                ⚙️
              </h1>
              <h1 className="font-bold">Engineering</h1>
            </div>
            <div className=" p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#def8ee] px-2 py-1 rounded-md">
                🦷
              </h1>
              <h1 className="font-bold">Dentistry</h1>
            </div>
            <div className=" p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#fdf4de] px-2 py-1 rounded-md">
                🎨
              </h1>
              <h1 className="font-bold">Art & Design</h1>
            </div>
            <div className=" p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#fce8e7] px-2 py-1 rounded-md">
                ⚕️
              </h1>
              <h1 className="font-bold">Medical</h1>
            </div>
            <div className=" p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#e1f4fb] px-2 py-1 rounded-md">
                💊
              </h1>
              <h1 className="font-bold">Pharmacy</h1>
            </div>
            <div className=" p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#f0ebff] px-2 py-1 rounded-md">
                💼
              </h1>
              <h1 className="font-bold">business</h1>
            </div>
            <div className="b p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#e1f6fb] px-2 py-1 rounded-md">
                🔬
              </h1>
              <h1 className="font-bold">Science lab</h1>
            </div>
            <div className=" p-5 flex flex-col justify-center items-center gap-2 border-2 border-black/20 rounded-md hover:border-blue-600">
              <h1 className="text-[40px] bg-[#fde8f1] px-2 py-1 rounded-md">
                📚
              </h1>
              <h1 className="font-bold">textbooks</h1>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
