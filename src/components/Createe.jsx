import { useNavigate } from "react-router-dom";

export default function Createe() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="flex justify-center p-2  mt-8 ">
        <div className="container bg-blue-800 flex justify-center p-8 rounded-2xl">
          <div className=" flex flex-col text-center p-8 gap-5 border-2 border-white rounded-2xl">
            <h1 className="font-bold text-[36px] text-white">
              Ready to get started?
            </h1>
            <h1 className="text-white text-[17px]">
              Join thousands of students buying, selling, and renting study
              tools at affordable prices.
            </h1>
            <div className="flex gap-5 justify-center">
              <button onClick={() => navigate("/signUp")} className=" hover:bg-white/95 border border-white text-white hover:text-black transition duration-300 p-3 px-4 rounded-[10px] text-[17px] font-bold">
                Create Account
              </button>
              <button onClick={() => navigate("/signin")} className="hover:bg-white/95 border border-white text-white hover:text-black transition duration-300 p-2 px-4 rounded-[10px] text-[17px] font-bold">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
