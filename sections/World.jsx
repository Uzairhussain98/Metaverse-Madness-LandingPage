"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { newFeatures } from "../constants";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="p1" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="p2" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[50%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="p3" className="w-full h-full" />
        </div>
        <div className="absolute top-[20%] left-[70%] w-[150px] h-[100px] p-[4px] rounded-lg bg-[#6d758b] ">
          <img
            src="/card-1.png"
            alt="card1"
            className="w-full h-full max-w-[100%]"
          />
        </div>

        <div className="absolute top-[40%] left-[15%] w-[150px] h-[100px] p-[4px] rounded-lg bg-[#6d758b] ">
          <img
            src="/card-2.png"
            alt="card1"
            className="w-full h-full max-w-[100%]"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
