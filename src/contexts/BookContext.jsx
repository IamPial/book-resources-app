import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AllBookContext = createContext();

const BookContext = ({ children }) => {
  const [storeBook, setStoreBook] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleBookReadBtn = (currentBook) => {
    const isExist = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      toast.error("The book is already exist");
    } else {
      toast.success(`${currentBook.bookName} is added to the read list`);
      setStoreBook([...storeBook, currentBook]);
    }
  };

  const handleWishListBtn = (currentBook) => {
    const isExistReadBook = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistReadBook) {
      toast.error("Already the book is exist in read list");
      return;
    }

    const isExist = wishList.find((book) => book.bookId === currentBook.bookId);
    if (isExist) {
      toast.error("The book is already exist");
    } else {
      toast.success(`${currentBook.bookName} is added to the wishlist`);
      setWishList([...wishList, currentBook]);
    }
  };

  const data = {
    handleBookReadBtn,
    storeBook,
    setStoreBook,
    handleWishListBtn,
    wishList,
    setWishList,
  };

  return (
    <AllBookContext.Provider value={data}>{children}</AllBookContext.Provider>
  );
};

export default BookContext;
