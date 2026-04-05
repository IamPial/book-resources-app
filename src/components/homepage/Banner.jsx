import React from "react";
import bookImg from "../../assets/banner-book.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#f3f3f3]  min-h-[70vh] mt-12 container mx-auto rounded-xl py-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-40 xl:gap-80  items-center">
          <img src={bookImg} className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-4xl lg:text-[56px] font-bold font-playfair mb-12 leading-15 lg:leading-21">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] text-xl rounded-lg text-white p-6">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
