import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    const referrer = document.referrer;
    const isInternal = referrer.includes(window.location.host);
    if (isInternal) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  
  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={handleBack}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={handleBack}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            onClick={() =>
              window.open("https://www.spotify.com/in-en/premium", "_blank")
            }
          >
            Explore Premium
          </p>
          <p
            className="bg-black px-3 py-1 rounded-2xl text-[15px] cursor-pointer"
            onClick={() =>
              window.open("https://open.spotify.com/download", "_blank")
            }
          >
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            S
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
