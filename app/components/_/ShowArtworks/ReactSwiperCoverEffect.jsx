import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  return <>
    <Swiper
      navigation={true}
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      pagination={{
        clickable: true
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/img/test/img_1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/test/img_2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/test/img_3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/test/img_4.jpg" />
      </SwiperSlide>
    </Swiper>
  </>
}
