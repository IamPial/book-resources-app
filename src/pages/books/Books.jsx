import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../../components/ListedBooks/ReadBooks";
import WishListBooks from "../../components/ListedBooks/WishListBooks";

const Books = () => {
  return (
    <div className="container mx-auto mt-14">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks />
        </TabPanel>
        <TabPanel>
          <WishListBooks />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
