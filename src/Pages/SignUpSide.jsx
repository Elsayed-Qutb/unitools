import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUpSide() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const handleImage = (file) => {
  const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (
      !name ||
      !email ||
      !phone ||
      !university ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields ");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match ");
      return;
    }

    const user = {
      name,
      email,
      phone,
      university,
      password,
      image,
    };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/profile");
  };
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
                onChange={(e) => setName(e.target.value)}
                class="block w-full text-sm h-[50px] px-4 bg-white rounded-[8px] border border-blue-200"
                placeholder="Full name"
              />
            </div>

            <div id="input" class="relative">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                class="block w-full text-sm h-[50px] px-4 bg-white rounded-[8px] border border-blue-200"
                placeholder="E-mail"
              />
            </div>

            <div id="input" class="relative">
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                class="block w-full text-sm h-[50px] px-4 bg-white rounded-[8px] border border-blue-200"
                placeholder="Phone"
              />
            </div>

            <div id="input" class="relative">
              <input
                type="text"
                onChange={(e) => setUniversity(e.target.value)}
                class="block w-full text-sm h-[50px] px-4 bg-white rounded-[8px] border border-blue-200"
                placeholder="University name"
              />
            </div>

            <div id="input" class="relative">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                class="block w-full text-sm h-[50px] px-4 bg-white rounded-[8px] border border-blue-200"
                placeholder="Password"
              />
            </div>
            <div id="input" class="relative">
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                class="block w-full text-sm h-[50px] px-4 bg-white rounded-[8px] border border-blue-200"
                placeholder="Confirm Password"
              />
            </div>
            <div id="input" class="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImage(e.target.files[0])}
                class="block w-full text-sm h-[50px] px-4 bg-white rounded-[8px] border border-blue-200"
              />
            </div>
          </div>
        </div>

        <div class="sm:flex flex-row-reverse flex justify-center gap-4">
          <button
            onClick={handleSubmit}
            className="w-fit rounded-lg text-sm px-5 py-2 h-[50px] bg-blue-700 hover:bg-black text-white"
            type="button"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/Home")}
            class="w-fit rounded-lg text-sm px-5 py-2 h-[50px] border hover:bg-black hover:text-white"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
