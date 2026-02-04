import React, { Suspense } from "react";
import Hero from "../Components/Hero";
import FeaturedArtworks from "../Components/FeaturedArtworks";

const featuredArtworksPromise = fetch(
  "http://localhost:3000/featured-artworks",
).then((res) => res.json());
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Hero />
      <Suspense fallback={"loading loading-dots"}>
        <FeaturedArtworks featuredArtworksPromise={featuredArtworksPromise} />
      </Suspense>
    </div>
  );
};

export default Home;