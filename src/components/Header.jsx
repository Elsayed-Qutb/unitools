import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex justify-center pt-0.5 items-center ">
        <div className="container flex justify-between items-center p-3.5 ">
          <div className="flex items-center gap-2">
            <span className="bg-blue-800 text-white px-3.5 py-2 rounded-md font-bold">
              U
            </span>
            <h1 className="font-bold text-[20px]">UniTools</h1>
          </div>

          <nav className="w-[30%] hidden lg:flex gap-7 justify-center items-center text-[14px] text-gray-600 p-1 border-2 border-blue-800 rounded-b-3xl ">
            <a className="hover:text-blue-800">Home</a>
            <a href="#" className="hover:text-blue-700">
              Sell/Rent
            </a>
            <a href="#" className="hover:text-blue-700">
              Masseges
            </a>
          </nav>

          <div className="flex gap-4 items-center">
            <div class="flex bg-white w-fit shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
              <div onClick={() => navigate("/profile")} class="dark:shadow-buttons-box-dark rounded-2xl w-full ">
                <a
                  class="text-light-blue-light hover:text-black dark:text-gray-400 border inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed  hover:border hover:border-black/30  hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="btn flex gap-2">
              <button
                onClick={() => navigate("/signin")}
                className="  bg-blue-800 hover:bg-white border hover:border hover:border-gray-500 text-white hover:text-gray-600 text-[14px] rounded-[9px] px-2.5 py-1 transition duration-400  "
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signUp")}
                className=" bg-blue-800 hover:bg-white border border-gray-500 text-white hover:text-gray-600 text-[14px] rounded-[9px] px-2.5 py-1 transition duration-400"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
