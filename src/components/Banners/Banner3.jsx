import React from "react";
import BannerImg from "../../assets/banner-bg.jpg";
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';

const bgStyle = {
    backgroundImage :  `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
};

const Banner3 = () => {
  return (
    <section className='sm:mb-8 md:mb-16 lg:mb-20'>
      <div
        style={bgStyle}
        className="text-center items-center sm:p-8 md:p-16 lg:p-20 grid grid-cols-1 md:grid-cols-2
                    space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* Blank Div */}
        <div className="flex justify-center items-center">
          
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-2xl lg:text-6xl font-bold uppercase"
            >
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              necessitatibus ducimus eum quis. Odio velit facilis facere quae
              quasi dolores fugit aspernatur reprehenderit corrupti? Libero
              porro nostrum mollitia culpa sequi eligendi error at dolor neque?
            </motion.p>
            
            {/* button section */}
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
