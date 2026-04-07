import React, { useContext, useEffect, useState } from "react";

import { AllBookContext } from "../../contexts/BookContext";
import Card from "../ui/Card";

const ReadBooks = ({ sortBy }) => {
  const { readList } = useContext(AllBookContext);
  console.log(readList, "unsortedData");
  const [filteredList, setFilteredList] = useState(readList);

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredList(sortedData);
      } else if (sortBy === "rating") {
        const sortedData = [...readList].sort((a, b) => {
          a.rating - b.rating;
        });
        setFilteredList(sortedData);
      }
    }
  }, [sortBy, readList]);

  if (filteredList.length === 0) {
    return (
      <div className="flex items-center justify-center bg-base-300  min-h-[60vh] rounded-lg px-4 md:px-0">
        <h1 className="text-4xl font-bold text-center ">
          No books found in the read list
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-8 px-2 md:px-0">
      {filteredList.map((obj, index) => {
        return <Card obj={obj} key={index} />;
      })}
    </div>
  );
};

export default ReadBooks;
