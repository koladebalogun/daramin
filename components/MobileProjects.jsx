import React from "react";
import style from "../styles/MobileSlider.module.css";
import MobileSlider from "./MobileSlider";
import ImageSlider from "./ImageSlider";
import AboutLoader from "./AboutLoader";
import Navbar from "./Navbar";

const MobileProjects = () => {
  return (
    <>
      <AboutLoader />
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.banner}>
          <div className={style.bannername}>Meet</div>
          <div className={style.bannername2}>
            <span>damibliz</span>
          </div>
        </div>

        <div className="about">
          <p style={{ color: "white" }} className="section_text">
            <span>Damibliz</span>, the Nigerian-born musical sensation,
            captivates audiences worldwide with his electrifying blend of
            Afrobeat, dancehall, and afropop. Renowned for chart-topping hits
            like "<span>Jowabayi</span>," "<span>Mamamito</span>," "
            <span>Shipalapa</span>," "<span>Medulla</span>," "
            <span>Kokosa</span>," and "<span>Emadun</span>," Damibliz has
            solidified his status as a versatile and dynamic artist. Born and
            bred in Nigeria, his music reflects the rich tapestry of his
            cultural heritage, infused with infectious rhythms and vibrant
            melodies that resonate with fans across the globe.
            <br />
            <br />
            With an unmistakable charisma and a penchant for crafting infectious
            grooves, Damibliz has garnered widespread acclaim for his distinct
            sound and undeniable stage presence. His music transcends borders,
            blending traditional African elements with contemporary influences
            to create a sound that is uniquely his own.
            <br />
            <br />
            As he continues to push boundaries and push the envelope of
            Afrobeat, Damibliz remains a trailblazer in the music industry,
            leaving an indelible mark on the world stage with each electrifying
            performance and chart-topping release.
          </p>
        </div>
        {/* <ImageSlider
        sliderClass={style.slider1}
        img1="/img1.jpg"
        img2="/img2.jpg"
        img3="/img3.jpg"
        img4="/img4.jpg"
        img5="/img5.jpg"
        img6="/img6.jpg"
      />
      <ImageSlider
        sliderClass={style.slider2}
        img1="/img7.jpg"
        img2="/img6.jpg"
        img3="/img5.jpg"
        img4="/img4.jpg"
        img5="/img3.jpg"
        img6="/img2.jpg"
      />
      <ImageSlider
        sliderClass={style.slider3}
        img1="/img1.jpg"
        img2="/img2.jpg"
        img3="/img3.jpg"
        img4="/img4.jpg"
        img5="/img5.jpg"
        img6="/img6.jpg"
      /> */}
        <MobileSlider />
      </div>
    </>
  );
};

export default MobileProjects;
