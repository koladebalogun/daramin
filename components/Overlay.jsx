"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Overlay = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("h2 div", 1.5, {
        yPercent: 100,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });

      gsap.to("h2", 1.5, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    gsap.to("h2 div", 1.5, {
      yPercent: -100,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    gsap.to("h2", 1.5, {
      clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    gsap.to(".overlay", 2, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
    });

    gsap.to(".img", 2, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      stagger: {
        amount: 1.5,
      },
    });

    gsap.to(".loader", 2, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      delay: 2,
    });
  };

  return (
    <div>
      <div className="loader">
        <div className="img">
          <img src="/img1.jpg" />
        </div>
        <div className="img">
          <img src="/img2.jpg" />
        </div>
        <div className="img">
          <img src="/img3.jpg" />
        </div>
        <div className="img">
          <img src="/img4.jpg" />
        </div>
        <div className="img">
          <img src="/img5.jpg" />
        </div>
        <div className="img">
          <img src="/img6.jpg" />
        </div>
        <div className="img">
          <img src="/img7.jpg" />
        </div>
      </div>

      <div className="overlay" onClick={handleClick}>
        <div className="col">
          <h2>
            <div style={{ color: "orangered" }}>Daramin Records</div>
          </h2>
          <h2>
            <div>where every beat,</div>
          </h2>
          <h2>
            <div>tells a story</div>
          </h2>
        </div>
        <div className="col">
          <h2>
            <div>
              <span>click</span> anywhere to continue
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
