import React from "react";
import { useLoaderData } from "react-router";

const ArtworkDetails = () => {
  const artworkData = useLoaderData();
  const {
    title,
    imageURL,
    category,
    artistName,
    description,
    totalArtwork,
    artistPhoto,
    medium
  } = artworkData;

  return (
    <section className="w-11/12 mx-auto bg-base-300 px-4 my-10 rounded-md">
      {/* Artwork + Info */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-7">
        {/* Artwork Image */}
        <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow">
          <img
            src={imageURL}
            alt={title}
            className="h-70 w-200 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Artwork Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold sm:text-4xl pb-6 border-b mb-4">
            {title}
          </h1>

          <div className="flex gap-6">
            <div className="mb-6">
              <p className=" text-sm font-medium">Category: {category}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Medium: {medium}</p>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-lg">Description</h5>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-purple-600 text-white px-6 py-3 cursor-pointer">
              Like
            </button>

            <button className="rounded-lg hover:bg-purple-600 hover:text-white transition duration-200  px-6 py-3 cursor-pointer border border-purple-400">
              Favorite
            </button>
          </div>
        </div>
      </div>

      {/* Artist Card */}
      <div className="mt-10 flex flex-col items-center gap-6 rounded-2xl p-6 md:flex-row md:items-start bg-gray-400">
        <img
          src={artistPhoto}
          alt={artistName}
          className="h-24 w-24 rounded-full object-cover border border-blue-500"
        />

        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold">{artistName}</h4>
          <p className="mt-1">Total Artwork: {totalArtwork}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtworkDetails;
