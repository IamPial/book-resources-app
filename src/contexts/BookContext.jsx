import React, { createContext, useState } from "react";

export const AllBookContext = createContext();

const BookContext = ({ children }) => {
  const [storeBook, setStoreBook] = useState([]);

  const handleBookReadBtn = (currentBook) => {
    const isExist = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      alert("The book is already exist");
    } else {
      setStoreBook([...storeBook, currentBook]);
    }
  };

  const data = {
    handleBookReadBtn,
    storeBook,
    setStoreBook,
  };

  return (
    <AllBookContext.Provider value={data}>{children}</AllBookContext.Provider>
  );
};

export default BookContext;
