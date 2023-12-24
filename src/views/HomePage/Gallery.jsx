import { ComponentGalleryItem, ComponentHoverGalleryItem } from "../../components/Gallery/ComponentGallery";
import gh from "../../assets/images/celery.jpg";
import gh1 from "../../assets/images/chinese-cabbage-.jpg";
import gl from "../../assets/images/brocolli.jpg";
import gl1 from "../../assets/images/tomato.jpg";
import gl2 from "../../assets/images/lemon.jpg";
import gl3 from "../../assets/images/kangkung.jpg";
import gl4 from "../../assets/images/carrot.jpg";
import gl5 from "../../assets/images/green-chili-peppers.jpg";
import gl6 from "../../assets/images/red-chili-peppers.jpg";
import gl7 from "../../assets/images/lettuce.jpg";

const Gallery = () => {
  const itemsGallery = [
    { img: gh, alt: "Item 1", text: "Seledri" , harga2:"Rp. 17.000", link:"https://www.instagram.com/p/C0BvnU_SRCc/?igsh=ZTcxMWMzOWQ1OA== " },
    { img: gh1, alt: "Item 2", text: "Sawi",harga2:"Rp. 10.000", link:"https://www.instagram.com/p/C0BvhgdS5a8/?igsh=ZTcxMWMzOWQ1OA==" },
    { img2: gl2, alt2: "Item 1", text2: "Lemon", harga2:"Rp. 12.000", link2: "https://www.instagram.com/p/C0BvNl1S_Cl/?igsh=ZTcxMWMzOWQ1OA==" },
    { img2: gl3, alt2: "Item 2", text2: "Kangkung",harga2:"Rp. 10.000", link2: "https://www.instagram.com/p/C0BvRSRSvNm/?igsh=ZTcxMWMzOWQ1OA==" },
    { img2: gl, alt2: "Item 1", text2: "Brokoli" ,harga2:"Rp. 18.000", link2: "https://www.instagram.com/p/C0Bvun5yRt5/?igsh=ZTcxMWMzOWQ1OA=="},
    { img2: gl1, alt2: "Item 2", text2: "Tomato" ,harga2:"Rp. 10.000", link2: "https://www.instagram.com/p/C0ButsEyEMk/?igsh=ZTcxMWMzOWQ1OA=="},
    { img2: gl6, alt2: "Item 1", text2: "Cabai Merah" ,harga2:"Rp. 23.000", link2: "https://www.instagram.com/p/C0Bu77IyGbS/?igsh=ZTcxMWMzOWQ1OA=="},
    { img2: gl5, alt2: "Item 2", text2: "Cabai Hijau" ,harga2:"Rp. 20.000", link2: "https://www.instagram.com/p/C0BvWojSccf/?igsh=ZTcxMWMzOWQ1OA=="},
    { img2: gl7, alt2: "Item 2", text2: "Selada" ,harga2:"Rp. 13.000", link2: "https://www.instagram.com/p/C0BvKySSkCT/?igsh=ZTcxMWMzOWQ1OA=="},
    { img2: gl4, alt2: "Item 2", text2: "Wortel" ,harga2:"Rp. 17.000", link2: "https://www.instagram.com/p/C0BvrfHyAbg/?igsh=ZTcxMWMzOWQ1OA=="},
  ];
  const galleryItems = itemsGallery.filter((item) => item.img && item.alt && item.text && item.link);
  const hoverItems = itemsGallery.filter((item) => item.img2 && item.alt2 && item.text2);
  const link = itemsGallery.filter((item) =>item.link2)

  return (
    <div>
      <ComponentGalleryItem itemsGallery={galleryItems} />
      <h1 className="font-semibold text-5xl text-center my-16">Product</h1>
      <div className="flex bg-[#DCE1DA] w-full pt-2  shadow-inner items-center my-10 mx-auto"></div>
      <ComponentHoverGalleryItem itemsGallery={link} />
      <div className="flex bg-[#DCE1DA] w-full pt-2  shadow-inner items-center my-10 mx-auto"></div>
    </div>
  );
};

export default Gallery;
