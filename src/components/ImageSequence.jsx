import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// Now Responsive
const ImageSequence = () => {
  const canvasRef = useRef(null);
  const lenisRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const frameCount = 46;
    const images = [];
    const imageSeq = { frame: 0 };

    const currentFrame = (index) =>
      `/ImagesSequence/frame-${String(index + 1).padStart(3, "0")}.webp`;

    // Responsive canvas sizing
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      render();
    };

    // Draw image without distortion (cover mode)
    const drawCoverImage = (img) => {
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      const imgAspect = img.width / img.height;
      const canvasAspect = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, x, y;

      if (imgAspect > canvasAspect) {
        drawHeight = canvasHeight;
        drawWidth = drawHeight * imgAspect;
        x = (canvasWidth - drawWidth) / 2;
        y = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = drawWidth / imgAspect;
        x = 0;
        y = (canvasHeight - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    function render() {
      const img = images[imageSeq.frame];
      if (img && img.complete && img.naturalWidth !== 0) {
        drawCoverImage(img);
      }
    }

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);

      img.onload = () => {
        if (i === 0) render();
      };

      images.push(img);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Lenis smooth scroll
    lenisRef.current = new Lenis({
      smooth: true,
      duration: 1.2,
    });
    
    function raf(time) {
      lenisRef.current.raf(time);
      
      const scrollTop = lenisRef.current.scroll;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
        
        const progress = Math.max(
          0,
          Math.min(1, scrollTop / maxScroll)
        );
        
        imageSeq.frame = Math.min(
          frameCount - 1,
        Math.floor(progress * (frameCount - 1))
      );
      
      render();
      
      animationRef.current = requestAnimationFrame(raf);
    }
    
    animationRef.current = requestAnimationFrame(raf);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      lenisRef.current?.destroy();
      cancelAnimationFrame(animationRef.current);
    };
  }, []);


  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          display: "block",
          zIndex: 0,
        }}
      />
      <div style={{ height: "500vh" }} />
    </>
  );
};

export default ImageSequence;