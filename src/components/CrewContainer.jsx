import { motion, AnimatePresence, easeOut } from "motion/react";

export default function CrewContainer({ shownPerson, setShownPerson, info }) {
  return (
    <>
      <div className="flex flex-col items-center gap-12 flex-1 lg:flex-row pb-12">
        <div className="flex lg:w-1/2 xl:h-[450px] flex-col items-center justify-between text-center lg:items-start lg:text-left ">
          <AnimatePresence mode="wait">
            <motion.div
              key={shownPerson.id}
              initial={{ opacity: 0.6, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-preset-4 text-[18px] text-[#949494] md:text-[24px] lg:text-[32px] ">
                {shownPerson.title}
              </h3>
              <h1 className="text-preset-3 text-[24px] text-white md:text-[40px] lg:text-[56px]   ">
                {shownPerson.name}
              </h1>
              <p className="text-preset-9 text-primary-light-blue text-[15px] mt-8 leading-[180%] md:text-[16px] lg:text-[18px]">
                {shownPerson.text}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-start gap-6 mt-20">
            {info.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full cursor-pointer transition duration-300 ease-in ${
                  shownPerson.id === info[index].id
                    ? "bg-white scale-120"
                    : "bg-white/20 hover:bg-white/50"
                }`}
                onClick={() => setShownPerson(info[index])}
              ></button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="lg:w-1/2 flex justify-center"
            key={shownPerson.id}
            initial={{ opacity: 0.6, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={shownPerson.img}
              className="mask-gradient w-[271px] h-[340px] md:w-[366px] md:h-[460px] md:relative md:translate-y-[70px] lg:translate-y-0 lg:w-[400px] lg:h-[500px] xl:w-[500px] xl:h-[600px]"
              alt={`${shownPerson.name} image`}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
