import React from "react";
import { FaSearch } from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="bg-white mb-4">
        <div className="form-group w-full relative p-4 py-7 ">
          <input
            type="text"
            className="form-control block w-full h-12 rounded-full px-5 py-1 text-sm outline-none border-2 border-solid border-gray-300"
            id="search"
            placeholder="Enter any key to search..."
          />
          <button
            type="submit"
            className="btn btn-primary absolute top-11 right-9"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
}
