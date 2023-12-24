import { FaRegUser, FaBasketShopping, FaHeart } from "react-icons/fa6";

const ComponentNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* bagian-atas */}
        <div className="flex flex-row justify-between mx-auto mt-10 mb-5 w-3/4 items-center">
          <a className="text-3xl uppercase text-[#86A789] font-semibold" href="#">
            Sayur.KU
          </a>

          <div className="flex flex-row items-center gap-8">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                  <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 black">
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-dashed  focus:white outline" />
            </div>

            <a href="">
              <FaRegUser size={24} />
            </a>
            <a href="">
              <FaBasketShopping size={24} />
            </a>
            {/* <a href="">
              <FaHeart size={24} />
            </a> */}
          </div>
        </div>
        {/* bagian-bawah */}
        <div className="flex bg-black w-3/4 pt-px rounded items-center mx-auto"></div>
        <div className="flex mx-auto w-1/2 items-center my-8 gap-8 justify-center uppercase text-[#323334] font-semibold text-base">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Product</a>
          <a href="">Contact</a>
        </div>
        <div className="flex bg-black w-3/4 pt-px rounded items-center mx-auto"></div>
      </nav>
    </>
  );
};

export default ComponentNavbar;
