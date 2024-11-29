import { useState } from "react";
import WrappedAim from "./Components/Aim";
import Book from "./Components/Book";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Patners from "./Components/Patners";
import Reason from "./Components/Reason";
import { UpCircleFilled } from "@ant-design/icons";

function App() {
  const [scrollLogo, setscrollLogo] = useState(false);
  addEventListener("scroll", () => {
    if (window.scrollY / window.innerHeight >= 0.5) {
      setscrollLogo(true);
    } else {
      setscrollLogo(false);
    }
  });

  const handleTopReturn = () => {
    //
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-spiral w-full h-full bg-no-repeat bg-cover bg-dark bg-opacity-90 text-green">
        <div>
          <div className="sticky w-full top-0 z-50">
            <Header />
          </div>
          <Hero />
        </div>
        <WrappedAim />
        <Reason />
        <Patners />
        <Book />
        {scrollLogo && (
          <div className="fixed text-white cursor-pointer md:bottom-32 bottom-20 md:right-12 right-2">
            <UpCircleFilled onClick={handleTopReturn} style={{fontSize: 52}}/>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
