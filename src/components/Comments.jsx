import axios from "axios";
import React, { useEffect, useState } from "react";
import AllQueryCard from "./AllQueryCard";

const Comments = ({ id }) => {
  const [recommendations, setRecommendations] = useState([]);
  console.log(id);
  useEffect(() => {
    const fetchAllRecommendations = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/add-recommendation`
      );
      console.log(data);

      const filtered = [...data].filter((item) => item.queryID === id);
      console.log(filtered);
      const sortedQueries = filtered.sort((a, b) => b.time - a.time);
      setRecommendations(sortedQueries);
      console.log(sortedQueries);
    };
    fetchAllRecommendations();
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-secondaryColor text-center font-bold font-logo">
        {recommendations.length} More People Recommended
      </h1>
      <div className="mt-10 bg-textColor w-[90%] p-10 mx-auto">
        {recommendations.map((recommendation) => (
          <div className="flex ">
            <div className="">
              <img
                className="w-48 h-32 object-contain mb-10"
                src={recommendation.rc_product_photo}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-secondaryColor">
                {recommendation.rc_product_name}
              </h1>
              <p className="text-xl font-semibold text-secondaryColor mt-3">
                <span className="px-3 py-1 bg-primaryColor text-secondaryColor">
                  Query :
                </span>{" "}
                {recommendation.recommendation_title}
              </p>
              <p className="text-xl font-semibold text-secondaryColor mt-3">
                <span className="px-3 py-1 bg-primaryColor text-secondaryColor">
                  Reason:
                </span>{" "}
                {recommendation.recommended_reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
