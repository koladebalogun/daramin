"use client";
import React from "react";
import style from '../styles/Navbar.module.css';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={style.btn} id={style.togglebtn}>
      <div className={`${style.btnoutline} ${style.btnoutline1}`}></div>
      <div className={`${style.btnoutline} ${style.btnoutline2}`}></div>

      <div className={style.home}>
        <Link href="/">home</Link>
      </div>
    </div>
  );
};

export default Navbar;