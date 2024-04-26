"use client"
import {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import style from "../styles/Aboutme.module.css"

const AboutLoader = () => {
  const wrapper = useRef(null)
  const loader = useRef(null)

  useEffect(() => {
    gsap.to(wrapper.current,2,{
      top:"-100%",
      ease: "Expo.easeInOut",
      delay: 1.2
    })

    gsap.from(loader.current, 1.6, {
      ease: "Expo.easeInOut",
      delay:1,
    })

    gsap.to(loader.current, 1.6, {
      height: -0,
      ease: "Expo.easeInOut",
    })
  },[])

  return (
    <div className={style.loaderwrapper} ref={wrapper}>
      <div className={style.aboutmeloader} ref={loader}>
      </div>
    </div>
  )
}

export default AboutLoader