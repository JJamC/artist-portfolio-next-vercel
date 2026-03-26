"use client"
import { useState, useEffect } from "react";
import DesktopUI from "./components/DesktopUI";
import MobileUI from "./components/MobileUI";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);


  const [nav, setNav] = useState("Home");
  const [active, setActive] = useState("");


  return isMobile ? (
    <MobileUI nav={nav} setNav={setNav} active={active} setActive={setActive} />
  ) : (
    <DesktopUI
      nav={nav}
      setNav={setNav}
      active={active}
      setActive={setActive}
    />
  );
}
