"use client";
import { NextPage } from "next";

import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { IoIosClose } from "react-icons/io";

interface Props {}

const MyNavbar: NextPage<Props> = ({}) => {
  const category = [
    {
      id: 1,
      name: "Eletcronics",
      link: "eletcronics",
    },
    {
      id: 2,
      name: "Food And Groceries",
      link: "Foods",
    },
    {
      id: 3,
      name: "Fashion",
      link: "Fashion",
    },
  ];
  // UseState For Categories
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // UseState For Sidebar And Mobile Size
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="w-full mt-5 shadow-lg">
        <div className="flex flex-row justify-around items-center">
          <div>
            <h2 className="text-lg font-bold text-dark">LOGO</h2>
          </div>

          <div className="lg:flex hidden">
            <SearchBar />
          </div>

          <div className="md:hidden flex" onClick={toggleSidebar}>
            <RxHamburgerMenu />
          </div>

          <div className="flex flex-row gap-4 justify-center items-center">
            <Link className="relative" href={""}>
              <FaShoppingCart />
            </Link>
            <Link href={""}>
              <BsBagCheck />
            </Link>
          </div>
        </div>

        <div className={`${isSidebarOpen ? "translate-x-16 delay-500" : "translate-x-full delay-0 "} fixed top-0 left-0 h-full w-full bg-white transform transition-transform duration-300 ease-in-out  lg:hidden z-50 p-12`}>
          <div className="flex justify-between items-center px-4 py-5">
            <h2 className="font-bold">LOGO</h2>
            <IoIosClose onClick={toggleSidebar} className="text-2xl mr-5" />
          </div>
          <div className="flex flex-col items-start">
            <ul className="mx-4">
              <li className="font-semibold">
                {" "}
                <Link href={""}>Home</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isSidebarOpen ? "translate-x-0 delay-0" : "translate-x-full delay-500"} fixed top-0 left-0 h-full w-full bg-black opacity-20 transform transition-transform duration-300 ease-in-out lg:hidden z-40 p-12`}></div>

        <div className="hidden lg:flex justify-around items-center mt-6 py-4">
          <div className=" text-white shadow-md relative">
            <button className="bg-blue-400 px-12 py-2 flex justify-center items-center  gap-4 font-semibold text-sm " onClick={toggleDropdown}>
              <RxHamburgerMenu /> All Categories
            </button>

            {isOpen && (
              <div className=" text-black absolute right-0 w-full z-30 bg-white">
                <ul className="text-xs ">
                  {category.map((item) => (
                    <>
                      <li className="border border-b w-full px-12 py-3 font-semibold hover:bg-gray-200 cursor-pointer">
                        {" "}
                        <Link key={item.id} href={item.link}>
                          {item.name}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <ul className="flex justify-center items-center gap-8 text-xs font-semibold">
              <li>
                {" "}
                <Link href={""} className="hover:text-blue-400">
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="hover:text-blue-400" href={""}>
                  Shop
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="hover:text-blue-400" href={""}>
                  Categories
                </Link>{" "}
              </li>
            </ul>
          </div>

          <div className="bg-blue-400 px-8 py-3 text-white font-bold hover:bg-blue-700 transition-all duration-200">NoitrX Shop 45% Discount Off</div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
