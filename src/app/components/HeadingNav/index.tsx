import { NextPage } from "next";
import { GrDeliver } from "react-icons/gr";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import Link from "next/link";
import React from "react";
interface HeadingNavProps {}

const HeadingNav: NextPage<HeadingNavProps> = ({}) => {
  const link = [
    {
      href: "https://facebook.com",
      icon: <FaFacebookF />,
    },
    {
      href: "https://twitter.com",
      icon: <FaTwitter />,
    },
    {
      href: "https://instagram.com",
      icon: <FaInstagram />,
    },
  ];
  return (
    <div className="w-full bg-blue-400 flex flex-col lg:flex-row justify-between items-center text-white px-2 lg:px-24 py-3">
      <div className="flex flex-row gap-3">
        <div className="flex flex-row justify-center items-center gap-4">
          <GrDeliver />
          <p className="text-xs font-semibold">Free Delivery </p>
          <p className="mx-2"> |</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <p className="text-xs font-semibold">Follow Us</p>
          {link.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center gap-4 cursor-pointer">
        <IoIosLogIn />
        <Link href={""} className="text-xs font-semibold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default HeadingNav;
