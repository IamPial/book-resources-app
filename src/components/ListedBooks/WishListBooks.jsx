import React, { useContext } from "react";
import { AllBookContext } from "../../contexts/BookContext";
import Card from "../ui/Card";

const WishListBooks = () => {
  const { wishList } = useContext(AllBookContext);

  if (wishList.length === 0) {
    return (
      <div className="flex items-center justify-center bg-base-300  min-h-[60vh] rounded-lg px-4 md:px-0">
        <h1 className="text-4xl font-bold text-center ">
          No books found in the wish list
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-8 px-2 md:px-0">
      {wishList.map((obj, index) => {
        return <Card obj={obj} key={index} />;
      })}
    </div>
  );
};

export default WishListBooks;
