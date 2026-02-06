import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithGoogle, createUser, updateUserProfile } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 character long and includes at least one uppercase, one Lowercase letter"
      );
      return;
    }

    setError("");
    setSuccess(false);

    createUser(email, password)
      .then(() => {
        //update user profile
        updateUserProfile(name, photo)
          .then(() => {
            setSuccess(true);
            e.target.reset();
            navigate("/");
          })
          .catch((err) => {
            toast.warn(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.warn(err.message);
      });
  };
  const showTogglePass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="py-13">
      <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Register Now</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input outline-0 w-full"
                placeholder="Enter Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input outline-0 w-full"
                placeholder="Enter Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input outline-0 w-full"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input outline-0 w-full"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={showTogglePass}
                  className="btn btn-xs top-2 right-1 absolute"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button className="btn bg-blue-500 mt-4 text-white ">
                Register
              </button>
            </fieldset>
          </form>
           <div className="divider">OR</div>
          <button
            onClick={handleSignInGoogle}
            className="mt-2 mb-2 btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle size={26} />
            Sign In with Google
          </button>
          {success && toast.success("account create successful")}
          {error && <p className="text-red-500">{error}</p>}
          <p className="mt-2">
            Already have an account? Please{" "}
            <Link className="text-blue-500 hover:underline" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
