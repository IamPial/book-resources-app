import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineLibraryBooks } from "react-icons/md";

const Card = ({ obj }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm border border-gray-300 p-4 gap-6 mb-6 ">
      <figure className="rounded-xl bg-[#f3f3f3] px-18 py-13">
        <img src={obj.image} alt={obj.category} className="h-55" />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="font-playfair font-bold text-2xl ">{obj.bookName}</h2>
        <p className="text-[16px] font-medium text-gray-600 grow-0">
          By : {obj.author}
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-3 items-center">
            <span className="text-[16px] font-bold">Tag</span>
            {obj.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="bg-[#f4fcf3] text-[#23BE0A] badge text-[16px]"
                >
                  #{tag}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2 items-center text-[16px] text-gray-600">
            <CiLocationOn className="text-xl" />
            <p>Year of Publishing: {obj.yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <HiOutlineUsers className="text-2xl text-gray-600" />
            <p className="text-[16px] text-gray-600">
              Publisher: {obj.publisher}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineLibraryBooks className="text-2xl text-gray-600" />
            <p className="text-[16px] text-gray-600">Page {obj.totalPages}</p>
          </div>
        </div>
        <div className="w-full border  border-gray-300 "></div>
        <div className="card-actions items-center  ">
          <span className="badge  p-6 text-sm md:text-[16px] text-[#328EFF] bg-[#e0eeff]  rounded-full">
            Category: {obj.category}
          </span>
          <span className="badge p-6 text-sm md:text-[16px] text-[#FFAC33] bg-[#fff3e0]  rounded-full">
            Rating: {obj.rating}
          </span>
          <button className="btn  btn-lg bg-[#23BE0A] text-white rounded-full ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
