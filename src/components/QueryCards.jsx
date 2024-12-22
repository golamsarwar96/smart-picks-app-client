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
      console.log(data);
      const sortedQueries = data.sort((a, b) => b.time - a.time);
      console.log(sortedQueries);
      setQueries(sortedQueries);
    };
    fetchAllQuery();
  }, []);
  console.log(queries);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {queries.map((query) => (
        <QueryCard key={query._id} query={query}></QueryCard>
      ))}
    </div>
  );
};

export default QueryCards;
