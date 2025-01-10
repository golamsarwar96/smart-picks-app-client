import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login1 from "../../assets/login1.json";
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userSignIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state || "/";
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await userSignIn(email, password);
      // console.log(result);
      toast.success("SUCCESSFULLY LOGGED IN");
      navigate(form, { replace: true });
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google Sign In Successful");
      navigate(form, { replace: true });
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
    // signInWithGoogle()
    //   .then((result) => {

    //     console.log(result.user);
    //     toast.success("Successful");
    //     navigate(form, { replace: true });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error(err.message);
    //   });
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-20 bg-secondaryColor lg:md-52 mt-24">
      <div className="p-5">
        <Lottie animationData={login1} className=""></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form
          onSubmit={handleLogin}
          className="card-body bg-primaryColor text-secondaryColor"
        >
          <h1 className="text-5xl font-bold text-center">
            LOGIN TO SMART PICKS
          </h1>
          <div className="form-control mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-secondaryColor text-primaryColor"
            >
              <FaGoogle></FaGoogle> Sign In With Google
            </button>
          </div>
          <div className="form-control ">
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
              <span className="label-text text-secondaryColor">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label ">
              <a
                href="#"
                className="label-text-alt link link-hover text-secondaryColor"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-secondaryColor text-primaryColor">
              Login
            </button>
          </div>
          <p className="text-center mt-3">
            New to Smart Picks ?{" "}
            <Link
              className="px-5 py-2 bg-secondaryColor text-primaryColor"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
