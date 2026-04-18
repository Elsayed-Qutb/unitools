import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.png";
import { useEffect, useState } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <section className="flex flex-col justify-center items-center mt-4">
        <div className="container flex justify-center p-3">
          <div className="bg-white w-10/12 lg:w-6/12 p-3 shadow-lg shadow-blue-800/25 border border-blue-600/10 rounded-2xl flex flex-col-reverse lg:flex-row justify-between items-center lg:items-end gap-1.5">
            <button
              onClick={() => navigate("/Home")}
              className=" px-2 py-.5 lg-p-2 bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-700/30 text-[10px] lg-text-[13px] h-5/12 lg:h-7/12 flex justify-center items-center gap-2"
            >
              <img className="h-6/12 lg:h-8/12" src={arrow}></img>
              <h1>Back to Marketplace</h1>
            </button>
            <h1 className="font-bold text-[30px] lg:text-[40px] text-blue-800">My Profile</h1>
          </div>
        </div>

        <div className=" w-11/12 lg:w-7/12 p-5 border border-blue-600/10 shadow-lg shadow-blue-700/20 rounded-2xl mt-7 flex flex-col-reverse lg:flex-row justify-start gap-3.5 ">
        
          <div className="flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-9 lg:w-7/12 ">
            {user ? (
              <>
                <h1 className="font-bold text-[23px] lg:text-[40px] text-blue-800">
                  {user.name}
                </h1>

                <p className="font-bold text-gray-700 text-[20px] lg:text-[25px] ">
                  {user.university}
                </p>

                <div className="flex flex-col lg:flex-row gap-3.5 text-center">
                  <span className="shadow-lg shadow-black/50 rounded-2xl p-3 text-gray-700 font-bold">
                    {user.email}
                  </span>
                  <span className="shadow-lg shadow-black/50 rounded-2xl p-3 text-gray-700 font-bold ">
                    {user.phone}
                  </span>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}

            <button
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/Home");
              }}
              className="bg-[#f1f4ff] px-4 py-2 rounded-2xl text-blue-600 font-bold text-[16px] shadow-lg shadow-black/40 hover:bg-blue-800  hover:text-white transition duration-300"
            >
              Logout
            </button>
          </div>
         {user?.image && ( <img className=" lg:w-5/12 rounded-2xl bg-cover shadow-lg shadow-black/50" src={user.image}></img>)}
        </div>
      </section>
    </div>
  );
}
