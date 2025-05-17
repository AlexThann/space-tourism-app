import moonLogo from "../assets/destination/image-moon.png";
import marsLogo from "../assets/destination/image-mars.png";
import europaLogo from "../assets/destination/image-europa.png";
import titanLogo from "../assets/destination/image-titan.png";
import MoonInfoContainer from "../components/MoonInfoContainer";
import { useState, useEffect } from "react";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";

export default function DestinationPage() {
  const bgImages = [bgMobile, bgTablet, bgDesktop];

  useEffect(() => {
    // Preload all images
    bgImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const planetInfo = [
    {
      id: 1,
      name: "MOON",
      image: moonLogo,
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 KM",
      travelTime: "3 DAYS",
    },
    {
      id: 2,
      name: "MARS",
      image: marsLogo,
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "255 MIL. KM",
      travelTime: "9 MONTHS",
    },
    {
      id: 3,
      name: "EUROPA",
      image: europaLogo,
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL. KM",
      travelTime: "3 YEARS",
    },
    {
      id: 4,
      name: "TITAN",
      image: titanLogo,
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDistance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
    },
  ];

  const [selectedMoon, setSelectedMoon] = useState(planetInfo[0]);

  // Runs once
  useEffect(() => {
    // Preload all images
    planetInfo.forEach((planet) => {
      const img = new Image();
      img.src = planet.image;
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[url(./assets/destination/background-destination-mobile.jpg)] md:bg-[url(./assets/destination/background-destination-tablet.jpg)] lg:bg-[url(./assets/destination/background-destination-desktop.jpg)] z-[-10] bg-center bg-no-repeat bg-cover"></div>
      <div className="flex flex-col flex-1 px-7 md:px-10 lg:px-20 xl:px-40 mt-10">
        <p className="text-center md:text-left text-preset-5 text-[16px] md:text-[20px] lg:text-[28px] text-white mb-10 lg:mb-20">
          <span className="font-barlow-condensed text-gray-400 mr-6">01</span>{" "}
          PICK YOUR DESTINATION
        </p>
        <MoonInfoContainer
          planetInfo={planetInfo}
          selectedMoon={selectedMoon}
          setSelectedMoon={setSelectedMoon}
        />
      </div>
    </>
  );
}
