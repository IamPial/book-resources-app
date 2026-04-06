import React, { use } from "react";

import BookCard from "../ui/BookCard";
const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);
  return (
    <div className="container mx-auto py-25">
      <h2 className="font-playfair font-bold text-[40px] mb-9 text-center">
        Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
