import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import React, { useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ChartCard from './ChartCard';
export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    // progressCircle?.current?.style.setProperty('--progress', 1 - progress);
    // progressContent?.current?.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <ChartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChartCard />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
