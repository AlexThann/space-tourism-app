import anoushehImg from "../assets/crew/image-anousheh-ansari.png";
import douglasImg from "../assets/crew/image-douglas-hurley.png";
import markImg from "../assets/crew/image-mark-shuttleworth.png";
import victorImg from "../assets/crew/image-victor-glover.png";
import CrewContainer from "../components/CrewContainer";
import { useState } from "react";

export default function CrewPage() {
  const info = [
    {
      id: 1,
      title: "COMMANDER",
      name: "DOUGLAS HURLEY",
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: douglasImg,
    },
    {
      id: 2,
      title: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: markImg,
    },
    {
      id: 3,
      title: "PILOT",
      name: "VICTOR GLOVER",
      text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      img: victorImg,
    },
    {
      id: 4,
      title: "FLIGHT ENGINNER",
      name: "ANOUSHEH ANSARI",
      text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      img: anoushehImg,
    },
  ];

  const [shownPerson, setShownPerson] = useState(info[0]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[url(./assets/crew/background-crew-mobile.jpg)] md:bg-[url(./assets/crew/background-crew-tablet.jpg)] lg:bg-[url(./assets/crew/background-crew-desktop.jpg)] z-[-10] bg-center bg-no-repeat bg-cover"></div>
      <div className="flex flex-col flex-1 px-7 md:px-10 lg:px-20 xl:px-40 mt-10">
        <p className="text-center md:text-left text-preset-5 text-[16px] md:text-[20px] lg:text-[28px] text-white mb-10 lg:mb-10">
          <span className="font-barlow-condensed text-gray-400 mr-6">02</span>
          MEET YOUR CREW
        </p>
        <CrewContainer
          shownPerson={shownPerson}
          setShownPerson={setShownPerson}
          info={info}
        />
      </div>
    </>
  );
}
