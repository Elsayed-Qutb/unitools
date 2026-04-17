import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import google from "../assets/google.svg";
import facebook1 from "../assets/facebook1.svg";
import Header from "../components/Header";

export default function SignInSide() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center p-1.5 lg:p-8 ">

    
    <div className=" flex flex-col ">
      
      <div className="flex justify-between items-end w-12/12 p-2 mb-3">
      <div className="flex flex-col">
      <h1 className="font-bold text-[40px] text-blue-700">Sign In</h1>
      <h1 className="font-bold text-[30px]">Welcome Back</h1>
      </div>
      <button onClick={() => navigate("/Home")} className="bg-blue-600 h-1/2 p-2 text-white rounded-2xl hover:bg-black transition duration-300">Back</button>
      </div>
     
        <div class="relative lg:w-full flex flex-col items-center gap-4">
          
          <div class="relative px-4 py-7 shadow-md shadow-black rounded-3xl sm:p-10 ">
            <div class="max-w-md mx-auto">
              <div class="flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-800 text-white px-3.5 py-2 rounded-md font-bold">
                    U
                  </span>
                  <h1 className="font-bold text-[30px]">UniTools</h1>
                </div>
              </div>
              <div class="mt-5">
                <label
                  class="font-semibold text-sm text-gray-600 pb-1 block"
                  for="login"
                >
                  E-mail
                </label>
                <input
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="text"
                  id="login"
                />
                <label
                  class="font-semibold text-sm text-gray-600 pb-1 block"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="password"
                  id="password"
                />
              </div>
              <div class="text-right mb-4">
                <a
                  class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div class="flex justify-center w-full items-center">
                <div className="flex flex-col gap-4">
                  <button class="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-green-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg gap-0.5">
                    <img className="w-9" src={google}></img>
                    <span class=" lg:ml-2 w-11/12 text-[12px] lg:text-[16px]">
                      Sign in with Google
                    </span>
                  </button>
                  <button class="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg gap-0.5">
                    <img className="w-9" src={facebook1}></img>
                    <span class="lg:ml-2 w-11/12 text-[12px] lg:text-[16px]">
                      Sign in with Facebook
                    </span>
                  </button>
                </div>
              </div>
              <div class="mt-5">
                <button
                  class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                >
                  Log in
                </button>
              </div>
              <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <Link
                  to="/signup"
                  className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  or sign up
                </Link>
                <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
