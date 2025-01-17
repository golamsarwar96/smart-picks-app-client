import axios from "axios";
import React, { useEffect, useState } from "react";
import RcCard from "../components/RcCard";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    const fetchAllRecommendations = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/add-recommendation`
      );

      const sortedQueries = data.sort((a, b) => b.time - a.time);
      setRecommendations(sortedQueries);
      // console.log(sortedQueries);
    };
    fetchAllRecommendations();
  }, []);
  return (
    <div className="bg-primaryColor lg:mt-32 md:mt-56 mt-24">
      <h1 className="md:text-5xl text-3xl py-5 text-center text-secondaryColor font-bold md:mb-10 mb-5 ">
        Recommendations For You
      </h1>
      <div className="text-secondaryColor text-xl font-semibold flex justify-between gap-4 md:gap-0 text-center md:text-left px-7 pb-5">
        <p>Product Photo</p>
        <p>Product Name</p>
        <p>Posted By</p>
      </div>
      <hr />
      <div>
        {recommendations.map((recommendation, idx) => (
          <RcCard key={idx} idx={idx} recommendation={recommendation}></RcCard>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
