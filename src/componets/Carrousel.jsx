import React, { useEffect, useState, useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

//Banners
import Banner1 from "../assets/Carrousel/Banner1.png";
import Banner2 from "../assets/Carrousel/Banner2.png";
import Banner3 from "../assets/Carrousel/Banner3.png";
import Banner4 from "../assets/Carrousel/Banner4.png";

import "./Carrousel.sass";

const Carrousel = () => {
  const images = [
    {
      id: 0,
      link: Banner1,
    },
    {
      id: 1,
      link: Banner2,
    },
    {
      id: 2,
      link: Banner3,
    },
    {
      id: 3,
      link: Banner4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [length, setlength] = useState(0);

  const maxLength = (images.length - 1) * 1080;

  const previous = () => {
    setCurrent((current) => (current == 0 ? images.length - 1 : current - 1));
    setlength((length) => (length == 0 ? -maxLength : length + 1080));
  };

  const next = () => {
    setCurrent((current) => (current == images.length - 1 ? 0 : current + 1));
    setlength((length) => (length == -maxLength ? 0 : length - 1080));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div>
      <div className="container-carrousel">
        <div className="gallery-wrapper">
          <button
            onClick={previous}
            className="arrow left"
            aria-label="Previous Image"
          >
            <RiArrowLeftSLine
              fontSize={"2rem"}
              style={{
                background: "white",
                color: "black",
                borderRadius: "50%",
              }}
            />
          </button>
          <button
            onClick={next}
            className="arrow right"
            aria-label="Next Image"
          >
            <RiArrowRightSLine
              fontSize={"2rem"}
              style={{
                background: "white",
                color: "black",
                borderRadius: "50%",
              }}
            />
          </button>
          <div
            className="gallery"
            style={{ transform: `translateX(${length}px)` }}
          >
            {images &&
              images.map((img) => (
                <img
                  key={img.id}
                  className={current == img.id ? "item current-item" : "item"}
                  src={img.link}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
