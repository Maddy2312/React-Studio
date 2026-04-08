import React, { useEffect, useRef } from "react";

const ImageSequence2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 170;
    const images = [];
    const imageSeq = { frame: 0 };

const currentFrame = (index) =>
  `/frames2/${String(index + 1).padStart(4, "0")}.webp`;
    // preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        images[imageSeq.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    function onScroll() {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollTop / maxScroll;

      imageSeq.frame = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );

      render();
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
      />
      <div style={{ height: "600vh" }} />
    </>
  );
};

export default ImageSequence2;