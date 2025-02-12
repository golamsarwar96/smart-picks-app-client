import { Link } from "react-router-dom";
import aboutus from "../assets/blogImg/aboutus.png";
import { BiHome } from "react-icons/bi";
const AboutUs = () => {
  return (
    <div className="bg-primaryColor text-secondaryColor min-h-screen text-center p-8">
      <div className="flex justify-center items-center">
        <Link to="/">
          <button className="flex justify-center items-center gap-2 px-5 py-2 border-2 border-secondaryColor text-secondaryColor mt-10 lg:mt-0 rounded-3xl">
            <BiHome></BiHome> Back To Home
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="flex-1">
          <img src={aboutus} alt="" />
        </div>
        <p className="flex-1">
          "Smart Picks" is a Product Recommendation Platform designed to assist
          users in making informed choices about various products. Users can
          interact with the system by posting queries, providing
          recommendations, and sharing insights about alternative products. The
          platform fosters a collaborative environment where users contribute to
          a shared knowledge base.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
