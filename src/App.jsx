import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Pages from "./components/Pages.jsx";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Pages />
    </main>
  );
};

export default App;
