import React, { useContext } from "react";
import { AllBookContext } from "../../contexts/BookContext";

const ReadBooks = () => {
  const { readList } = useContext(AllBookContext);
  console.log(readList, "storeBook");
  return (
    <div>
      <h2>Read Books</h2>
    </div>
  );
};

export default ReadBooks;
