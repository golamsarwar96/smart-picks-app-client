import { Link } from "react-router-dom";

const AllQueryCard = ({ query }) => {
  const {
    _id,
    product_name,
    product_brand,
    query_title,
    product_photo,
    recommendedCount,
    time,
  } = query || {};
  return (
    <div className="m-5">
      <div className="card bg-base-100  shadow-xl">
        <figure className="p-3">
          <img
            className="w-96 rounded-xl h-80 object-cover"
            src={product_photo}
            alt="Shoes"
          />
        </figure>
        <div className=" items-center text-center p-3">
          <h2 className="text-3xl font-bold">{product_name.slice(0, 19)}</h2>
          <p className="px-3 py-2 w-1/2 mx-auto bg-primaryColor text-secondaryColor mt-2 font-medium">
            {product_brand}
          </p>
          <h2 className="text-lg mt-5 w-84 mx-auto font-medium">
            <span className="bg-primaryColor text-secondaryColor px-3 py-1 font-medium">
              Queries:
            </span>{" "}
            {query_title.length > 54
              ? query_title.slice(0, 54) + "..."
              : query_title}
          </h2>
          <p className="text-primaryColor font-normal">
            Posted On : {new Date(time).toISOString().split("T")[0]}
          </p>
          {/* //new Date(time).toISOString().split("T")[0] */}
          <div className="card-actions flex justify-center items-center mt-5">
            <Link to={`/query/${_id}`}>
              <button className="btn bg-primaryColor text-secondaryColor rounded-3xl px-7 text-base ">
                Recommend
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

export default AllQueryCard;
