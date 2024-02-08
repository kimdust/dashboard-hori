import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import styled from "styled-components";

const MainSlide = () => {
  return (
    <>
      <SwiperWrap
        pagination={true}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="main-slide topCont"
      >
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1641688137759-ee4cede06b08?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1699621322942-3bf005806f16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </SwiperWrap>
    </>
  );
};

const SwiperWrap = styled(Swiper)`
  img {
    display: block;
    width: 100%;
    height: 630px;
    object-fit: cover;
    object-position: center;
  }
`;

export default MainSlide;
