import Lottie from "lottie-react";
import errorLottie from "../assets/404.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="">
      <Lottie
        animationData={errorLottie}
        style={{ width: "1920", height: "1080" }}
      ></Lottie>
      <div className="relative">
        <Link to="/">
          <button className="rounded-2xl absolute lg:-top-[420px] md:-top-[200px] -top-[100px] left-[165px] lg:left-[690px] md:left-[320px] md:px-10 md:py-3 px-6 py-2 bg-primaryColor text-secondaryColor font-bold">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
