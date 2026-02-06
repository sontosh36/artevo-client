import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ArtworkCard from "../Components/ArtworkCard";

const ExploreArtwork = () => {
  const artworks = useLoaderData();
  const [artwork, setArtwork] = useState(artworks);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setLoading(true);
    fetch(`http://localhost:3000/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setArtwork(data);
        setLoading(false);
      });
  };
  return (
    <div className="max-w-7xl mx-auto py-7 bg-base-300">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">Explore Artworks</h2>
      </div>
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center gap-2 mt-6 mb-10"
      >
        <label className="input rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            name="search"
            type="search"
            className="focus:outline-0"
            placeholder="Search"
          />
        </label>
        <button
          disabled={loading}
          className="btn rounded-full bg-blue-600 px-2"
        >
          {loading ? "Searching.." : "Search"}
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          artwork.map((artwork) => (
            <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ExploreArtwork;
