import React, { Suspense } from "react";
import Hero from "../Components/Hero";
import FeaturedArtworks from "../Components/FeaturedArtworks";

const featuredArtworksPromise = fetch(
  "http://localhost:3000/featured-artworks",
).then((res) => res.json());
const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Hero />
      <Suspense fallback={"loading..."}>
        <FeaturedArtworks featuredArtworksPromise={featuredArtworksPromise} />
      </Suspense>
    </div>
  );
};

export default Home;