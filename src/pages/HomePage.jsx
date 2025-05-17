import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect } from "react";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";

export default function HomePage() {
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
      <div className="fixed top-0 left-0 w-full h-full bg-[url(./assets/home/background-home-mobile.jpg)] md:bg-[url(./assets/home/background-home-tablet.jpg)] lg:bg-[url(./assets/home/background-home-desktop.jpg)] z-[-10] bg-center bg-no-repeat bg-cover"></div>
      <motion.div
        initial={{ x: -250, opacity: 0.3 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col h-full items-center lg:flex-row lg:flex-1 lg:justify-around"
      >
        <div className="flex flex-col items-center px-6 md:px-20 my-10 md:mt-30 lg:items-start lg:w-3/4 lg:pr-0">
          <p className="text-preset-6 text-[16px] md:text-[28px] text-primary-light-blue text-center lg:text-left lg:w-2/3">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="text-preset-1 text-white text-[80px] md:text-[144px] lg:text-left lg:w-1/2">
            SPACE
          </p>
          <p className="text-preset-9 text-[15px] md:text-[16px] text-primary-light-blue text-center lg:text-left lg:w-1/2">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we we'll give you a truly out of
            this world experience
          </p>
        </div>
        <div className="lg:w-1/4 flex lg:justify-center">
          <Link to="/destination">
            <motion.button
              whileHover={{
                boxShadow: [
                  "0 0 30px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 30px rgba(255,255,255,0.3)",
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              initial={{ boxShadow: "0 0 0px rgba(255,255,255,0)" }}
              className="text-preset-4 bg-white w-[144px] h-[144px] md:w-[272px] md:h-[272px] rounded-[100%] cursor-pointer mt-20 text-[18px] md:text-[32px]"
            >
              EXPLORE
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
