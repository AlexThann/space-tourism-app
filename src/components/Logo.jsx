import { motion } from "motion/react";

export default function Logo() {
  return (
    <>
      <svg
        className="transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            stroke="#0B0D17"
            strokeWidth={2}
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </>
  );
}
