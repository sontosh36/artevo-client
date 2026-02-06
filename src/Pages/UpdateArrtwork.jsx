import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateArrtwork = () => {
  const singleArtwork = useLoaderData();
  const { _id, title, category, medium, visibility, description } =
    singleArtwork;
  const navigate = useNavigate();
  const handleUpdateArtwork = (e) => {
    e.preventDefault();

    const updateData = {
      title: e.target.title.value,
      category: e.target.category.value,
      medium: e.target.medium.value,
      description: e.target.description.value,
    };
    fetch(`http://localhost:3000/artwork/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Artwork Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myGallery");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="py-13">
      <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl mb-3 text-center font-semibold">
            Update Artwork
          </h2>
          <form onSubmit={handleUpdateArtwork}>
            <fieldset className="fieldset space-y-2">
              <label className="label text-md">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="input w-full outline-0 focus:border-0 text-md"
                placeholder="Title"
                required
              />
              <label className="label text-md">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input text-md w-full outline-0 focus:border-0"
                placeholder="Category"
                required
              />
              <label className="label text-md">Medium</label>
              <input
                type="text"
                name="medium"
                defaultValue={medium}
                className="input text-md w-full outline-0 focus:border-0"
                placeholder="Medium"
                required
              />
              <label className="label text-md">Descriptions</label>
              <textarea
                type="text"
                name="description"
                cols={10}
                rows={5}
                defaultValue={description}
                className="p-2 resize-none text-md w-full border border-gray-700 rounded-md focus:outline-0"
                required
              />

              <label className="label text-md">Visibility</label>
              <select
                name="visibility"
                defaultValue={visibility}
                className="select select-bordered w-full outline-0"
                required
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>

              <button className="btn bg-blue-500 mt-4 text-white ">
                Update Artwork
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateArrtwork;
