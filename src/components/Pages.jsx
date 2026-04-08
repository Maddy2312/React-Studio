import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageOne from "../Pages/PageOne.jsx";
import PageTwo from "../Pages/PageTwo.jsx";
import PageThree from "../Pages/PageThree.jsx";
import PageFour from "../Pages/PageFour.jsx";
import PageVideo from "../Pages/PageVideo.jsx";

gsap.registerPlugin(ScrollTrigger);

const Pages = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".navbar h1, .navbar h2, .navbar h4", {
      y: -200,
      stagger: 0.2,
    });

    tl.from(".text h1, .text p, .text span", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        scroller: "body",
        start: "top 50%",
        end: "50% 0%",
        scrub: 1,
        markers: true,
      },
    });

    t2.from(".top h1", { y: 80, opacity: 0, duration: 1, ease: "power3.out" })
      .from(
        ".center p, #video-play",
        { y: 80, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.3",
      )
      .from(
        ".bottom h1",
        { y: 80, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.3",
      );

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-2",
        scroller: "body",

        start: "-10% 50%",
        end: "40% 0%",
        scrub: 1,
        markers: true,
      },
    });

    t3.from("#section-2 h3, #section-2 p", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
    t3.from("#section-2 .marquee .img", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-3",
        scroller: "body",
        start: "-80% 0%",
        end: "10% 0%",
        scrub: 1,
        markers: true,
      },
    });

    t4.from("#section-3 .left,#section-3 .middle,#section-3 .right", {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
    t4.to(".video-div", {
      y: 180,
      duration: 2,
      ease: "linear",
    });

        const t5 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-4 .contrast",
          scroller: "body",
          start: "-20% 50%",
          end: "-20% 19%",
          scrub: 1,
          markers: true,
        },
    });

        t5.from(".bottom .left .left-menu, .bottom .left .right-menu, .bottom .right", {
            y: 20,
            opacity: 0,
            stagger: 0.2,
          });
          t5.from(".bottom-img h1, .bottom-img .bottom-image", {
            y: -20,
            opacity: 0,
        });
  });

  return (
    <div>
      <PageVideo />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </div>
  );
};

export default Pages;
