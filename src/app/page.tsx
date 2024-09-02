"use client";
import Image from "next/image";
import HeadingNav from "./components/HeadingNav";
import MyNavbar from "./components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Icons
import { AiFillApple } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import { FaTshirt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

// card
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
export default function Home() {
  const slider = [
    {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "gs",
    },
    {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "gc",
    },
    {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "a",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Eletronic Things ",
      link: "Electronics",
      icon: <AiFillApple className="text-3xl text-blue-400" />,
    },
    {
      id: 2,
      name: "Food ",
      description: "Food And Groceries ",
      link: "Foods",
      icon: <IoFastFood className="text-3xl text-blue-400" />,
    },
    {
      id: 3,
      name: "Clothes ",
      description: "Clothes Casual ",
      link: "Foods",
      icon: <FaTshirt className="text-3xl text-blue-400" />,
    },
    {
      id: 4,
      name: "Clothes ",
      description: "Clothes Casual ",
      link: "Foods",
      icon: <FaTshirt className="text-3xl text-blue-400" />,
    },
    {
      id: 5,
      name: "Clothes ",
      description: "Clothes Casual ",
      link: "Foods",
      icon: <FaTshirt className="text-3xl text-blue-400" />,
    },
  ];
  return (
    <div className="max-w-screen w-full ">
      <HeadingNav />
      <MyNavbar />
      {/* Carousel */}
      <Carousel responsive={responsive} className="h-[400px]">
        {slider.map((item) => (
          <div key={item.alt}>
            <img className="w-full object-cover" src={item.src} alt={item.alt} />
          </div>
        ))}
      </Carousel>

      <div className="w-full px-32 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Best Category</CardTitle>
            <CardDescription className="text-xs">Best Category of NoitrX Commerce</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-4 justify-center items-center ">
            <div className="flex flex-row gap-4 cursor-pointer ">
              {categories.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="text-center">{item.name}</CardTitle>
                    <CardDescription className="text-center text-xs">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center">{item.icon}</CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-row justify-center items-center gap-6">
            <div className="px-8 py-2 gap-3 flex justify-center items-center border border-blue-400 rounded-md cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-150">
              <BiCategory className="text-blue-400" />
              <p className="text-xs text-blue-400">Categories</p>
            </div>

            <div className="px-8 py-2 gap-3 flex justify-center items-center border border-blue-400 rounded-md cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-150">
              <BiCategory className="text-blue-400" />
              <p className="text-xs text-blue-400">Eletronics</p>
            </div>

            <div className="px-8 py-2 gap-3 flex justify-center items-center border border-blue-400 rounded-md cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-150">
              <BiCategory className="text-blue-400" />
              <p className="text-xs text-blue-400">Fashion</p>
            </div>

            <div className="px-8 py-2 gap-3 flex justify-center items-center border border-blue-400 rounded-md cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-150">
              <BiCategory className="text-blue-400" />
              <p className="text-xs text-blue-400">Food</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
