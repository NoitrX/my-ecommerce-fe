"use client";
import Image from "next/image";
import HeadingNav from "./components/HeadingNav";
import MyNavbar from "./components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Icons
import { AiFillApple } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import { FaTshirt, FaGlasses } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
// Anything
import Link from "next/link";

import CardLayout from "./components/CardLayout";
import ChildCard from "./components/ChildCard";
import CardProduct from "./components/CardProduct";

export default function Home() {
  const slider = [
    {
      src: "/img/banner3.jpg",
      alt: "Banner 1",
    },
    {
      src: "/img/banner3.jpg",
      alt: "Banner 2",
    },
    {
      src: "/img/banner3.jpg",
      alt: "Banner 3",
    },
  ];

  const responsive = {
    superLargeDesktop: {
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
      name: "Man Clothes ",
      description: "Clothes Casual For Man ",
      link: "Foods",
      icon: <FaTshirt className="text-3xl text-blue-400" />,
    },
    {
      id: 4,
      name: "Woman Clothes ",
      description: "Clothes Casual For Woman",
      link: "Foods",
      icon: <GiLargeDress className="text-3xl text-blue-400" />,
    },
    {
      id: 5,
      name: "Accessories ",
      description: " Accessories For People ",
      link: "Foods",
      icon: <FaGlasses className="text-3xl text-blue-400" />,
    },
  ];
  return (
    <div className="max-w-screen w-full ">
      <HeadingNav />
      <MyNavbar />
      {/* Carousel */}
      <Carousel infinite={true} autoPlay={true} customTransition="transform 0.5s ease-in-out" transitionDuration={300} arrows={false} responsive={responsive} className="h-[400px] w-full">
        {slider.map((item) => (
          <div key={item.alt}>
            <Image quality={100} width={500} height={400} style={{ objectFit: "cover", width: "100% " }} className="w-full object-cover object-center" src={item.src} alt={item.alt} />
          </div>
        ))}
      </Carousel>

      <CardLayout headingTitle="CATEGORIES">
        {categories.map((item) => (
          <ChildCard key={item.id} link={item.link} id={item.id} icon={item.icon} name={item.name} description={item.description} />
        ))}
      </CardLayout>

      {/*Component Card For Information  */}
      <div className="w-full max-w-screen bg-blue-400 h-32"></div>

      {/* Product */}

      <CardLayout headingTitle="RECOMENDATION PRODUCT">
        <CardProduct link="/6475.jpg" name="Kemeja Flanel Kece Pria Korean Style" label="TERMURAH" price={100000} src="/img/" />
      </CardLayout>
    </div>
  );
}
