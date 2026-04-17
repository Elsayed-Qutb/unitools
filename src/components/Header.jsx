import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div>
      <header className="flex justify-center pt-0.5 items-center">
        <div className="container flex justify-between items-center p-3.5 ">
          <div className="flex items-center gap-2">
            <span className="bg-blue-800 text-white px-3.5 py-2 rounded-md font-bold">
              U
            </span>
            <h1 className="font-bold text-[20px]">UniTools</h1>
          </div>

          <nav className="w-[30%] hidden lg:flex gap-7 justify-center items-center text-[14px] text-gray-600 p-1 border-2 border-blue-800 rounded-b-3xl ">
            <a href="https://www.google.com" className="hover:text-blue-800">
              Home
            </a>
            <a href="#" className="hover:text-blue-700">
              Sell/Rent
            </a>
            <a href="#" className="hover:text-blue-700">
              Masseges
            </a>
          </nav>

          <div className="flex gap-5 items-center">
            <ShoppingCart className=" hover:bg-gray-200 hover:rounded-md hover:p-0.5 transition duration-300 " />
            <div className="btn flex gap-2">
              <button className="  bg-blue-800 hover:bg-white hover:border hover:border-gray-500 text-white hover:text-gray-600 text-[14px] rounded-[9px] px-2.5 py-1 transition duration-400  ">
                Login
              </button>
              <button className=" bg-blue-800 hover:bg-white border border-gray-500 text-white hover:text-gray-600 text-[14px] rounded-[9px] px-2.5 py-1 transition duration-400">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
