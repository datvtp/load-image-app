import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="border-b p-5 flex justify-between items-center">
      <span className="font-bold">Products App</span>

      <Navigation />
    </header>
  );
};

export default Header;
