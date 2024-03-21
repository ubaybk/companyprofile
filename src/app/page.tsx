import Image from "next/image";
import Navbar from "./navbar/page";
import HeroSection from "./heroSection/page";
import RandomUser from "./randomUser/page";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div> 
      <Navbar />
      <HeroSection />
      {/* <RandomUser />   */}
    </div>


  );
}
