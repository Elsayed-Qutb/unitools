import React from "react";
import { useNavigate } from "react-router-dom";


export default function SignUpSide() {
   const navigate = useNavigate();
  return (
    <div>
      <div class="p-4 lg:p-10">
        <div class="flex items-center justify-center b-10 p-2 lg:p-5 gap-3 mb-5">
          <div class="flex gap-5 items-center">
            <div class="flex flex-col justify-center items-center">
              <div class="text-base text-blue-700 font-bold text-[35px] ">
                Create Account
              </div>
              <div class="mt-2 text-lg text-gray-600 font-bold">
                Join our student community today
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div class="grid grid-cols-1 gap-6 mb-10 w-12/12 lg:w-7/12 shadow-md shadow-black/40 px-4 py-7 rounded-2xl">
            <div id="input" class="relative">
              <input
                type="text"
                id="floating_outlined"
                class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-blue-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="Full name"
                
              />
              <label
                for="floating_outlined"
                class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Full name
              </label>
            </div>

            <div id="input" class="relative">
              <input
                type="email"
                id="floating_outlined"
                class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-blue-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="E-mail"
                disabled=""
              />
              <label
                for="floating_outlined"
                class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                E-mail
              </label>
            </div>
            <div id="input" class="relative">
              <input
                type="phone"
                id="floating_outlined"
                class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-blue-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="Phone"
                
              />
              <label
                for="floating_outlined"
                class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Phone
              </label>
            </div>

            <div id="input" class="relative">
              <input
                type="text"
                id="floating_outlined"
                class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-blue-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="University  name"
                
              />
              <label
                for="floating_outlined"
                class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                University name
              </label>
            </div>

            <div id="input" class="relative">
              <input
                type="password"
                id="floating_outlined"
                class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-blue-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="password"
              
              />
              <label
                for="floating_outlined"
                class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                password
              </label>
            </div>

            <div id="input" class="relative">
              <input
                type="password"
                id="floating_outlined"
                class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-blue-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="Confirm Password"
                
              />
              <label
                for="floating_outlined"
                class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Confirm Password
              </label>
            </div>
          </div>
        </div>

        <div class="sm:flex flex-row-reverse flex justify-center gap-4">
          <button
            class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-blue-700 hover:bg-black text-white focus:ring-2 focus:ring-black hover:ring-2 transition-all duration-300"
            type="button"
          >
            <div class="flex gap-2 items-center">Create Account</div>
          </button>
          <button onClick={() => navigate("/Home")}
            class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent  text-primary focus:ring-2 focus:ring-gray-200 hover:bg-black hover:text-white  transition-all duration-300 "
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
