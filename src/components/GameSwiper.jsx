import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./gameswiper.css";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import GameSlide from "./GameSlide";

const GameSwiper = ({ games }) => {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(!active);
  }
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 35,
          stretch: 200,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="gameSwiper"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <GameSlide
              game={game}
              key={game.id}
              active={active}
              handleToggle={handleToggle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GameSwiper;
