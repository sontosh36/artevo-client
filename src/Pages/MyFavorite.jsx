import React, { useState, useEffect } from "react";
const MyFavorite = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");

    if (stored) {
      setFavorite(JSON.parse(stored));
    }
  }, []);
  const handleFavorite = (id) => {
    const updatedFavorites = favorite.filter((item) => item._id !== id);

    setFavorite(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <section className="w-11/12 mx-auto my-10">
      <h1 className="text-center text-3xl font-bold mb-6">My Favorites</h1>

      {favorite?.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No favorite artwork yet!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorite?.map((art) => (
            <div key={art._id} className="bg-base-200 p-4 rounded-lg shadow">
              <img
                src={art.imageURL}
                alt={art.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-center text-xl font-semibold mt-3">
                {art.title}
              </h2>
              <div className="flex justify-around gap-6 items-center py-3">
                <p className="text-xs">Artist: {art.artistName}</p>
                <p className="text-xs">Category: {art.category}</p>
              </div>
              <button
                onClick={() => handleFavorite(art._id)}
                className="rounded-lg px-6 py-3 cursor-pointer bg-purple-400 w-full"
              >
                Unfavorite
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyFavorite;
