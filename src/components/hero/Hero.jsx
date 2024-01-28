import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`} >
                <a className="anchor" id="hero"></a>
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn("right", "tween", .2, 1)}
                        className='primaryText'>
                        Hey! There <br /> I'm Trilok
                    </motion.span>
                    <motion.span
                        variants={fadeIn("left", "tween", .4, 1)}
                        className='secondaryText'>
                        I design Beautiful simple <br />
                        things, And I love what i do
                    </motion.span>
                </div>
                <motion.div
                    variants={fadeIn("up", "tween", .3, 1)}
                    className={css.person}>
                    <motion.img
                        variants={slideIn("up", "tween", .5, 1.3)}
                        src="./trilok1234.png" alt="" />
                </motion.div>

                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn("right", "tween", .2, 1)}
                        className={css.experiance}>
                        <div className="primaryText">06</div>
                        <div className="secondaryText">
                            <div>Month</div>
                            <div>Experiance</div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", "tween", .4, 1)}
                        className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>Certified Professional</span>
                        <span>Web Developer</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
export default Hero
