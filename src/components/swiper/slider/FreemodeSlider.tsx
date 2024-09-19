// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";

interface FreemodeSliderProps {
  children: React.ReactNode;
}

export default function FreemodeSlider({ children }: FreemodeSliderProps) {
  return (
    <>
      <Swiper slidesPerView={2} freeMode={true} modules={[FreeMode]}>
        {children}
      </Swiper>
    </>
  );
}
