"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 items-center"
  >
    <img
      src={imgUrl}
      alt="planet"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="flex flex-col text-white gap-6 p-6">
      <div className="w-[80%] ml-[40px]">
        <h1 className="text-white font-bold text-left text-[34px]">{title}</h1>
        <p className="text-[#ad9aadaa] font-bold text-left text-[18px]">
          {subtitle}
        </p>
      </div>
    </div>
    <div className="lg:flex hidden items-center justify-center w-[140px] h-[100px] bg-transparent rounded-full border-white border-[1px]">
      <img
        src="/arrow.svg"
        alt="arrwo"
        className="w-[40%] h-[40%] object-contain"
      />
    </div>
  </motion.div>
);

export default InsightCard;
