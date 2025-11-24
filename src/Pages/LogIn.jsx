import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LogIn = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    signInUser(email, password)
      .then(() => {
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const forgetPass = () => {};
  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.warn(err.message);
      });
  };
  return (
    <div className="py-13">
      <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login now</h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input outline-none w-full"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={togglePassword}
                  className="btn btn-xs top-2 right-1 absolute"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div>
                <button onClick={forgetPass} className="link link-hover">
                  Forgot password?
                </button>
              </div>
              <button className="btn bg-blue-500 text-white font-semibold mt-4">
                Login
              </button>
            </fieldset>
          </form>
           <div className="divider">OR</div>
          <button
            onClick={handleSignInGoogle}
            className="mt-2 btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle size={26} />
            Sign In with Google
          </button>

          {error && <p className="text-red-500">{error}</p>}
          <p className="mt-2">
            New to our Website? Please{" "}
            <Link className="text-blue-500 hover:underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
