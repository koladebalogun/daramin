"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../styles/MobileSlider.module.css";
import data from "../utils/projectData.json";

const MobileSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className={style.carousel} ref={carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={style.innercarousel}
      >
        {data.map((item, i) => (
          <div className={style.innerWrappper}>
            <motion.div className={style.item}>
              <img src={item.imageUrl} alt="" />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileSlider;
