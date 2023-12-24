import Navbar from "../../components/Navbar/ComponentNavbar";
import HeaderCarousel from "../../components/Slider/Carousel/HeaderCarousel";
import Gallery from "../../views/HomePage/Gallery";
import Footer from "../../components/Footer/ComponentFooter";
import hc1 from "../../assets/images/pile-fresh-vegetables.jpg";
import gh1 from "../../assets/images/galleryHead.png";
import gh2 from "../../assets/images/galleryHead1.png";
import gl1 from "../../assets/images/gl1.png";
import gl2 from "../../assets/images/gl2.png";
import gl3 from "../../assets/images/gl3.png";
import gl4 from "../../assets/images/gl4.png";
const HomePage = () => {
  const items = [
    {
      image: hc1,
      title: "Sayur.Ku",
      sale: "Belanja Sayur Segar, Bebas Repot",
      desc: "Harga Terjangkau",
    }
  ];

  const itemsGallery = [
    { img: gh1, alt: "Image Gallery", text: "Text 1" },
    { img: gh2, alt: "Image Gallery", text: "Text 2" },
    { img2: gl1, alt2: "Image Gallery", text2: "Text 3", harga2:"Rp. 10.000"},
    { img2: gl2, alt2: "Image Gallery", text2: "Text 4" , harga2:"Rp. 20.000"},
    { img2: gl3, alt2: "Image Gallery", text2: "Text 5" , harga2:"Rp. 15.000"},
    { img2: gl4, alt2: "Image Gallery", text2: "Text 6" , harga2:"Rp. 13.000"},
  ];
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-96 mt-5 pt-8 pb-3 bg-[#DBD0CC]">
        <div className="w-3/4 mx-auto">
          <HeaderCarousel items={items} />
        </div>
      </div>
      <div className="w-full ">
        <Gallery itemsGallery={itemsGallery} />
      </div>
      <div className="mt-52">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
