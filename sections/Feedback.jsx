"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-4 `}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.25, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 
        sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4
            className="font-bold sm:text-[32px] text-[26px]
             text-white sm:leading-[40px] leading-[36px]"
          >
            Samanta
          </h4>
          <p className="text-white mt-[8px] sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px]">
            Founder Metaverses
          </p>
          <p
            className="text-white text-normal sm:text-[24px] text-[18px] sm:leading-[45px]
           leading-[39px] mt-[24px]"
          >
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center "
      >
        <img
          src="/planet-09.png"
          alt="plant"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[15%] top-[3%]"
        >
          <img
            src="/stamp.png"
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px]  object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
