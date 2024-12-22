import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../assets/bannerImg/banner1.jpg";
import banner2 from "../assets/bannerImg/banner2.jpg";
import banner3 from "../assets/bannerImg/banner3.jpg";
const Banner = () => {
  return (
    <div>
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
        <SwiperSlide>
          <img className="w-full object-cover" src={banner1} alt="Image 1" />
          <h1 className="lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-80 md:left-24 left-20 md:top-40 top-16 lg:top-80 text-center bg-[#25302c] text-[#fce4c1] p-8">
            Get The Best Product Recommendation For Your Next Purchase
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover" src={banner2} alt="Image 1" />
          <h1 className="lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-80 md:left-24 left-20 md:top-40 top-16 lg:top-80 text-center bg-[#25302c] text-[#fce4c1] p-8">
            Get The Best Product Recommendation For Your Next Purchase
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover" src={banner3} alt="Image 1" />
          <h1 className="lg:text-5xl md:text-2xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-80 md:left-24 left-20 md:top-40 top-16 lg:top-80 text-center bg-[#25302c] text-[#fce4c1] p-8">
            Get The Best Product Recommendation For Your Next Purchase
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
