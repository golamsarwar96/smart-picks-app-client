import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { IoBagHandleSharp } from "react-icons/io5";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="footer footer-center bg-[#ffeacb] text-base-content rounded p-10">
      <div className="flex items-center justify-center">
        <a className="font-jost md:text-5xl text-4xl text-[#303e39] flex items-center gap-2 font-extrabold ">
          <IoBagHandleSharp /> <i>Smart Picks</i> <IoBagHandleSharp />
        </a>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <div className="flex gap-2 items-center">
          {user && user?.email ? (
            <div className="flex flex-col md:flex-row text-left md:items-center gap-2 text-black  font-semibold rounded-3xl">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                to="/add-queries"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
                }
              >
                Add Queries
              </NavLink>
              <NavLink
                to="/queries"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
                }
              >
                Queries
              </NavLink>
              <NavLink
                to="/recommendations"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
                }
              >
                Recommendations For Me
              </NavLink>
              <NavLink
                to="/my-queries"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
                }
              >
                My Queries
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
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
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                to="/queries"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 px-4 py-2 bg-[#25302c] text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row "
                    : "flex gap-3 px-4 py-2 hover:bg-[#25302c] hover:text-[#D6BD98]  border-none  lg:items-center flex-col lg:flex-row  text-[#25302c]"
                }
              >
                Queries
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      <nav className="flex items-center">
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaLinkedin className="text-3xl"></FaLinkedin>
          </a>
          {/* <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a> */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Smart
          Picks Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
