import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddArtwork = () => {
  const { users } = use(AuthContext);
  const navigate = useNavigate();
  const handleAddArtwork = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const photo = e.target.photo.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const medium = e.target.medium.value;
    const description = e.target.description.value;
    const dimension = e.target.dimension.value;
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    const visibility = e.target.visibility.value;

    const newArtWork = {
      imageURL: photo,
      title: title,
      category: category,
      medium: medium,
      description: description,
      dimension: dimension,
      price: price,
      visibility: visibility,
      artistName: userName,
      artistEmail: userEmail,
      artistPhoto: users?.photoURL,
      create_at: new Date(),
      totalArtwork: 11,
      likes: 0,
    };
    fetch("https://artevo-server.vercel.app/artworks", {
      method: "POST",
      headers: {
        authorization: `Bearer ${users.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtWork),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Artwork Added!",
            text: "Your artwork has been successfully added",
            confirmButtonColor: "#2563eb",
          });
        }
        e.target.reset();
        navigate("/exploreArtwork");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="py-13">
      <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Add Artworks</h1>
          <form onSubmit={handleAddArtwork}>
            <fieldset className="fieldset space-y-2">
              <label className="label text-md">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full outline-0 focus:border-0 text-md"
                placeholder="Title"
                required
              />
              <label className="label text-md">Image URL</label>
              <input
                type="text"
                name="photo"
                className="text-md input w-full outline-0 focus:border-0"
                placeholder="Image URL"
                required
              />
              <label className="label text-md">Category</label>
              <input
                type="text"
                name="category"
                className="input text-md w-full outline-0 focus:border-0"
                placeholder="Category"
                required
              />
              <label className="label text-md">Medium</label>
              <input
                type="text"
                name="medium"
                className="input text-md w-full outline-0 focus:border-0"
                placeholder="Medium"
                required
              />
              <label className="label text-md">Description</label>
              <textarea
                type="text"
                cols={10}
                rows={3}
                name="description"
                className="text-md w-full p-2 resize-none border border-base-300 rounded-md focus:outline-0"
                placeholder="description"
                required
              />
              <label className="label text-md">Dimensions (optional)</label>
              <input
                type="text"
                name="dimension"
                className="input text-md w-full outline-0 focus:border-0"
                placeholder="dimension"
              />
              <label className="label text-md">Price (optional)</label>
              <input
                type="text"
                name="price"
                className="input text-md w-full outline-0 focus:border-0"
                placeholder="Price"
              />
              <label className="label text-md">Visibility</label>
              <select
                name="visibility"
                className="select select-bordered w-full outline-0"
                required
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full outline-0"
                name="userName"
                defaultValue={users?.displayName || ""}
                readOnly
              />
              <label className="label">User Email</label>
              <input
                type="email"
                className="w-full input outline-0"
                name="userEmail"
                defaultValue={users?.email || ""}
                readOnly
              />
              <button className="btn bg-blue-500 mt-4 text-white ">
                Add Artwork
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtwork;