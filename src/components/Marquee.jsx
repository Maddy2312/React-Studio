import React from "react";
import "../App.css";

const Marquee = () => {
  const images = [
    "/img1.avif",
    "/img2.avif",
    "/img3.avif",
    "/img4.avif",
    "/img5.avif",
  ];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...images, ...images].map((img, index) => (
          <img className="img" key={index} src={img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Marquee;