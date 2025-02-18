import React from "react";
import { BiPhone } from "react-icons/bi";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className=' bg-center bg-cover relative mt-[2rem] p-4 md:p-32 mb-[3rem]  bg-[url("/assets/background.jpg")]'>
      {/* {overlay} */}
      <div className="absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0"></div>
      <div className="W-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        {/* {text content} */}
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]">
            DO YOU HAVE ANY DINNER PLAN TODAY?{" "}
            <span className="text-red-700">RESERVE</span> YOUR TABLE
          </h1>
          <p className="text-[17px] mt-[1rem] text-white text-opacity-50">
            lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium
            iste praesentium sit in autem velit, voluptates ex dolorum ea
            necessitatibus
          </p>
          <div className="flex mt-[2rem] items-center space-x-4">
            <div className="w-[3rem] h-[3rem] bg-red-700 rounded-full flex items-center justify-center flex-col">
              <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
            </div>
            <div>
              <h1 className="text-[25px] text-white font-semibold">
                Quick order 24/7
              </h1>
              <h1 className="text-yellow-300 text-[30px] font-bold">
                +123 456 7890
              </h1>
            </div>
          </div>
        </div>
        {/* {reservation} */}
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
