import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../assets/bannerImg/slider3.jpg";
import banner2 from "../assets/bannerImg/slider2.jpg";
import banner3 from "../assets/bannerImg/slider1.jpg";
const Banner = () => {
  return (
    <div className="lg:mt-32 mt-24 md:mt-[228px] h-[60vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img
            className="w-full object-cover h-[70vh]"
            src={banner1}
            alt="Image 1"
          />
          <h1 className="font-semibold lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-96 md:left-24 left-20 md:top-32 top-28 lg:top-36 text-center bg-[#25302c] text-[#fce4c1] p-8">
            Get The Best Product Recommendation For Your Next Purchase
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover h-[70vh]"
            src={banner2}
            alt="Image 1"
          />
          <h1 className="font-semibold lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-96 md:left-24 left-20 md:top-32 top-28 lg:top-36 text-center bg-primaryColor text-secondaryColor p-8">
            Get The Best Product Recommendation For Your Next Purchase
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover h-[70vh]"
            src={banner3}
            alt="Image 1"
          />
          <h1 className="font-semibold lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-96 md:left-24 left-20 md:top-32 top-28 lg:top-36 text-center bg-primaryColor text-secondaryColor p-8">
            Get The Best Product Recommendation For Your Next Purchase
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
