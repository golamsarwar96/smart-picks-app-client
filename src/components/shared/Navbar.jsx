import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { IoBagHandleSharp } from "react-icons/io5";

import navImg from "../../assets/bannerImg/cool-background.png";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // console.log(user);
  const links = (
    <div className="flex gap-2 items-center">
      {user && user?.email ? (
        <div className="flex flex-col md:flex-row text-left md:items-center gap-2 text-black  font-semibold rounded-3xl">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            to="/add-queries"
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
          >
            Add Queries
          </NavLink>
          <NavLink
            to="/queries"
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
          >
            Queries
          </NavLink>
          <NavLink
            to="/recommendations"
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
          >
            Recommendations For Me
          </NavLink>
          <NavLink
            to="/my-queries"
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
          >
            My Queries
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
            to="/my-recommendations"
          >
            My recommendations
          </NavLink>
        </div>
      ) : (
        <div className="flex items-center flex-col md:flex-row gap-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/queries"
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 px-4 py-2 bg-secondaryColor text-primaryColor  border-none  lg:items-center flex-col lg:flex-row "
                : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-secondaryColor"
            }
          >
            Queries
          </NavLink>
        </div>
      )}
    </div>
  );
  return (
    <div className="bg-primaryColor fixed z-10  max-w-screen-2xl w-full top-0 mx-auto">
      <div className="flex items-center justify-center p-3">
        <a className="font-jost md:text-4xl text-3xl text-secondaryColor flex items-center gap-2 font-extrabold ">
          <IoBagHandleSharp /> <i>Smart Picks</i> <IoBagHandleSharp />
        </a>
      </div>
      <div className="flex md:flex-col lg:flex-row justify-center md:gap-1 items-center gap-5 md:mb-5">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-secondaryColor"
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
              className="menu menu-sm dropdown-content bg-primaryColor text-secondaryColor rounded-box z-[10] shadow flex flex-col lg:flex-row"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal">{links}</ul>
        </div>
        <div className="">
          {user && user?.email ? (
            <div className="flex text-sm items-center gap-2 text-white  font-semibold rounded-3xl">
              <img
                referrerPolicy="no-referrer"
                title={user?.displayName}
                className="md:w-10 w-7"
                src={user?.photoURL}
              />
              <button
                className="md:px-4 md:py-2 px-2 py-1 bg-secondaryColor text-primaryColor"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="md:px-4 md:py-2 px-2 py-1 bg-secondaryColor text-primaryColor"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
