import Lottie from "lottie-react";
import newsletterLottie from "../assets/newsletterLottie.json";
import { FaPaperPlane } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="bg-primaryColor flex flex-col justify-center items-center text-secondaryColor w-[90%] mx-auto mb-10 rounded-3xl m-2">
      <div className="">
        <Lottie
          animationData={newsletterLottie}
          loop={true}
          autoplay={true}
          style={{
            width: "400px",
            height: "400px",
            color: "#31433c",
          }}
        ></Lottie>
      </div>
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-center">Stay Updated</h1>
        <p className="text-xl text-center my-3">
          Get the latest updates straight to your inbox.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-[80%] mx-auto hover:border-2 hover:border-secondaryColor"
          />
        </div>
        <div className="flex items-center justify-center mt-5">
          <button className="px-10 py-3 bg-secondaryColor text-xl text-primaryColor font-bold rounded-xl flex items-center gap-4">
            Subscribe <FaPaperPlane />
          </button>
        </div>
        <p className="text-base text-center my-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
