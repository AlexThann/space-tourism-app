import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import bgMobileHome from "../assets/home/background-home-mobile.jpg";
import bgTabletHome from "../assets/home/background-home-tablet.jpg";
import bgDesktopHome from "../assets/home/background-home-desktop.jpg";
import bgMobileDestination from "../assets/destination/background-destination-mobile.jpg";
import bgTabletDestination from "../assets/destination/background-destination-tablet.jpg";
import bgDesktopDestination from "../assets/destination/background-destination-desktop.jpg";
import bgMobileTechnology from "../assets/technology/background-technology-mobile.jpg";
import bgTabletTechnology from "../assets/technology/background-technology-tablet.jpg";
import bgDesktopTechnology from "../assets/technology/background-technology-desktop.jpg";
import bgMobileCrew from "../assets/crew/background-crew-mobile.jpg";
import bgTabletCrew from "../assets/crew/background-crew-tablet.jpg";
import bgDesktopCrew from "../assets/crew/background-crew-desktop.jpg";

export default function MainLayout() {
  const bgImages = [
    bgMobileHome,
    bgMobileCrew,
    bgMobileTechnology,
    bgMobileDestination,
    bgTabletHome,
    bgDesktopHome,
    bgTabletDestination,
    bgDesktopDestination,
    bgTabletTechnology,
    bgDesktopTechnology,
    bgTabletCrew,
    bgDesktopCrew,
  ];

  useEffect(() => {
    // Preload all images
    bgImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
}
