import { NextPage } from "next";
import { ReactNode } from "react";

// Another Component
import ChildCard from "../ChildCard";

// Interface
interface CardProps {
  headingTitle: string;
  data?: Category[];
  children?: any;
}

interface Category {
  link: string;
  id: number;
  icon?: ReactNode;
  name: string;
  description: string;
  img?: string;
}

const CardLayout: NextPage<CardProps> = ({ headingTitle, data, children }) => {
  return (
    <div>
      <div className="w-full px-8 lg:px-24 py-12">
        <div className="border border-gray-300 rounded-md p-12 h-full flex flex-col justify-between">
          <h2 className="font-semibold mb-2 text-lg">{headingTitle}</h2>
          <hr className="w-full mb-4" />
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
