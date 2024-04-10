import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";
import image from "../assets/img.png";
import Footer from "./Footer";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  //   const image = JSON.parse(sessionStorage.getItem("image"));

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Inspiration" },
    { id: 2, text: " Work" },
    { id: 3, text: " Design" },
    { id: 5, text: " Designers" },
  ];

  return (
    <div>
      <nav className=" p-4">
        <div className="flex justify-between items-center mx-auto px-4 ">
          <h1 className="w-full text-3xl font-bold text-pink-500 ">LOGO.</h1>

          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="px-4 py-1 hover:text-gray-400 rounded-md m-2 cursor-pointer duration-300"
              >
                {item.text}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <input
              className="relative ps-6 w-24  rounded-md bg-slate-100"
              placeholder="Search"
            />
            <BiSearchAlt2 className="absolute ms-1" />
            <div className="bg-slate-500 w-8 h-8 rounded-full">
              <img alt="img" src={image} />
            </div>
            <button className="bg-pink-500 text-white p-1 rounded-md hover:bg-pink-700">
              Upload
            </button>
          </div>

          <div onClick={toggleNavbar} className="block md:hidden">
            {isNavbarOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>

          <ul
            className={
              isNavbarOpen
                ? "fixed md:hidden left-0 top-0 w-[20%] h-full border-r  bg-pink-300 ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {/* Mobile Logo */}
            <p className={"ml-3 mt-1 mb-2 block"}>
              <h1 className="w-full text-3xl font-bold text-pink-500">LOGO.</h1>
            </p>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="text-white hover:bg-gray-700 px-4 py-2 block lg:inline-block"
              >
                {/* <NavLink to={item.target}> */}
                {item.text}
                {/* </NavLink> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-24">
          <h1>Please verify your email... </h1>
          <BsEnvelopeFill className="ms-[47%] text-gray-400 " size={80} />
          <h1>
            Please verify your email address. We've sent a confirmation email to
            :
          </h1>
          <p className="font-bold mt-5 my-5">account@refero.design</p>
          <p>
            Click the confirmation link in that email to begin. <br /> Didn't
            receive the email?Check your Spam folder,it may have been caught by
            a filter.
          </p>
        </div>
      </nav>
      <Footer/>
    </div>
  );
};

export default Navbar;
