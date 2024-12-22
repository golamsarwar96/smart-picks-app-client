import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { userSignIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const result = await userSignIn(email, password);
      console.log(result);
      toast.success("SUCCESSFULLY LOGGED IN");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="flex justify-center border-2 items-center gap-20 mt-10">
      <div>
        <h1 className="text-5xl">LOGIN TO SMART PICKS</h1>
        <div className="form-control mt-6">
          <button onClick={handleGoogleSignIn} className="btn btn-primary">
            Sign In With Google
          </button>
        </div>
        <div className="divider"> Or Login</div>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center">
            New to Smart Picks ?{" "}
            <Link className="text-blue-800" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
