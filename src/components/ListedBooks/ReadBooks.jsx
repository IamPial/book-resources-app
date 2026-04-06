import React, { useContext } from "react";

import { AllBookContext } from "../../contexts/BookContext";
import Card from "../ui/Card";

const ReadBooks = () => {
  const { readList } = useContext(AllBookContext);
  console.log(readList, "storeBook");
  return (
    <div className="mt-8 px-2 md:px-0">
      {readList.map((obj, index) => {
        return <Card obj={obj} key={index} />;
      })}
    </div>
  );
};

export default ReadBooks;
