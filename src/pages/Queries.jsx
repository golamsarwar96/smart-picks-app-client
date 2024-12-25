import axios from "axios";
import { useEffect, useState } from "react";
import AllQueryCard from "../components/AllQueryCard";
import { TbColumns1, TbColumns2, TbColumns3 } from "react-icons/tb";
const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [column, setColumn] = useState(3);
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
  }, [search]);
  return (
    <div className=" text-center">
      <div className="flex items-center justify-between">
        <div className="mt-10 flex p-1 overflow-hidden border rounded-lg max-w-min focus-within:ring focus-within:ring-opacity-40 focus-within:border-primaryColor focus-within:ring-secondaryColor">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-secondaryColor uppercase transition-colors duration-300 transform bg-primaryColor rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
        <div className="flex gap-2 mt-10">
          <button
            onClick={() => setColumn(1)}
            className="px-[18px] py-4 font-bold bg-primaryColor text-secondaryColor rounded-full"
          >
            <TbColumns1 className="text-xl"></TbColumns1>
          </button>
          <button
            onClick={() => setColumn(2)}
            className="px-[18px] py-4 font-bold bg-primaryColor text-secondaryColor rounded-full"
          >
            <TbColumns2 className="text-xl"></TbColumns2>
          </button>
          <button
            onClick={() => setColumn(3)}
            className="px-[18px] py-4 font-bold bg-primaryColor text-secondaryColor rounded-full"
          >
            <TbColumns3 className="text-xl"></TbColumns3>
          </button>
        </div>
      </div>
      <div
        className={`grid gap-4 ${
          column === 3
            ? "grid-cols-3"
            : column === 2
            ? "grid-cols-2"
            : "grid-cols-1"
        } gap-3 my-12`}
      >
        {queries
          .filter((query) => {
            return search.toLowerCase() === ""
              ? true
              : query.product_name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                  query.product_brand
                    .toLowerCase()
                    .includes(search.toLowerCase());
          })
          .map((query) => (
            <AllQueryCard key={query._id} query={query}></AllQueryCard>
          ))}
      </div>
    </div>
  );
};

export default Queries;
