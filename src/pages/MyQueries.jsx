import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import noData from "../assets/noData.json";
import AllQueryCard from "../components/AllQueryCard";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    const fetchAllQuery = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/queries/${user?.email}`
      );
      const sortedQueries = data.sort((a, b) => b.time - a.time);
      setQueries(sortedQueries);
      console.log(sortedQueries);
    };
    fetchAllQuery();
  }, [user]);

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
              <AllQueryCard key={query.id} query={query} /> // Ensure query has a unique id
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
