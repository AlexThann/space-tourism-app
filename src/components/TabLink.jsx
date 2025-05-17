import { motion } from "motion/react";

export default function TabLink({ id, selectedMoon, planet, setSelectedMoon }) {
  return (
    <li
      className={
        selectedMoon.id === planet.id
          ? `pb-2 relative inline-block text-preset-8 text-white cursor-pointer transition duration-500 ease-in-out`
          : `pb-2 relative inline-block text-preset-8 text-primary-light-blue cursor-pointer border-b-2 border-b-transparent hover:border-b-2 hover:border-white/70 hover:text-white/70 transition duration-500 ease-in-out`
      }
      key={id}
      onClick={() => setSelectedMoon(planet)}
    >
      {planet.name}
      {planet.id === selectedMoon.id ? (
        <motion.div
          className="absolute bottom-0 w-full h-[2px] bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ width: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      ) : null}
    </li>
  );
}
