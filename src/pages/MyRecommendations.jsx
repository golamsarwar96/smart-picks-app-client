import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [myRecommendation, setMyRecommendation] = useState([]);
  useEffect(() => {
    const fetchAllRecommendation = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/recommendation/${user?.email}`
      );
      const sortedQueries = data.sort((a, b) => b.time - a.time);
      setMyRecommendation(sortedQueries);
      console.log(sortedQueries);
    };
    fetchAllRecommendation();
  }, [user]);

  return (
    <div className="bg-primaryColor">
      <h1 className="py-10 font-bold text-5xl text-center text-secondaryColor">
        You have recommended{" "}
        <span className="px-6 py-1 bg-textColor rounded-full">
          {myRecommendation.length}
        </span>{" "}
        Products
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-secondaryColor">
            <tr className="text-lg">
              <th>ID</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody className="text-secondaryColor text-base">
            {myRecommendation.map((recommendation, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    className="w-28 h-24 object-cover"
                    src={recommendation.rc_product_photo}
                  />
                </td>
                <td>{recommendation.rc_product_name}</td>
                <td>{recommendation.recommended_reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
