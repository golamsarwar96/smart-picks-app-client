import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddQueries = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddQueries = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const product_brand = form.product_brand.value;
    const product_photo = form.product_photo.value;
    const query_title = form.query_title.value;
    const boycott = form.boycott.value;
    const user_email = user?.email;
    const user_name = user?.displayName;
    const user_photo = user?.photoURL;
    const time = Date.now();
    const day = new Date(time);
    const recommendedCount = 0;

    const formData = {
      product_name,
      product_brand,
      product_photo,
      query_title,
      boycott,
      buyer: {
        user_email,
        user_name,
        user_photo,
      },
      time,
      day,
      recommendedCount,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-queries`,
        formData
      );
      // console.log(data);
      toast.success("Query added successfully");
      form.reset();
      navigate("/my-queries");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className=" bg-primaryColor py-12 px-4 lg:mt-32 md:mt-52 mt-24">
      <div className="max-w-2xl mx-auto bg-textColor rounded-lg shadow-sm p-6">
        <h2 className="text-4xl font-bold text-secondaryColor text-center mb-6">
          Add Queries
        </h2>

        <form onSubmit={handleAddQueries} className="space-y-4 text-black">
          <div>
            <label className="block text-sm font-medium mb-1 text-secondaryColor">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Product Name"
              name="product_name"
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryColor"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-secondaryColor">
              Product Brand
            </label>
            <input
              type="text"
              placeholder="Product Brand"
              name="product_brand"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-secondaryColor">
              Product Image URL
            </label>
            <input
              type="text"
              placeholder="Product Image URL"
              name="product_photo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-secondaryColor">
              Query Title
            </label>
            <input
              type="text"
              placeholder="Query Title"
              name="query_title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-secondaryColor">
              Boycotting Reason
            </label>
            <input
              type="text"
              placeholder="Reason to Boycott"
              name="boycott"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primaryColor text-secondaryColor py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
            >
              Add Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;
