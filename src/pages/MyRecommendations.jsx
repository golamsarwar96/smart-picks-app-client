import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

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

  const deleteRecommendation = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/recommendation/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = myRecommendation.filter(
                (recommendation) => recommendation._id !== _id
              );
              setMyRecommendation(remaining);
            }
          });
      }
    });
  };

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
              <th>Reason To Recommend</th>
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
                <td>
                  <button
                    onClick={() => deleteRecommendation(recommendation._id)}
                    className="px-3 py-3 text-xl bg-secondaryColor rounded-full text-primaryColor "
                  >
                    {" "}
                    <RiDeleteBin5Fill className="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
