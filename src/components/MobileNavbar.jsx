import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function MobileNavbar() {
  const [isMobile, setIsMobile] = useState(false);

  const getNavLinkClass = (isActive) =>
    isActive
      ? "py-2 border-r-2 border-r-white  text-preset-8  text-white transition duration-300 ease-in-out w-full"
      : "py-2 border-r-2 border-r-transparent hover:border-r-2 hover:border-white/60 text-preset-8  text-white transition duration-300 ease-in-out  w-full ";

  const variants = {
    visible: { x: 0, transition: { type: "tween", duration: 0.5 } },
    hidden: { x: 300 },
    exit: { x: 300, transition: { type: "tween", duration: 0.5 } },
  };

  return (
    <>
      <img
        src={hamburger}
        className="w-[28px] h-[28px] md:hidden cursor-pointer"
        onClick={() => setIsMobile((prevState) => !prevState)}
        alt=""
      />
      <AnimatePresence>
        {isMobile && (
          <>
            <div
              className="fixed top-0 left-0 w-full h-full z-10"
              onClick={() => setIsMobile(false)}
            ></div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed z-20 top-0 right-0 w-2/3 h-full bg-white/5 backdrop-blur-md md:hidden"
            >
              <div className="py-[34px] px-[24px] flex justify-end items-center mb-20">
                <img
                  src={closeIcon}
                  alt=""
                  className="w-[28px] h-[28px] cursor-pointer"
                  onClick={() => setIsMobile((prevState) => !prevState)}
                />
              </div>
              <div className="flex flex-col items-start gap-10 pl-12">
                <NavLink
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  to="/"
                  onClick={() => setIsMobile(false)}
                >
                  <span className="text-preset-8 text-white font-medium  pr-2">
                    00
                  </span>
                  HOME
                </NavLink>

                <NavLink
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  to="/destination"
                  onClick={() => setIsMobile(false)}
                >
                  <span className="text-preset-8 text-white font-medium pr-2">
                    01
                  </span>
                  DESTINATION
                </NavLink>

                <NavLink
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  to="/crew"
                  onClick={() => setIsMobile(false)}
                >
                  <span className="text-preset-8 text-white font-medium pr-2">
                    02
                  </span>
                  CREW
                </NavLink>

                <NavLink
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  to="/technology"
                  onClick={() => setIsMobile(false)}
                >
                  <span className="text-preset-8 text-white font-medium pr-2">
                    03
                  </span>
                  TECHNOLOGY
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
