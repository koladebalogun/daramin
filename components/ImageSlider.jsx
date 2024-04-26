import React from "react";
import style from "../styles/MobileSlider.module.css";

const ImageSlider = ({ ...props }) => {
  return (
    <div className={style.bannerimages}>
      <div className={props.sliderClass}>
        <div className={style.imagecard}>
          <img src={props.img1} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img2} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img3} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img4} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img5} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img6} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img5} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img4} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img3} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img2} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img1} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img2} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img3} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img4} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img5} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img6} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img5} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img4} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img3} alt="" className={style.sliderimage} />
        </div>
        <div className={style.imagecard}>
          <img src={props.img2} alt="" className={style.sliderimage} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
