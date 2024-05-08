import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSpeed } from "react-icons/md";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import scroller from "./scroll";
// import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Carosel = () => {
  const ref = useRef();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".card, .video "));

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale: 0.8,
          duration: 4,
          z: -50,
          scrollTrigger: {
            trigger: el,
            start: "top =100",
            end: "top =-200",
            scrub: true,
            // markers: true,
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(el, {
        duration: 4,
        y: el.classList.contains("video") ? 250 : 0,
        x: el.classList.contains("video") ? -70 : 50,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top =100",
          end: "top =-100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(".card2, .card3, .card4")
    );

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale: 0.8,
          duration: 4,
          x: -370,
          scrollTrigger: {
            trigger: el,
            start: "top +=200",
            end: "top -=300",
            scrub: {
              ease: "power1.inOut",
              duration: 4,
            },
            // markers: true,
            toggleActions: "play none play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen w-full  ">
      <div className="text pb-10 pt-10">
        <h1 className="text-6xl font-bold text-center mb-10">
          The{" "}
          <button className="px-7  text-center  bg-green-100 rounded-full border-none ">
            <span className=" text-green-700  inline-block  ">
              <MdOutlineSpeed className=" inline-block mr-2  mb-2 text-5xl  " />
            </span>
            <span className=" text-green-700 text-5xl font-semibold ">
              fast
            </span>
          </button>{" "}
          way to do <br />
          things online
        </h1>
      </div>
      <div id="main" className=" w-auto h-screen ">
        <div
          ref={ref}
          className="card relative h-screen w-[87%] rounded-[30px] border border-1 border-zinc-300 flex items-start justify-center py-24 gap-16 overflow-hidden"
        >
          <div
            ref={ref}
            className="video h-screen w-full bg-zinc-100 absolute   top-0"
          >
            <video
              autoPlay
              loop
              muted
              src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm"
            ></video>
          </div>
          <h3 className="text-3xl font-bold">
            Prioritize <br /> performance
          </h3>
          <p className="tracking-tighter text-l text-zinc-500">
            Chrome is built for performance. Optimize your experience with{" "}
            <br />
            features like Energy Saver and Memory Saver.
          </p>
        </div>

        <div
          ref={ref}
          className="card2 relative h-screen w-[87%] rounded-[30px] bg-yellow-200 border border-1 border-zinc-300 flex items-start justify-center py-24 gap-16 overflow-hidden"
        >
          <div className="h-screen w-full bg-yellow-200 absolute   top-[50%]">
            <img
              src="https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop-2x.webp"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-60  ">
            <h3 className="text-3xl font-bold">
              Stay on top <br /> of tabs
            </h3>
            <p className="tracking-tighter text-lg text-zinc-500">
              Chrome has tools to help you manage the tabs you’re not <br />{" "}
              quite ready to close. Group, label, and color code your tabs to{" "}
              <br /> stay organized and work faster.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="card3  relative h-screen w-[87%] max-w-[87%]: rounded-[30px] bg-green-600 border border-1 border-zinc-300  flex items-start justify-center overflow-hidden"
        >
          <div className="pl-16 w-[35%] h-screen pt-16">
            <h3 className="text-3xl font-bold text-white">
              Optimized for <br /> your device
            </h3>
            <p className="tracking-tighter text-lg text-white  mt-10">
              Chrome is built to work with your <br /> device across platforms.
              That means <br /> a smooth experience on whatever <br /> you’re
              working with.
            </p>
            <div className="h-[210px] w-[155px] p-7 rounded-2xl bg-white mt-20 bottom-0">
              <img
                src="https://www.google.com/chrome/static/images/campaigns/chrome-download/qr-code-2x.webp"
                alt=""
              />

              <p className="text-sm text-center text-zinc-600 mt-3">
                Scan for the <br />
                Chrome app
              </p>
            </div>
          </div>
          <div className="h-screen w-[65%]  top-[0%]">
            <img
              src="https://www.google.com/chrome/static/images/homepage/fast/devices_desktop-2x.webp"
              alt=""
            />
          </div>
        </div>

        <div
          ref={ref}
          className="card4  border border-1 border-zinc-300 relative h-screen w-[87%] rounded-[30px] bg-blue-50 flex items-start justify-center py-24 gap-16 overflow-hidden"
        >
          <div className="h-screen w-full bg-blue-100  absolute   top-[40%]">
            <img
              className=" h-[80%] w-full bg-blue-100"
              src="https://www.google.com/chrome/static/images/homepage/fast/update_tablet-2x.webp"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-60 bg-blue-50  ">
            <h3 className="text-3xl font-bold">
              Automatic <br /> updates
            </h3>
            <p className="tracking-tighter text-xl text-zinc-500">
              There’s a new Chrome update every four weeks, making it <br />{" "}
              easy to have the newest features and a faster, safer browser.
            </p>
          </div>
        </div>
      </div>
      <div className="buttons w-[350px] h-[100px]   ">
        <button
          // onClick={scroller}
          className="px-2 float-end  font-bolder  rounded-full text-[40px] text-blue-700 py-2 bg-blue-100"
        >
          <IoIosArrowForward />
        </button>
        <button
          // onClick={scrollLeft}
          className="px-2 float-end font-bolder text-[40px]  mr-4 rounded-full  text-blue-700 py-2 bg-blue-100"
        >
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
};

export default Carosel;
