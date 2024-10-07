import React from "react";
import MainCarosel from "../../HomeCarosel/MainCarosel";
import Homesectioncarosel from "../../HomeSectionCarosel/Homesectioncarosel";
import { mens_kurta } from "../../data/mens_kurta";
const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <Homesectioncarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <Homesectioncarosel data={mens_kurta} sectionName={"Men's Shoes"} />
        <Homesectioncarosel data={mens_kurta} sectionName={"Men's Shirt"} />
        <Homesectioncarosel data={mens_kurta} sectionName={"Women's saree"} />
        <Homesectioncarosel data={mens_kurta} sectionName={"Women's dress"} />
      </div>
    </div>
  );
};

export default HomePage;
