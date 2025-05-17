import Logo from "./Logo";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { NavLink } from "react-router-dom";

export default function navBar() {
  return (
    <nav className="py-[24px] px-[24px] md:pr-0 md:py-0 lg:py-[40px] lg:px-0 flex justify-between items-center">
      <div className="lg:pl-16">
        {/* hover effect otan kaneis hover to logon */}
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
}
