import React from "react";
import { Link } from "react-router";

const ArtworkCard = ({ artwork }) => {
  const { _id, title, imageURL, category, artistName } = artwork;
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300">
      <figure className="p-2">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </figure>
      <div className="w-full card-body text-center">
        <h2 className="card-title justify-center">{title}</h2>
        <div className="flex justify-between gap-2 mb-2 leading-relaxed">
            <p className="text-xs">Artist: {artistName}</p>
            <p className="text-xs">Category: {category}</p>
        </div>
        <Link to={`/artworkDetails/${_id}`} className="card-actions">
          <button className="btn btn-primary w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ArtworkCard;
