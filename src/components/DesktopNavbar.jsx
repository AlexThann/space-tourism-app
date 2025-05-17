import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export default function DesktopNavbar() {
  const getNavLinkClass = (isActive) =>
    isActive
      ? "border-b-2 border-b-white flex items-center text-preset-8 text-white transition duration-300 ease-in-out"
      : "border-b-2 border-b-transparent hover:border-b-2 hover:border-white/60 flex items-center text-preset-8 text-white transition duration-300 ease-in-out";

  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden relative origin-left translate-x-20 z-20 lg:flex flex-1 w-3.5 h-[2px] border-b-1 border-white/20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" hidden bg-white/5 backdrop-blur-md px-8 h-[100px] justify-end gap-5  md:flex md:w-[90%] lg:w-auto lg:pl-60  "
      >
        <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="/">
          <span className="text-preset-8 text-white font-medium  pr-2">00</span>
          HOME
        </NavLink>

        <NavLink
          className={({ isActive }) => getNavLinkClass(isActive)}
          to="/destination"
        >
          <span className="text-preset-8 text-white font-medium pr-2">01</span>
          DESTINATION
        </NavLink>

        <NavLink
          className={({ isActive }) => getNavLinkClass(isActive)}
          to="/crew"
        >
          <span className="text-preset-8 text-white font-medium pr-2">02</span>
          CREW
        </NavLink>

        <NavLink
          className={({ isActive }) => getNavLinkClass(isActive)}
          to="/technology"
        >
          <span className="text-preset-8 text-white font-medium pr-2">03</span>
          TECHNOLOGY
        </NavLink>
      </motion.div>
    </>
  );
}
