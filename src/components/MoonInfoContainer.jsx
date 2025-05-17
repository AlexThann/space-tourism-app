import TabLink from "./TabLink";
import { motion, AnimatePresence } from "motion/react";

export default function MoonInfoContainer({
  planetInfo,
  selectedMoon,
  setSelectedMoon,
}) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start">
      <div className="flex justify-center lg:w-1/2">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedMoon.image}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.58, 0, 0.22, 0.99] }}
            src={selectedMoon.image}
            alt=""
            className="w-[150px] h-[150px] mb-20 md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] xl:w-[480px] xl:h-[480px]"
          />
        </AnimatePresence>
      </div>
      <div className="flex flex-col items-center lg:w-1/2 md:w-2/3 lg:items-start">
        <ul className="flex flex-row gap-7 mb-8">
          {planetInfo.map((planet) => (
            <TabLink
              key={planet.id}
              selectedMoon={selectedMoon}
              planet={planet}
              setSelectedMoon={setSelectedMoon}
            />
          ))}
        </ul>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMoon.name}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.58, 0, 0.22, 0.99] }}
            className="text-preset-2 text-[56px] text-white mb-8"
          >
            {selectedMoon.name}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMoon.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className="text-preset-9 text-[15px] text-primary-light-blue text-center lg:text-left border-b-2 mb-8 pb-12 border-white/20">
              {selectedMoon.text}
            </div>
            <div className="flex flex-col md:flex-row gap-7 md:gap-30">
              <div className="text-center lg:text-left">
                <div className="text-preset-7 text-[14px] text-primary-light-blue">
                  AVG. DISTANCE
                </div>
                <div className="text-preset-6 text-[28px] text-white">
                  {selectedMoon.avgDistance}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-preset-7 text-[14px] text-primary-light-blue">
                  EST. TRAVEL TIME
                </div>
                <div className="text-preset-6 text-[28px] text-white">
                  {selectedMoon.travelTime}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
