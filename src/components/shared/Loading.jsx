import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnim.json";
const Loading = () => {
  return (
    <div className="flex justify-center items-center md:mt-[180px]">
      <Lottie
        animationData={loadingAnimation}
        style={{ width: "350px", height: "350px" }}
        autoplay={true}
        loop={true}
      ></Lottie>
    </div>
  );
};

export default Loading;
