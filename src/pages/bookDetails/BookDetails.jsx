import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { AllBookContext } from "../../contexts/BookContext";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const findBook = books.find((book) => book.bookId === Number(id));

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = findBook;

  const { handleBookReadBtn, handleWishListBtn } = useContext(AllBookContext);

  return (
    <div className="container mx-auto pt-12">
      <div className="card gap-12 lg:card-side bg-base-100">
        <figure className="flex-1  p-15 rounded-xl bg-[#f3f3f3]">
          <img src={image} alt={bookName} />
        </figure>
        <div className="card-body flex-1 ">
          <div>
            <h2 className="font-bold text-[40px] font-playfair">{bookName}</h2>
            <p className="font-medium text-xl opacity-80 ">By : {author}</p>
          </div>
          <div className="w-full border border-gray-200 mt-2"></div>
          <div>
            <p className="font-medium text-xl opacity-80">{category}</p>
          </div>
          <div className="w-full border  border-gray-200 "></div>
          <p className="text-[16px] leading-7 grow-0 text-gray-600 py-6">
            {" "}
            <span className="font-bold  text-[16px] text-slate-950">
              {" "}
              Review:
            </span>{" "}
            {review}
          </p>
          <div className="pb-6">
            {" "}
            <span className="text-[16px] font-bold mr-5">Tag</span>
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="badge  rounded-full text-[16px] font-medium text-[#23BE0A] bg-[#f4fcf3]"
                >
                  #{tag}
                </div>
              );
            })}
          </div>
          <div className="w-full border  border-gray-200 "></div>
          <div className=" my-6 ">
            <div className="flex  p-2">
              <p className="w-1/2 text-[16px] text-gray-600">
                Number of Pages:
              </p>
              <h2 className="w-1/2 font-semibold text-[16px] text-slate-950">
                {totalPages}
              </h2>
            </div>
            <div className="flex  p-2">
              <p className="w-1/2 text-[16px] text-gray-600">Publisher:</p>
              <h2 className="w-1/2 font-semibold text-[16px] text-slate-950">
                {publisher}
              </h2>
            </div>
            <div className="flex  p-2">
              <p className="w-1/2 text-[16px] text-gray-600">
                Year of Publishing:
              </p>
              <h2 className="w-1/2 font-semibold text-[16px] text-slate-950">
                {yearOfPublishing}
              </h2>
            </div>
            <div className="flex p-2">
              <p className="w-1/2 text-[16px] text-gray-600">Rating:</p>
              <h2 className="w-1/2 font-semibold text-[16px] text-slate-950">
                {rating}
              </h2>
            </div>
          </div>
          <div className="card-actions justify-start mt-10 gap-4">
            <button
              onClick={() => handleBookReadBtn(findBook)}
              className="btn btn-lg rounded-lg "
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishListBtn(findBook)}
              className="btn btn-lg text-white rounded-lg bg-[#50B1C9]"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
