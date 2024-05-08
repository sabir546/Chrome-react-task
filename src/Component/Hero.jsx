import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className="hero flex flex-col justify-center text-center items-center mt-10">
        <img
          className="w-24  rounded-full"
          src="https://th.bing.com/th/id/OIP.NEGLTvFMH1Y99r66zk0JKAHaHa?rs=1&pid=ImgDetMain"
          alt=""
        />

        <h1 className="text-7xl font-bold tracking-tighter mb-6 list-outside">
          The browser <br /> built to be{" "}
          <span className="inline-block relative text-5xl overflow-hidden  text-center px-14 py-4 rounded-full bg-green-200">
            <span>
              <MdOutlineSpeed className="inline-block opacity-0 text-6xl mr-3 -mt-2 text-green-700" />
            </span>
            <span className="text-green-700  opacity-0">fast</span>
            {/* <p className="absolute animate-spin -top-10 translate-y-16 duration-400">
  <span>
    <MdOutlineSpeed className="inline-block text-7xl mr-3 -mt-2 text-green-700" />
  </span>
  <span className="text-green-700">fast</span>
</p>

<p id="animate" className="absolute animate-spin -top-10 translate-y-16 duration-700 ease-linear delay-2000">
  <span>
    <MdHealthAndSafety className="inline-block text-7xl mr-3 -mt-2 text-blue-500" />
  </span>
  <span className="text-blue-500">fast</span>
</p> */}
            <p className="absolute animate-move-up-first">
              <span>
                <MdOutlineSpeed className="inline-block text-7xl mr-3 -mt-2 text-green-700" />
              </span>
              <span className="text-green-700">fast</span>
            </p>

            <p id="animate" className="absolute animate-move-up-second mt-3">
              <span>
                <MdHealthAndSafety className="inline-block text-7xl mr-3  text-blue-500" />
              </span>
              <span className="text-blue-500 ">fast</span>
            </p>
          </span>
        </h1>

        <button className=" flex items-center justify-center h-20 w-72 text-xl gap-4 font-semibold rounded-full text-center text-white bg-blue-500 hover:bg-blue-700 cursor-pointer transition-colors duration-200">
          <MdOutlineFileDownload className="text-3xl" />
          <p>Download Chrome</p>
        </button>
      </div>
      <div className="text-center text-sm text-gray-600">
        <p className="mb-5 mt-3">For Windows 11/10 64-bit.</p>
        <div className=" flex items-center justify-center gap-4  ">
          <input className="w-6 h-5 -mt-4" type="checkbox" />
          <div className="">
            <p className="">
              Help make Google Chrome better by automatically sending usage
              statistics and crash <br />{" "}
            </p>
            <p className="-ml-64 mb-5">
              reports to Google.{" "}
              <span className="text-blue-600">What are crash reports?</span>
            </p>
          </div>
        </div>

        <p>
          By downloading Chrome, you agree to the{" "}
          <span className="text-blue-600">Google Terms of Service</span> and{" "}
          <br />
          <span className="text-blue-600">
            {" "}
            Chrome and ChromeOS Additional Terms of Service
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
