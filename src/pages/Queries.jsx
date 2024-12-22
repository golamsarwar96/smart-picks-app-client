import axios from "axios";
import { useEffect, useState } from "react";
import AllQueryCard from "../components/AllQueryCard";
const Queries = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    const fetchAllQuery = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/add-queries`
      );
      const sortedQueries = data.sort((a, b) => b.time - a.time);
      setQueries(sortedQueries);
      console.log(sortedQueries);
    };
    fetchAllQuery();
  }, []);
  return (
    <div className=" text-center">
      {/* <div className="space-y-4 bg-queryBanner h-[700px] bg-cover"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-12">
        {queries.map((query) => (
          <AllQueryCard key={query._id} query={query}></AllQueryCard>
        ))}
      </div>
    </div>
  );
};

export default Queries;
