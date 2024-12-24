import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import Comments from "./Comments";

const QueryDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [query, setQuery] = useState({});
  useEffect(() => {
    const fetchQueryData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/query/${id}`
      );
      setQuery(data);
      console.log(data);
    };
    fetchQueryData();
  }, [id]);

  const handleRecommendations = async (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendation_title = form.recommendation_title.value;
    const rc_product_name = form.rc_product_name.value;
    const rc_product_photo = form.rc_product_photo.value;
    const recommended_reason = form.recommended_reason.value;
    const queryID = query._id;
    const queryTitle = query.query_title;
    const productName = query.product_name;
    const userEmail = query?.buyer?.user_email;
    const userName = query?.buyer?.user_name;
    const rc_email = user?.email;
    const rc_name = user?.displayName;
    const time = Date.now();
    const day = new Date(time);

    console.log(time.toString());

    const recommendationData = {
      recommendation_title,
      rc_product_name,
      rc_product_photo,
      recommended_reason,
      queryID,
      queryTitle,
      productName,
      userEmail,
      userName,
      rc_email,
      rc_name,
      day,
      time,
    };
    console.log(recommendationData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-recommendation`,
        recommendationData
      );
      console.log(data);
      toast.success("Query added successfully");
      form.reset();
      navigate("/queries");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="bg-primaryColor">
      {/* user Information */}
      <h1 className="text-5xl text-center font-bold pt-3 pl-5 text-secondaryColor">
        Query Posted By,
      </h1>
      <div className="flex justify-between items-center p-7 border mt-5">
        <img
          referrerPolicy="no-referrer"
          src={query.buyer?.user_photo}
          alt=""
        />
        <h1 className="text-secondaryColor bg-textColor px-5 py-2 text-2xl">
          User Name : {query.buyer?.user_name}
        </h1>
        <h1 className="text-secondaryColor text-2xl bg-textColor px-5 py-2 text-2xl">
          Email:{query.buyer?.user_email}
        </h1>
      </div>
      {/* Recommendation Form */}
      <div className=" bg-primaryColor py-12 px-4">
        <div className="max-w-2xl mx-auto bg-textColor rounded-lg shadow-sm p-6">
          <h2 className="text-4xl font-bold text-secondaryColor text-center mb-6">
            What's your recommendations?
          </h2>

          <form
            onSubmit={handleRecommendations}
            className="space-y-4 text-black"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-secondaryColor">
                Recommendation Title
              </label>
              <input
                type="text"
                placeholder="Recommendedd Title"
                name="recommendation_title"
                className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-secondaryColor">
                Recommended Product Name
              </label>
              <input
                type="text"
                placeholder="Recommended Product Name"
                name="rc_product_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-secondaryColor">
                Recommended Product Image URL
              </label>
              <input
                type="text"
                placeholder="Recommended Product Image URL"
                name="rc_product_photo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-secondaryColor">
                Recommended Reason
              </label>
              <input
                type="text"
                placeholder="Recommended Reason"
                name="recommended_reason"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-cyan-950 text-amber-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
              >
                Add Recommendation
              </button>
            </div>
          </form>
        </div>
      </div>
      <Comments id={id}></Comments>
    </div>
  );
};

export default QueryDetails;
