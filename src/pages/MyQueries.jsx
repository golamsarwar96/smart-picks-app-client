import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import noData from "../assets/noData.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    const fetchAllQuery = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/queries/${user?.email}`,
        { withCredentials: true }
      );
      const sortedQueries = data.sort((a, b) => b.time - a.time);
      setQueries(sortedQueries);
      // console.log(sortedQueries);
    };
    fetchAllQuery();
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/query/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = queries.filter((query) => query._id !== _id);
              setQueries(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      {queries.length < 0 ? (
        <div className="flex justify-center items-center flex-col">
          <Lottie
            animationData={noData}
            style={{ width: "500px", height: "500" }}
            loop={true}
            autoplay={true}
          ></Lottie>
          <div>
            <h1 className="text-6xl font-bold text-center mt-10">
              No Queries Found
            </h1>
            <Link
              to="/add-queries"
              className="flex justify-center items-center mt-5 "
            >
              <button className="px-10 py-4 bg-primaryColor text-secondaryColor ">
                Add Query
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4 bg-queryBanner h-[700px] bg-cover md:relative">
          <div className="md:absolute md:right-40 md:top-64 flex md:block items-center justify-center">
            <h1 className="text-5xl text-center font-bold w-96 mt-52 md:mt-0 ">
              You have added{" "}
              <span className="bg-primaryColor text-3xl text-secondaryColor px-3 py-2 rounded-full font-bold">
                {queries.length}
              </span>{" "}
              Queries.
            </h1>
            <Link to="/add-queries">
              <button className="absolute md:top-32 font-bold md:right-28 px-10 py-4 bg-primaryColor text-secondaryColor">
                Add Query
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="flex items-center flex-col justify-between p-1">
        <div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            {queries.map((query) => (
              <div className="m-5">
                <div className="card bg-base-100 w-96 shadow-xl">
                  <figure className="p-3">
                    <img
                      className="w-96 rounded-xl h-80 object-cover"
                      src={query.product_photo}
                      alt="Shoes"
                    />
                  </figure>
                  <div className=" items-center text-center p-3">
                    <h2 className="text-3xl font-bold">{query.product_name}</h2>
                    <p className="px-3 py-2 w-1/2 mx-auto bg-primaryColor text-secondaryColor mt-2 font-medium">
                      Brand : {query.product_brand}
                    </p>
                    <h2 className="text-lg mt-5 w-84 mx-auto font-medium">
                      <span className="bg-primaryColor text-secondaryColor px-3 py-1 font-medium">
                        Queries:
                      </span>{" "}
                      {query.query_title}
                    </h2>
                    <p className="text-primaryColor font-normal">
                      Posted On :{" "}
                      {new Date(query.time).toISOString().split("T")[0]}
                    </p>
                    <div className="card-actions flex justify-center items-center mt-5">
                      <Link to={`/query/${query._id}`}>
                        <button className="btn bg-primaryColor text-secondaryColor rounded-3xl px-5 text-base ">
                          View Details
                        </button>
                      </Link>
                      <Link to={`/update/${query._id}`}>
                        <button className="btn bg-primaryColor text-secondaryColor rounded-3xl px-5 text-base ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(query._id)}
                        className="btn bg-primaryColor text-secondaryColor  rounded-3xl px-5 text-2xl "
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
