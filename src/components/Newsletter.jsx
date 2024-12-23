import Lottie from "lottie-react";
import newsletterLottie from "../assets/newsletterLottie.json";
const Newsletter = () => {
  return (
    <div>
      {/* Animation  */}
      <div>
        <Lottie
          animationData={newsletterLottie}
          loop={true}
          autoplay={true}
          style={{ width: "500px", height: "500px" }}
        ></Lottie>
      </div>
      {/* Newsletter form */}
      <div></div>
    </div>
  );
};

export default Newsletter;
