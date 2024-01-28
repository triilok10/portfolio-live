import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
    const menuRef = useRef(null);
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    useOutsideAlerter({
        menuRef,
        setMenuOpened,
    });

    return (
        <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            className={`bg-primary paddings ${css.wrapper}`}
            viewport={{ once: true, amount: 0.25 }}
            style={{ boxShadow: headerShadow }}
        >
            <div className={`innerWidth ${css.container} flexCenter`}>
                <div className={css.name}>Trilok Chand Swami</div>
                <ul
                    className={`flexCenter ${css.menu}`}
                    ref={menuRef}
                    style={getMenuStyles(menuOpened)}
                >
                    <li><a href="#experties">Services</a></li>
                    <li><a href="#Work">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#people">Testimonials</a></li>
                    <li><a href="#vlogs">Vlogs</a></li>
                    <li><a href="#githubapp">News</a></li>
                    <li><a href="#locate">Location</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>(+91) 8058436268</p>
                        <BiPhoneCall size={"40px"} />
                    </li>
                </ul>
                <div
                    className={css.menuIcon}
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </motion.div>
    );
};

export default Header;