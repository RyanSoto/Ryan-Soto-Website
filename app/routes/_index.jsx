import MainComp from "../components/MainComp";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useMemo, useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import options from "../data/tspartdata.js";

export const meta = () => {
  return [
    { title: "Ryan Soto" },
    { name: "Ryan Soto's Website", content: "Ryan Soto's Website" },
  ];
};

export default function Index() {


  return (
    <MainComp/>
  );
}
