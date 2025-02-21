import axios from "axios";
import { useEffect, useState } from "react";
import QueryCard from "./QueryCard";

const QueryCards = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    const fetchAllQuery = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/add-queries`
      );
      const sortedQueries = data.sort((a, b) => b.time - a.time);
      setQueries(sortedQueries);
      // console.log(sortedQueries);
    };
    fetchAllQuery();
  }, []);
  return (
    <div className="lg:mt-36 mt-32 text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-primaryColor ">
          Pick From Our Feature Page
        </h1>
        <p className="w-[80%] mx-auto font-semibold text-primaryColor ">
          We offer you the best products and best recommendation so that you
          don't have to worry about your next purchase.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-12 items-center justify-center lg:ml-9">
        {queries.slice(0, 8).map((query) => (
          <QueryCard key={query._id} query={query}></QueryCard>
        ))}
      </div>
    </div>
  );
};

export default QueryCards;
