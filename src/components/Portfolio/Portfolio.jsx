import React from 'react';
import css from './Portfolio.module.scss';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';


const Portfolio = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>

        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className='primaryText'>
              My Latest Works
            </span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <span className='secondaryText'>Explore More Works</span>
        </div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn('up', 'tween', .5, .6)}
            src="/showCase1.png" alt="Project" />
          <motion.img
            variants={fadeIn('up', 'tween', .7, .6)}
            src="./showCase2.png" alt="Project" />
          <motion.img
            variants={fadeIn('up', 'tween', .9, .6)}
            src="./showCase3.png" alt="Project" />
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio
