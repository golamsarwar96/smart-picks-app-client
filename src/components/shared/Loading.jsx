import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loop.json";
const Loading = () => {
  return (
    <div className="flex justify-center items-center md:mt-[210px]">
      <Lottie
        animationData={loadingAnimation}
        style={{ width: "200px", height: "200px" }}
        autoplay={true}
        loop={true}
      ></Lottie>
    </div>
  );
};

export default Loading;
