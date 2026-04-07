import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown } from "react-icons/io";
import ReadBooks from "../../components/ListedBooks/ReadBooks";
import WishListBooks from "../../components/ListedBooks/WishListBooks";

const Books = () => {
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-[#f3f3f3] py-8 flex justify-center items-center rounded-lg">
        <h2 className="text-3xl font-bold">Books</h2>
      </div>

      <div className="flex justify-center my-14">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] rounded-lg text-white items-center btn-lg"
          >
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortBy("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortBy("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks sortBy={sortBy} />
        </TabPanel>
        <TabPanel>
          <WishListBooks sortBy={sortBy} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
