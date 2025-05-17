import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

export default function TechnologyContainer() {
  const info = [
    {
      id: 1,
      images: {
        landscape: launchVehicleLandscape,
        portrait: launchVehiclePortrait,
      },
      header: "LAUNCH VEHICLE",
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      id: 2,
      images: {
        landscape: spaceportLandscape,
        portrait: spaceportPortrait,
      },
      header: "SPACEPORT",
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      id: 3,
      images: {
        landscape: spaceCapsuleLandscape,
        portrait: spaceCapsulePortrait,
      },
      header: "SPACE CAPSULE",
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const [selectedTechnology, setSelectedTechnology] = useState(info[0]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    init: {
      opacity: 0.2,
      transition: {
        duration: 0.3,
      },
    },
    anim: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col w-full items-center lg:flex-row-reverse lg:justify-between ">
      <AnimatePresence mode="wait">
        <motion.div
          variants={variants}
          initial="init"
          animate="anim"
          exit="exit"
          key={selectedTechnology.id}
          style={{
            backgroundImage: `url(${
              isLargeScreen
                ? selectedTechnology.images.portrait
                : selectedTechnology.images.landscape
            })`,
          }}
          className={` bg-center bg-no-repeat bg-cover  w-full h-[250px] md:h-[350px] lg:h-[500px] lg:w-[550px] xl:h-[600px] xl:w-[600px] mb-10`}
        ></motion.div>
      </AnimatePresence>
      <div className="flex flex-col items-center gap-[5%] lg:w-1/2 lg:flex-row lg:pl-16">
        <div className="flex flex-row gap-4 mb-6 lg:flex-col">
          {info.map((tec, index) => {
            return (
              <button
                onClick={() => setSelectedTechnology(info[index])}
                key={index}
                className={`w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 border-2 rounded-full text-preset-4 text-[18px] md:text-[24px] lg:text-[32px] cursor-pointer transition duration-300 ease
                        ${
                          selectedTechnology.id === info[index].id
                            ? "text-primary-blue bg-white border-white"
                            : "text-white bg-transparent  border-gray-700 hover:border-gray-200 "
                        }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 px-7 text-center lg:text-left ">
          <h1 className="text-preset-4 text-neutral-400 text-[18px] md:text-[24px] xl:text-[32px]">
            THE TERMINOLOGY...
          </h1>
          <AnimatePresence mode="wait">
            <motion.div
              variants={variants}
              initial="init"
              animate="anim"
              exit="exit"
              key={selectedTechnology.id}
            >
              <h2 className="text-preset-3 text-[24px] md:text-[40px] xl:text-[56px] text-white">
                {selectedTechnology.header}
              </h2>
              <p className="text-preset-9 text-[15px] md:text-[16px] xl:text-[18px] text-primary-light-blue">
                {selectedTechnology.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
