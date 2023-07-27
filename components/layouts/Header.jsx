"use client";
import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-white py-2 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
