import axios from "axios";
import { useEffect, useState } from "react";
import AllQueryCard from "../components/AllQueryCard";
const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
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
      <div className="mt-10 ml-[483px] flex p-1 overflow-hidden border rounded-lg max-w-min focus-within:ring focus-within:ring-opacity-40 focus-within:border-primaryColor focus-within:ring-secondaryColor">
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
      {/* <div className="space-y-4 bg-queryBanner h-[700px] bg-cover"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-12">
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
      {/* <div className="flex justify-center items-center gap-2 text-3xl mt-10">
        <button
          onClick={handleOneColumn}
          className="px-2 py-2 bg-primaryColor rounded-full text-secondaryColor"
        >
          <TbColumns1></TbColumns1>
        </button>
        <button
          onClick={handleTwoColumn}
          className="px-2 py-2 bg-primaryColor rounded-full text-secondaryColor"
        >
          <TbColumns2></TbColumns2>
        </button>
        <button
          onClick={handleThreeColumn}
          className="px-2 py-2 bg-primaryColor rounded-full text-secondaryColor"
        >
          <TbColumns3></TbColumns3>
        </button>
      </div> */}
    </div>
  );
};

export default Queries;
