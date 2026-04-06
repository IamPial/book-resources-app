import React from "react";
import { useLoaderData, useParams } from "react-router";

//  {
//     "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": ["Fiction", "Romance"],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
//   },

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

  return (
    <div className="container mx-auto pt-12">
      <div className="card gap-12 lg:card-side bg-base-100 shadow-sm">
        <figure className="flex-1  p-15 rounded-xl bg-red-200">
          <img src={image} alt={bookName} />
        </figure>
        <div className="card-body flex-1">
          <div>
            <h2 className="font-bold text-[40px] font-playfair">{bookName}</h2>
            <p className="font-medium text-xl opacity-80 ">By : {author}</p>
          </div>
          <div className="w-full border border-gray-200 mt-2"></div>
          <div>
            <p className="font-medium text-xl opacity-80">{category}</p>
          </div>
          <div className="w-full border  border-gray-200 "></div>
          <p>{review}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
