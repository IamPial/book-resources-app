import React from "react";
import { FaRegStar } from "react-icons/fa";
const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100  border border-gray-200 p-6">
      <figure className="bg-[#f3f3f3] p-6">
        <img src={book.image} alt="Shoes" className="h-40 " />
      </figure>
      <div className="card-body p-0 py-6">
        <div className="card-actions mb-4">
          {book.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="badge  rounded-full text-[16px] font-medium text-[#23BE0A] bg-[#f4fcf3]"
              >
                {tag}
              </div>
            );
          })}
        </div>

        <h2 className="card-title text-2xl font-playfair font-bold mb-2">
          {book.bookName}
        </h2>
        <p className="font-medium text-[16px] opacity-80 ">By: {book.author}</p>
        <div className="w-full border border-dashed border-gray-300 mt-2"></div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-[16px] font-medium">{book.category}</h3>
        <div className="flex  items-center gap-2">
          <span className="text-[16px] font-medium">{book.rating}</span>
          <FaRegStar />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
