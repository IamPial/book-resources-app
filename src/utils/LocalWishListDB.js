const getAllWishListBook = () => {
  const allWishList = localStorage.getItem("wishList");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const addAllWishListBook = (book) => {
  const allBooks = getAllWishListBook();
  const isExistBook = allBooks.find((bk) => bk.bookId === book.bookId);

  if (!isExistBook) {
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};

export { getAllWishListBook, addAllWishListBook };
