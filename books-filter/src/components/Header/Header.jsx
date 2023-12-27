import React, { useState } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";

const Header = ({ books,setBooks1 }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitSearch = () => {
    console.log("search",searchTerm);

    books = books.filter(a => a.title.includes(searchTerm) || a.author.includes(searchTerm));
    console.log(books);
  };
  const handleSearch = (e) => {
    console.log("search",searchTerm);
    setSearchTerm(e.target.value);
    setBooks1(books.filter(a => a.title.includes(e.target.value) || a.author.includes(e.target.value)))
    // books = books.filter(a => a.title.includes(e.target.value) || a.author.includes(e.target.value));
    console.log(books);
  };

  return (
    <>
      <div className="flex justify-center items-center py-32 text-center bg-header dark">
        <div>
          <h1 className="mb-10 text-3xl font-bold text-white">Books Search using React</h1>
          <div className="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center w-10 text-gray-300">
              <FaSearch />
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchTerm}
              onChange={handleSearch}
            />

            <button
              type="button"
              onClick={submitSearch}
              className="bg-white text-black px-3 py-2 rounded-r focus:outline-none"
            >
             < FaSearch/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
