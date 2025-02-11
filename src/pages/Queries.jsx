import axios from "axios";
import { useEffect, useState } from "react";
import AllQueryCard from "../components/AllQueryCard";
import { TbColumns1, TbColumns2, TbColumns3 } from "react-icons/tb";
import { Link } from "react-router-dom";
const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  // const [column, setColumn] = useState(3);
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
  }, [search]);

  const handleSort = () => {
    const sortedQueries = [...queries].sort(
      (a, b) => b.recommendedCount - a.recommendedCount
    );
    setQueries(sortedQueries);
  };
  return (
    <div className=" text-center lg:mt-32 md:mt-44 mt-24 bg-primaryColor py-10 md:px-5 pt-10">
      <div className="flex items-center justify-between flex-col md:flex-row px-6">
        <div className="mt-10 flex p-2 overflow-hidden border rounded-lg max-w-min focus-within:ring focus-within:ring-opacity-40 focus-within:border-primaryColor focus-within:ring-secondaryColor">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-3 md:px-4 py-3 text-sm font-medium tracking-wider text-secondaryColor uppercase transition-colors duration-300 transform bg-primaryColor rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
        <div className="mt-10">
          <button
            onClick={handleSort}
            className="btn bg-primaryColor text-secondaryColor"
          >
            Sort By Popularity
          </button>
        </div>

        {/* <div className="flex gap-2 mt-10 ">
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
        </div> */}
      </div>
      {/* {`grid gap-4 ${
          column === 3
            ? "lg:grid-cols-3"
            : column === 2
            ? "grid-cols-2"
            : "grid-cols-1"
        } gap-3 my-12 md:grid-col-2 grid-cols-1`} */}
      <div className="my-12 bg-primaryColor grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* <table className="table"> */}
        {/* head */}
        {/* <thead className="text-secondaryColor">
            <tr className="md:text-lg text-sm">
              <th>REC</th>
              <th>Product Image</th>
              <th>Product Name</th> */}
        {/* <th>Query</th> */}
        {/* <th>Recommended</th>
              <th>Brand</th>
              <th>Posted At</th> */}

        {/* <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-secondaryColor text-sm">
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
              .map((query, idx) => (
                <tr key={idx}>
                  <th>{query?.recommendedCount}</th>
                  <td>
                    <img
                      className="w-20 h-16 object-cover"
                      src={query?.product_photo}
                    />
                  </td>
                  <td>{query?.product_name}</td> */}
        {/* <td>{query?.query_title}</td> */}
        {/* <td>{query?.recommendedCount} times</td>
                  <td>{query?.product_brand}</td>
                  <td>
                    <p className=" font-normal">
                      {new Date(query?.time).toISOString().split("T")[0]}
                    </p>
                  </td> */}
        {/* <td>
                    <Link to={`/query/${query?._id}`}>
                      <button className="btn bg-primaryColor text-secondaryColor rounded-3xl md:px-7 px-2 text-xs ">
                        Recommend
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table> */}
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
