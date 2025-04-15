import React from 'react';
import BannerImg from "../../assets/fruit-plate2.png";
import { motion } from 'framer-motion';
import { FadeLeft, FadeUp } from '../../utility/animation';

const Banner2 = () => {
  return (
    <section className='sm:mb-8 md:mb-16 lg:mb-20'>
        <div className='text-center items-center sm:p-8 md:p-16 lg:p-20 grid grid-cols-1 md:grid-cols-2
                        space-y-6 md:space-y-0 py-14'>
           
            {/* Brand Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1 
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        className='text-2xl lg:text-6xl font-bold uppercase'>
                        Brand Info
                    </motion.h1>
                    <motion.p
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit necessitatibus ducimus eum quis. Odio velit facilis facere 
                        quae quasi dolores fugit aspernatur reprehenderit corrupti? Libero 
                        porro nostrum mollitia culpa sequi eligendi error at dolor neque?
                    </motion.p>
                    <motion.p
                        variants={FadeUp(0.9)}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ad asperiores quidem et? Et earum magnam quaerat repellendus. 
                        Perspiciatis vitae earum porro nobis possimus, corrupti odit.
                    </motion.p>

                    {/* button section */}
                    {/* button section */}
                    <motion.div 
                        variants={FadeUp(1.1)}
                        initial="hidden"
                        animate="visible"
                        className='flex justify-center md:justify-start'>
                        <button className='primary-btn'>
                            Download App
                        </button>
                    </motion.div>

                </div>
            </div>

             {/* Banner Image */}
             <div className='flex justify-center items-center'>
                <motion.img 
                    initial={{ opacity: 0, x: 200, rotate: 75 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2}}
                    viewport={{ once: true }}
                    src={BannerImg} 
                    alt="" 
                    className='w-[350px] md:max-w-[500px] h-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default Banner2