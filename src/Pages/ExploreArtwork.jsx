import React from "react";
import { useLoaderData } from "react-router";
import ArtworkCard from "../Components/ArtworkCard";

const ExploreArtwork = () => {
  const artworks = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto py-7 bg-base-300">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">Explore Artworks</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreArtwork;
