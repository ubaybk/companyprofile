import Image from "next/image";
import Navbar from "./navbar/page";
import HeroSection from "./heroSection/page";
import RandomUser from "./randomUser/page";

export default function Home() {
  return (
    <div> 
      <Navbar />
      <HeroSection />
      {/* <RandomUser />   */}
    </div>


  );
}
