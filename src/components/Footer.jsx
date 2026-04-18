import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <div>
      <section className="flex justify-center p-2 shadow-sm shadow-black mt-5">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-3 p-2 ">
          <div className="flex flex-col gap-7 p-2  ">
            <div className="flex items-center gap-2">
              <span className="bg-blue-800 text-white px-3.5 py-2 rounded-md font-bold">
                U
              </span>
              <h1 className="font-bold text-[26px]">UniTools</h1>
            </div>
            <p className="text-[14px] text-gray-600">
              The most trusted marketplace designed specifically for university
              students to trade academic supplies.
            </p>
          </div>

          <div className=" flex flex-col gap-1 lg:gap-2 p-.5">
            <h1 className="font-semibold text-[18px] px-2 ">Quick Link</h1>
            <Link className="text-gray-600 w-20 hover:bg-blue-800 p-2 rounded-2xl hover:text-white transtion duration-300">  
              Home
            </Link>
            <a className="text-gray-600 w-30 hover:bg-blue-800 p-2 rounded-2xl hover:text-white transtion duration-300">
              Sell Product
            </a>
            <Link to="/signin" className="text-gray-600 w-20 hover:bg-blue-800 p-2 rounded-2xl hover:text-white transtion duration-300">
              Login
            </Link>
          </div>

          <div className=" flex flex-col gap-.5 lg:gap-2 p-.5">
            <h1 className="font-semibold text-[18px] px-2 ">Contact Us</h1>
            <h1 className="text-gray-600 p-2 ">
              Unitool@Gmail.com
            </h1>
            <h1 className="text-gray-600 p-2 ">
              +20 1014666796
            </h1>
            <h1 className="text-gray-600 p-2 ">
              Tanta, Gharbia, Egypt
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
