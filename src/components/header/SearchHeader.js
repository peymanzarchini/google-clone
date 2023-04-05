import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchOptions from "./SearchOptions";

function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col md:flex-row w-full p-6 items-center justify-between">
        <div className="flex space-x-10 w-full md:w-[185px] justify-between items-center">
          <Link href="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
              alt="Google"
              width="120"
              height="40"
              className="block"
            />
          </Link>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2 md:hidden">
              <RiSettings3Line className="header-icon" />
              <TbGridDots className="header-icon" />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md md:hidden hover:brightness-105 hover:shadow-md transition-all ml-2 flex-shrink-0">
              Sign in
            </button>
          </div>
        </div>
        <div className="flex-1 mt-3">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hidden md:inline hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button>
      </div>
      <SearchOptions />
    </header>
  );
}

export default SearchHeader;
