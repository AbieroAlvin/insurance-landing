import { useState, useRef, useEffect } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="mx-auto w-full bg-[var(--Vl-Gray)]">
      <nav className="w-full h-[80px] flex justify-between items-center py-3 px-2 max-w-[1080px] mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:mx-auto px-4">
          <img src={Logo} alt="logo" />
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden flex border-[1px] rounded-md p-2 border-[var(--VD-Violet)] "
          >
            {!nav ? (
              <AiOutlineMenu className="text-[var(--VD-Violet)]" size={22} />
            ) : (
              <AiOutlineClose className="text-[var(--VD-Violet)]" size={22} />
            )}
          </div>
        </div>
        {/* Navigation */}
        <div className="hidden md:flex w-full justify-end items-center gap-4 font-karla">
          <ul className="flex gap-4  text-[13px] uppercase font-semibold text-[var(--DG-Violet)]">
            <li className="hover:text-[var(--D-Violet)]">
              <a href="#">How We Work</a>
            </li>
            <li className="hover:text-[var(--D-Violet)]">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-[var(--D-Violet)]">
              <a href="#">Account</a>
            </li>
          </ul>
          <button className="uppercase border-[1px] px-4 py-2 text-[13px] border-[var(--VD-Violet)] hover:bg-[var(--VD-Violet)] hover:text-[var(--VL-Gray)] font-semibold">
            View Plans
          </button>
        </div>

        {/* side drawer menu */}
        <div
          className={`fixed top-[80px] w-full h-screen nav-bg z-10 duration-500 ease-in-out py-[30px] ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <nav className="text-center font-karla">
            <ul className="flex flex-col gap-4 uppercase text-[1.25rem] text-[var(--VL-Gray)]">
              <li>
                <a href="#">How We Work</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
            </ul>
            <button className="uppercase border-[1px] px-4 py-2 text-[1rem] border-[var(--VL-Gray)] hover:bg-[var(--VD-Violet)] text-[var(--VL-Gray)] font-semibold w-[65%] mt-6">
              View Plans
            </button>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
