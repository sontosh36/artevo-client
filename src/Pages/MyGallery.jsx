import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const MyGallery = () => {
  const { users } = use(AuthContext);
  const [artwork, setArtwork] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (users?.email) {
      fetch(`https://artevo-server.vercel.app/my-artworks?email=${users.email}`)
        .then((res) => res.json())
        .then((data) => {
          setArtwork(data);
          setLoading(false);
        });
    }
  }, [users?.email]);

  const handleDeleteBtn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artevo-server.vercel.app/artwork/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Artwork has been deleted.",
                icon: "success",
              });
              const remainingArt = artwork.filter(
                (artworks) => artworks._id !== _id,
              );
              setArtwork(remainingArt);
            }
          });
      }
    });
  };
  if (loading) {
    <div className="max-w-7xl mx-auto col-span-full flex justify-center items-center py-20">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>;
  }
  return (
    <div className="w-11/12 mx-auto py-10 bg-base-400">
      <h2 className="text-center font-bold text-3xl mb-5">My Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {artwork.length === 0 ? (
          <p className="col-span-full text-center text-xl font-semibold text-gray-500">
            No artwork added yet
          </p>
        ) : (
          artwork.map((data) => (
            <div key={data._id} data={data}>
              <div className="card bg-base-300 px-4 py-2 shadow-lg hover:shadow-xl">
                <img
                  src={data.imageURL}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt={data.title}
                />
                <p className="font-medium text-center text-xl">{data.title}</p>
                <div className="flex justify-between gap-4 pt-4">
                  <p className="text-xs">Category: {data.category}</p>
                  <p className="text-xs"> Medium: {data.medium}</p>
                </div>
                <p className="text-center py-3">Likes: {data.likes}</p>
                <div className="flex justify-between gap-4 pb-4">
                  <Link
                    to={`/update-artwork/${data._id}`}
                    className="bg-blue-500 px-3 py-2 cursor-pointer rounded-lg"
                  >
                    Update
                  </Link>
                  <Link
                    to={`/artworkDetails/${data._id}`}
                    className="bg-purple-400 px-3 py-2 cursor-pointer rounded-lg"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleDeleteBtn(data._id)}
                    className="bg-pink-500 px-3 py-2 cursor-pointer rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyGallery;
