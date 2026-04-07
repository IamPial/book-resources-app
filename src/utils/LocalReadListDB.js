const getAllReadListBook = () => {
  const allReadList = localStorage.getItem("readList");

  if (allReadList) return JSON.parse(allReadList);

  return [];
};

const addAllReadListBook = (book) => {
  const allBooks = getAllReadListBook();
  const isExistBook = allBooks.find((bk) => bk.bookId === book.bookId);

  if (!isExistBook) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

export { getAllReadListBook, addAllReadListBook };
