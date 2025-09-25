"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Swipper({ partners }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [init, setInit] = useState(false);

  const swiperParams = {
    modules: [Autoplay, Navigation],
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    onInit: () => setInit(true),
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: 5, spaceBetween: 50 },
    },
  };
  return (
    <div className=" relative">
      <Swiper
        {...swiperParams}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="mySwiper"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="flex  justify-center items-center px-4">
              <Image
                width={300}
                height={300}
                src={partner.logoUrl}
                alt={`${partner.id} logo`}
                className="w-14 h-14 md:w-40 md:h-40   hover:scale-110 transition-opacity duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation btn  */}
      <div className="hidden lg:block">
        <button
          ref={prevRef}
          className={`
                absolute top-1/2 -left-16 transform -translate-y-1/2 
                z-10 w-10 h-10 bg-white text-gray-800 rounded-full shadow-lg
                flex items-center justify-center cursor-pointer 
                transition-all duration-200 hover:bg-gray-100
                // Swiper's default prev/next button styling is managed by the imported CSS,
                // but we hide the default Swiper class to use our custom buttons.
                // We add our own icon or styling here:
                before:content-['<'] 
              `}
          aria-label="Previous Partner"
        />

        <button
          ref={nextRef}
          className={`
                absolute top-1/2 -right-16 transform -translate-y-1/2 
                z-10 w-10 h-10 bg-white text-gray-800 rounded-full shadow-lg
                flex items-center justify-center cursor-pointer 
                transition-all duration-200 hover:bg-gray-100
                before:content-['>']
              `}
          aria-label="Next Partner"
        />
      </div>
    </div>
  );
}
