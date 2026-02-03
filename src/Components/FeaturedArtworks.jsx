import React, { use } from "react";
import ArtworkCard from "./ArtworkCard";

const FeaturedArtworks = ({ featuredArtworksPromise }) => {
  const artworks = use(featuredArtworksPromise);

  return (
    <div>
      <div className="py-9 text-center">
        <h2 className="font-bold text-xl md:text-2xl mb-4">
          Features <span className="text-purple-800"> Artworks</span>
        </h2>
        <div className="px-2 py-4 bg-base-300 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork._id} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtworks;
