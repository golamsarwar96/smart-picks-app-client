import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const links = (
    <div className="flex gap-2 items-center">
      <NavLink className="flex gap-3 p-3 bg-cyan-400  border-none rounded-xl lg:items-center flex-col lg:flex-row  text-white z-10">
        Home
      </NavLink>
      <NavLink to="/add-queries">Add Queries</NavLink>
      <NavLink to="/queries">Queries</NavLink>
      <NavLink to="/recommendations">Recommendations For Me</NavLink>
      <NavLink to="/my-queries">My Queries</NavLink>
      <NavLink to="/my-recommendations">My recommendations</NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <a className="font-logo text-4xl font-extrabold ">
            <i>Smart Picks</i>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn hover:bg-black hover:text-white">
          Login
        </Link>
        <button className="btn" onClick={logOut}>
          Logout
        </button>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Navbar;
