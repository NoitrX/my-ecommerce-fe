import { NextPage } from "next";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
interface Props {}

const SearchBar: NextPage<Props> = ({}) => {
  return (
    <div className="flex items-center ">
      <Input className="text-xs px-24" type="email" placeholder="Find Your Product" />
      <Combobox />
      <Button className="text-white bg-blue-400" type="submit">
        <CiSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
