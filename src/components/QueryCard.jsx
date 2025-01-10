import { Link } from "react-router-dom";

const QueryCard = ({ query }) => {
  const {
    product_name,
    product_brand,
    query_title,
    product_photo,
    recommendedCount,
    time,
  } = query || {};
  return (
    <div className="m-5 w-80 lg:ml-0 md:ml-7 ml-[53px]">
      <div className="card bg-base-100 shadow-xl">
        <figure className="">
          <img
            className=" rounded-xl h-40 object-cover w-full p-1"
            src={product_photo}
            alt="Shoes"
          />
        </figure>
        <div className=" items-center text-center p-3">
          <h2 className="text-xl font-bold">{product_name}</h2>
          <p className="px-2 py-1 w-3/4 mx-auto bg-primaryColor text-secondaryColor mt-2 font-medium">
            Brand : {product_brand.slice(0, 9)}...
          </p>
          <h2 className="text-base mt-3 w-64 mx-auto font-medium">
            <span className="bg-primaryColor text-secondaryColor px-3 py-1 font-medium">
              Queries:
            </span>{" "}
            {query_title.slice(0, 46)}...
          </h2>

          <div className="card-actions flex justify-center items-center mt-2">
            <Link to="/add-queries">
              <button className="btn bg-primaryColor text-secondaryColor rounded-3xl px-3 py-1 text-sm ">
                Add Query
              </button>
            </Link>
            <p className="px-2 py-1 bg-primaryColor text-secondaryColor font-medium text-sm rounded-xl">
              Recommended {recommendedCount} times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
