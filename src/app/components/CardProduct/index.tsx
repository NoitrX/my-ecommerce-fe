import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  src: string;
  link: string;
  name: string;
  label: string;
  price: number;
}

const CardProduct: NextPage<CardProductProps> = ({ src, link, name, label, price }) => {
  return (
    <div>
      <Link href={link} className="border border-gray-200  rounded-md w-full flex justify-center items-center flex-col">
        <Image width={500} height={500} src={src} objectFit="cover" alt="Banner 1" />
        <div className="p-4">
          <h2 className="font-medium">{name}</h2>
          <p className="text-xs border border-blue-400 rounded-full inline px-2 1 text-blue-400">{label}</p>
          <p className="font-bold text-blue-400">Rp.{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
