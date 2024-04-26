"use client";
import AboutLoader from "@/components/AboutLoader";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import style from "../../styles/Aboutme.module.css";
import Link from "next/link";
import { Animate } from "@/hooks/animate";
// import SocialMediaIcons from "@/components/SocialMediaIcons";

const page = () => {
  const header1 = useRef(null);
  const header2 = useRef(null);
  const text = useRef(null);
  const text2 = useRef(null);
  const projects = useRef(null);
  const box = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      Animate(header1.current, header2.current, text2.current);

      gsap.to(box.current, 2.4, {
        y: "-100%",
        ease: "Expo.easeInOut",
        delay: 1.8,
      });

      gsap.from(text.current, 2, {
        opacity: 0,
        ease: "Expo.easeInOut",
        delay: 1.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <AboutLoader />
      <Navbar />
      <div className={style.container}>
        <div className={style.wrapperimg}>
          <div className={style.box} ref={box}></div>
          <img src="/img3.jpg" alt="" className={style.aboutimage} />
        </div>

        <div className={style.header}>
          <div className={style.header1} ref={header1}>
            DARAMINI
          </div>
          <div className={style.header2} ref={header2}>
            RECORDS
          </div>
        </div>
        <div className={style.herocontainer}>
          <div className={style.sidebartext} ref={text}>
            <p>
              At <span>DARAMIN RECORDS</span> we're more than just a label;
              we're a home for artists, a beacon for creativity, and a curator
              of musical excellence.
              <br />
              <br />
              With a passion for innovation and a commitment to authenticity, we
              strive to empower artists to unleash their true potential and
              share their unique voice with the world. Our diverse roster spans
              genres, but our dedication to quality and artistry remains
              unwavering. Welcome to the Daramin experience.
            </p>
          </div>
          <div className={style.sidebarskills} ref={text2}>
            <h2>contact us</h2>
            <h6>
              3 Clifsend House Cowley Estate
              <br />
              Daraminrecords@gmail.com
              <br />
              07743917709
            </h6>
          </div>

          <div className={style.links}>
            <div className={style.projects} ref={projects}>
              <Link href="/artist">Artist</Link>
            </div>

            {/* <SocialMediaIcons /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
