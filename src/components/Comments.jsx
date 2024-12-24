import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <h1 className="text-5xl">This is comments:{recommendations.length}</h1>
    </div>
  );
};

export default Comments;
