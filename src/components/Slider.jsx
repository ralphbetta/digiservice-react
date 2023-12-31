import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 

const CustomSlider = () => {

  const swiperRef = useRef(null);

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <Swiper
        ref={swiperRef}
        // navigation={{ hidden: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className="blue-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="yellow-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="green-slide">Slide 3</SwiperSlide>
      </Swiper>
      <button onClick={goToPrev}>Previous</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default CustomSlider;

