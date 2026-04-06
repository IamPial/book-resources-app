import React, { useContext } from "react";
import { AllBookContext } from "../../contexts/BookContext";
import Card from "../ui/Card";

const WishListBooks = () => {
  const { wishList } = useContext(AllBookContext);
  console.log(wishList, "wishlist");
  return (
    <div className="mt-8 px-2 md:px-0">
      {wishList.map((obj, index) => {
        return <Card obj={obj} key={index} />;
      })}
    </div>
  );
};

export default WishListBooks;
