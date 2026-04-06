import React, { useContext } from "react";
import { AllBookContext } from "../../contexts/BookContext";

const WishListBooks = () => {
  const { wishList } = useContext(AllBookContext);
  console.log(wishList, "wishlist");
  return (
    <div>
      <h2>WishList Books</h2>
    </div>
  );
};

export default WishListBooks;
