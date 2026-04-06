import React, { useContext } from "react";
import { AllBookContext } from "../../contexts/BookContext";

const Books = () => {
  const { storeBook } = useContext(AllBookContext);
  console.log(storeBook, "storeBook");
  return (
    <div>
      <h1 className="text-2xl bg-red-600">Books</h1>
    </div>
  );
};

export default Books;
