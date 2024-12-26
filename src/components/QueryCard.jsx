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
    <div className="m-5">
      <div className="card bg-base-100 shadow-xl">
        <figure className="p-3">
          <img
            className="w-96 rounded-xl h-80 object-cover"
            src={product_photo}
            alt="Shoes"
          />
        </figure>
        <div className=" items-center text-center p-3">
          <h2 className="text-3xl font-bold">{product_name}</h2>
          <p className="px-3 py-2 w-1/2 mx-auto bg-primaryColor text-secondaryColor mt-2 font-medium">
            Brand : {product_brand}
          </p>
          <h2 className="text-lg mt-5 w-84 mx-auto font-medium">
            <span className="bg-primaryColor text-secondaryColor px-3 py-1 font-medium">
              Queries:
            </span>{" "}
            {query_title}
          </h2>

          <div className="card-actions flex justify-between items-center mt-5">
            <Link to="/add-queries">
              <button className="btn bg-primaryColor text-secondaryColor rounded-3xl px-7 text-base ">
                Add Query
              </button>
            </Link>
            <p className="px-3 py-1 bg-primaryColor text-secondaryColor mt-2 font-medium rounded-xl">
              Recommended {recommendedCount} times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
