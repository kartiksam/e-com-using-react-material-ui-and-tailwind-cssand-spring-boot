import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { maincarouselData } from "./MainCaroseldata";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
// otherwirese will give our classname and then style below or above file and then include but in this proj we have setup tailwind so we can just givbe inbuilt class name and this will work
const items = maincarouselData.map((item) => {
  return (
    <img
      className="cursor-pointer"
      src={item.imageUrl}
      role="presentation"
      onClick
      alt=""
    />
  );
});

const MainCarosel = () => (
  <AliceCarousel
    // responsive={responsive}
    // controlsStrategy="alternate"
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);
export default MainCarosel;
