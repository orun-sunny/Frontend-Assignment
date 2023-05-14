import { useEffect, useState } from "react";
import Cart from "./../../assets/cart.png";
import MenuBar from "./MenuBar";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="menu-section sticky top-0 z-50 bg-[#F0F4EC] h-[80px] flex items-center">
      <div className="container mx-auto px-5 flex items-center justify-between relative">
        <div className="logo flex gap-5 items-center">
          <h2 className="text-primary font-bold text-3xl ">FoodTime</h2>
        </div>
        <div className="menu">
          <div className="flex justify-between items-center gap-5 md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <MenuBar></MenuBar>
            </button>
          </div>
          {/* Large Device Menu */}
          <ul className="hidden md:flex items-center justify-center gap-5">
            <li>
              <a
                href="/#home"
                className="font-medium text-basic text-base hover:text-\[#175CFF\]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-medium text-basic text-base hover:text-\[#175CFF\]"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-medium text-basic text-base hover:text-\[#175CFF\]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="font-medium text-basic text-base hover:text-\[#175CFF\]"
              >
                En
              </a>
            </li>
          </ul>
        </div>
        <div className="button md:flex items-center justify-center gap-5 hidden">
          <button
            className="btn2 text-white bg-[#ffb400] px-10 py-4 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-white rounded-full"
            type="button"
          >
            <span className="absolute inset-0 bg-primary"></span>
            <span className="absolute inset-0 flex justify-center items-center font-semibold">
              Log In
            </span>
            Log In
          </button>
          <div className="bg-primary p-3 rounded-full">
            <img src={Cart} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>

      {/* Mobile And Table Device Menu */}
      {showMenu && (
        <div
          className="top-0 right-0 w-full z-10 bg-[#F0F4EC] py-5 px-5 md:hidden absolute"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <div className="logo flex gap-5 items-center justify-between">
            <div className="flex gap-5 items-center">
              <h2 className="text-primary font-bold text-3xl">FoodTime</h2>
            </div>

            <div>
              <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
                className="text-3xl text-[#0043E1] "
                onClick={toggleMenu}
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            </div>
          </div>
          <ul className=" items-center justify-center gap-5 py-5">
            <li className="mb-2">
              <a
                href="/#home"
                className="font-medium text-basic text-base hover:text-primary"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/#about"
                className="font-medium text-basic text-base hover:text-primary"
              >
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/#services"
                className="font-medium text-basic text-base hover:text-primary"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/#projects"
                className="font-medium text-basic text-base hover:text-primary"
              >
                En
              </a>
            </li>
          </ul>
          <div className="button flex flex-wrap items-center justify-center gap-5 lg:hidden">
            <button
              className="btn2 text-white bg-[#ffb400] px-10 py-4 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-white rounded-full"
              type="button"
            >
              <span className="absolute inset-0 bg-primary"></span>
              <span className="absolute inset-0 flex justify-center items-center font-semibold">
                Log In
              </span>
              Log In
            </button>
            <div className="bg-primary p-3 rounded-full">
              <img src={Cart} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
