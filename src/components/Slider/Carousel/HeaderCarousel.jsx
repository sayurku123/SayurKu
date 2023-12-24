import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useCallback } from "react";
import PropTypes from "prop-types";

const HeaderCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, items, nextSlide]);

  return (
    <div className="relative w-full ">
      {/* <div className="absolute left-0 top-40 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-10" onClick={prevSlide}>
        <FaAngleLeft />
      </div>
      <div className="absolute right-16 top-40 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-10" onClick={nextSlide}>
        <FaAngleRight />
      </div> */}
      {items.map((item, index) => (
        <div
          key={index}
          className={` absolute flex  flex-row gap-4 w-full h-80 justify-center
         transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <img src={item.image} alt={`Image ${index}`} className="w-[45%] h-full transform transition-transform duration-500 scale-100 " />
          <div className="flex flex-col w-[45%] text-left justify-center transform transition-transform duration-500 translate-x-0">
            <p className="text-[#323334] font-semibold text-xl mb-3 ">{item.title}</p>
            <p className="text-[#A86A3D] font-semibold text-4xl ">{item.sale}</p>
            <p className="text-[#A86A3D] font-semibold text-4xl ">{item.desc}</p>
            <button className="w-28 mt-5 p-4 outline outline-1 outline-black text-[#323334] font-semibold text-sm">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

HeaderCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeaderCarousel;
