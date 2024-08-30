"use client";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";

interface Props {}

const MyNavbar: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="w-full mt-5">
        <div className="flex flex-row justify-around items-center">
          <div>
            <h2 className="text-lg font-bold text-dark">LOGO</h2>
          </div>

          <div className="flex items-center ">
            <Input className="text-xs px-24" type="email" placeholder="Find Your Product" />

            <Combobox />
            <Button className="text-white bg-blue-400" type="submit">
              <CiSearch />
            </Button>
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
        <div className="flex justify-around items-center mt-6">
          <div className=" text-white shadow-md relative">
            <button className="bg-blue-400 px-12 py-2 flex justify-center items-center  gap-4 font-semibold text-sm " onClick={toggleDropdown}>
              <RxHamburgerMenu /> All Categories
            </button>

            {isOpen && (
              <div className=" text-black absolute right-0 w-full">
                <ul className="text-xs ">
                  <li className="border border-b w-full px-12 py-3 font-semibold hover:bg-gray-200 cursor-pointer">
                    {" "}
                    <Link href={""}>Eletronics</Link>
                  </li>
                  <li className="border border-b w-full px-12 py-3 font-semibold hover:bg-gray-200 cursor-pointer">
                    {" "}
                    <Link href={""}>Food and Groceries</Link>
                  </li>

                  <li className="border border-b w-full px-12 py-3 font-semibold hover:bg-gray-200 cursor-pointer">
                    {" "}
                    <Link href={""}>Fashion</Link>
                  </li>
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
