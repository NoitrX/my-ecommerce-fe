import { NextPage } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  link: string;
  id: number;
  icon?: ReactNode;
  name: string;
  description: string;
  img?: string;
}

const ChildCard: NextPage<Props> = ({ link, id, icon, name, description, img }) => {
  return (
    <div>
      <Link href={link} key={id} className="border border-gray-200 p-4 rounded-lg w-full text-center flex justify-center items-center flex-col">
        {icon ? icon : img ? <Image width={500} height={500} src={img} alt={name} /> : <div>No image available</div>}
        <p className="font-medium text-lg mt-4">{name}</p>
        <p className="text-xs">{description}</p>
      </Link>
    </div>
  );
};

export default ChildCard;
