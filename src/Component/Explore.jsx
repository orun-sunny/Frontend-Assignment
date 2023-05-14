import React from "react";
import Circle from "./../assets/circle.png";
import Circles from "./../assets/circles.png";
const Explore = () => {
  return (
    <section className="explore-section overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols md:grid-cols-2 py-5 items-center">
          <div className="" data-aos="fade-down" data-aos-duration="700">
            <h2 className="font-bold text-50 pb-5 text-left">
              Explore your favourite city’s food.
            </h2>
            <p className="text-xl text-secondary text-left">
              Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
              tristique. Non ligula tristique ut ut libero sit convallis
              maecenas. At egestas auctor porta mattis.
            </p>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-duration="700">
            <img src={Circles} alt="Circle" className="w-full h-full" />
            <img
              src={Circle}
              alt="Circle"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
