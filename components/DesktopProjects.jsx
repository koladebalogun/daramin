"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutLoader from "@/components/AboutLoader";
import Navbar from "@/components/Navbar";
import Images from "@/components/Images";
import data from "../utils/projectData.json";
import { Animate } from "@/hooks/animate";

gsap.registerPlugin(ScrollTrigger);

export default function DesktopProjects() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const section = document.querySelectorAll("section");
    Animate(".name", ".name2", ".scroll");
    let ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1,
            pin: true,
            start: "top top",
            end: "+=4000",
          },
        })
        .to(containerRef.current, {
          x: () =>
            -(
              containerRef.current.scrollWidth -
              document.documentElement.clientWidth -
              5
            ) + "px",
          ease: "none",
          duration: 1,
        })
        .to(".side-bar", {
          x: 70,
          opacity: 1,
          scrollTrigger: {
            trigger: ".side-bar",
            start: "center+=2500 center",
            scrub: 2.5,
          },
        })
        .to({}, { duration: 1 / section.length });

      gsap.to(".col-1", {
        y: -250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".col-2", {
        y: 250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".col-3", {
        y: -250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".num", {
        x: 600,
        duration: 2,
        scrollTrigger: {
          trigger: ".num",
          start: "right left",
        },
      });

      return () => {
        tl.kill();
      };
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <AboutLoader />
      <Navbar />
      <div className="main-wrapper" ref={containerRef}>
        <section className="section-1">
          <div className="box1">
            <div className="name">Meet</div>
            <div className="name2">
              <span>Damibliz</span>
            </div>

            <div className="scroll">scroll</div>
          </div>

          <div className="box2">
            <div className="image-gallery">
              <Images
                image1="/img1.jpg"
                image2="/img2.jpg"
                image3="/img3.jpg"
                image4="/img4.jpg"
                image5="/img5.jpg"
                class="gallery-col col-1"
              />

              <Images
                image1="/img6.jpg"
                image2="/img7.jpg"
                image3="/img5.jpg"
                image4="/img4.jpg"
                image5="/img3.jpg"
                class="gallery-col col-2"
              />

              <Images
                image1="/img2.jpg"
                image2="/img1.jpg"
                image3="/img2.jpg"
                image4="/img3.jpg"
                image5="/img4.jpg"
                class="gallery-col col-3"
              />
            </div>
          </div>
        </section>

        <section className="section-2">
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
        </section>
      </div>
    </>
  );
}
