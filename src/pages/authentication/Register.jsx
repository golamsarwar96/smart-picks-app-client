import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import login2 from "../../assets/login2.json";
import login3 from "../../assets/login3.json";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { userRegister, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    try {
      const result = await userRegister(email, password);
      // console.log(result);
      await updateUserProfile(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });
      toast.success("Successfully Created User");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        toast.success("Successful");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-20 bg-secondaryColor">
      <div>
        <Lottie animationData={login3}></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm flex justify-center shadow-2xl">
        <form
          onSubmit={handleRegister}
          className="card-body bg-primaryColor text-secondaryColor"
        >
          <h1 className="text-5xl text-center font-bold">
            REGISTER TO SMART PICKS
          </h1>
          <div className="form-control mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-secondaryColor text-primaryColor"
            >
              <FaGoogle></FaGoogle> Sign In With Google
            </button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondaryColor">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondaryColor">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondaryColor">Email</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondaryColor">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-secondaryColor text-primaryColor">
              Register
            </button>
          </div>
          <p className="text-center mt-3 ">
            Already have an account ?{" "}
            <Link
              className="px-5 py-2 bg-secondaryColor text-primaryColor"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
