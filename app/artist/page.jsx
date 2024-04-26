"use client";
import { useEffect, useState } from "react";
import MobileProjects from "@/components/MobileProjects";
import DesktopProjects from "@/components/DesktopProjects";

export default function Artist() {
  const [isMobile, setIsMobile] = useState(false) 
  useEffect(() => {
    if(window.innerWidth < 1000) setIsMobile(true)
  },[])

  return (
    <>{isMobile ? <MobileProjects /> : <DesktopProjects />}</>
  );
}
