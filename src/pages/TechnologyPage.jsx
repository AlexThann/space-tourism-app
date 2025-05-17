import { useEffect } from "react";
import TechnologyContainer from "../components/TechnologyContainer";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";

export default function TechnologyPage() {
  const bgImages = [bgMobile, bgTablet, bgDesktop];

  useEffect(() => {
    // Preload all images
    bgImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[url(./assets/technology/background-technology-mobile.jpg)] md:bg-[url(./assets/technology/background-technology-tablet.jpg)] lg:bg-[url(./assets/technology/background-technology-desktop.jpg)] z-[-10] bg-center bg-no-repeat bg-cover"></div>
      <div className="flex flex-col  mt-10">
        <p className="text-center md:text-left text-preset-5 text-[16px] md:text-[20px] lg:text-[28px] text-white mb-10 lg:mb-20 md:pl-6 lg:pl-16">
          <span className="font-barlow-condensed text-gray-400 mr-6">03</span>{" "}
          SPACE LAUNCH 101
        </p>
      </div>
      <TechnologyContainer />
    </>
  );
}
