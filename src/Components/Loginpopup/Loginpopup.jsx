import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Loginpopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center">
      <form className="w-[max(23vw,330px)] bg-white text-gray-600 flex flex-col gap-6 p-6 rounded-xl shadow-lg">
        
        {/* Title */}
        <div className="flex justify-between items-center text-slate-900">
          <h2 className="text-xl font-semibold">{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-5">
          {currState !== "Login" && (
            <input
              type="text"
              placeholder="Your name"
              required
              className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-emerald-500"
            />
          )}

          <input
            type="email"
            placeholder="Your email"
            required
            className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md text-[15px] transition-all"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms */}
        <div className="flex items-start gap-2 -mt-3 text-sm">
          <input type="checkbox" required className="mt-1 accent-emerald-600" />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {/* Switch */}
        {currState === "Login" ? (
          <p className="text-sm">
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-emerald-600 font-medium cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-emerald-600 font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
