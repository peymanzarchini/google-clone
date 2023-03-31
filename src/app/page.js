import HomeHeader from "@/components/header/HomeHeader";
import HomeSearch from "@/components/main/HomeSearch";
import Image from "next/image";

function Home() {
  return (
    <div>
      <HomeHeader />

      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          alt="Google"
        />
        <HomeSearch />
      </div>
    </div>
  );
}

export default Home;
