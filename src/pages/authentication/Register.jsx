import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

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
    <div className="flex items-center justify-center gap-20 mt-10">
      <div>
        <h1 className="text-5xl">LOGIN TO SMART PICKS</h1>
        <div className="form-control mt-6">
          <button onClick={handleGoogleSignIn} className="btn btn-primary">
            Sign In With Google
          </button>
        </div>
        <div className="divider"> Or Register</div>
      </div>
      <div className="card bg-base-100 w-full max-w-sm flex justify-center shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
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
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center ">
            Already have an account ?{" "}
            <Link className="text-blue-800" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
