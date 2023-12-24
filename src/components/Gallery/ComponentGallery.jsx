import PropTypes from "prop-types";
import { FaBasketShopping, FaHeart, FaInstagram, FaStar, FaStarHalf } from "react-icons/fa6";
import { useState } from "react";

const GalleryItem = ({ img, alt, text, link }) => (
  <div className="flex flex-row gap-8 w-[37%] bg-[#FAFAFA] p-4 rounded">
    <img className="ml-4" src={img} alt={alt} />
    <div className="flex flex-col text-left justify-center">
      <p className="mb-5 font-semibold text-2xl text-[#323334] uppercase">{text}</p>
      <button className="p-3 outline outline-1 outline-black text-[#323334] font-semibold text-sm"><a href={link} rel="noopener" target="_blank">View Details</a></button>
    </div>
  </div>
);

GalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const ComponentGalleryItem = ({ itemsGallery }) => (
  <div className="flex flex-row gap-8 mx-5 justify-center mt-5 w-full h-[450px]">
    {itemsGallery.map((item, index) => (
      <GalleryItem key={index} {...item} />
    ))}
  </div>
);

ComponentGalleryItem.propTypes = {
  itemsGallery: PropTypes.arrayOf(PropTypes.shape(GalleryItem.propTypes)).isRequired,
};

const HoverGalleryItem = ({ img2, alt2, text2, harga2, link2 }) => (
  <div className={`flex flex-col w-80 mb-16 mx-auto gap-4 bg-[#FAFAFA] rounded-t-[100px] shadow-inner `}>
    <img src={img2} alt={alt2} />
    <div className="pb-5 mt-[-100px]">
      <p className="text-center mr-4 text-lg font-bold text-[#323334]">{text2}</p>
      <div className="flex flex-row text-[#F2C94C] justify-center mr-4 ">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
      <p className="text-2xl font-bold text-[#323334] text-center mr-4 ">{harga2}</p>
    </div>
  </div>
);

HoverGalleryItem.propTypes = {
  img2: PropTypes.string.isRequired,
  alt2: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  harga2: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
 
};

const ComponentHoverGalleryItem = ({ itemsGallery }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className={`grid grid-cols-4 gap-8 mx-5 justify-center mt-5  `}>
      {itemsGallery.map((item, index) => (
        <div key={index} className={`flex flex-col relative ${hoveredIndex === index ? "ease-in-out transition-all duration-500" : ""}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
          <HoverGalleryItem {...item} />
          {hoveredIndex === index && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center w-36 h-10 rounded-xl bg-white ease-in-out transition-all duration-500">
              {/* <button className="hover:text-blue-500" onClick={() => console.log("Basket Icon clicked")}>
                <FaBasketShopping size={18} />
              </button>
              <div className="h-6 w-[1px] mx-5 bg-black"></div> */}
              <button className="hover:text-red-600" onClick={() => console.log(item.link2)}>
                <a href={item.link2} rel="noopener" target="_blank"><FaInstagram size={18}/> </a>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ComponentHoverGalleryItem.propTypes = {
  itemsGallery: PropTypes.arrayOf(PropTypes.shape(HoverGalleryItem.propTypes)).isRequired,
};

export { ComponentGalleryItem, ComponentHoverGalleryItem };
