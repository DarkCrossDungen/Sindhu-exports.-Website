"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 441;  // Total frames from 10 to 450
const FRAME_START = 10;   // start at frame 10

function drawCover(ctx, img) {
  const canvas = ctx.canvas;
  const w = canvas.width;
  const h = canvas.height;
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;
  const scale = Math.max(w / iw, h / ih);
  const nw = iw * scale;
  const nh = ih * scale;
  const ox = (w - nw) / 2;
  const oy = (h - nh) / 2;
  
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, ox, oy, nw, nh);
}

export default function ScrollVideo({ progress: externalProgress }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const wrapperRef = useRef(null);

  // Use overall page scroll to drive frames unless an external progress is provided
  const { scrollYProgress } = useScroll();
  const activeProgress = externalProgress || scrollYProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      // Redraw current frame after resize
      const progress = activeProgress.get();
      const idx = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(progress * FRAME_COUNT))
      );
      const img = imagesRef.current[idx];
      if (img && img.complete && img.naturalWidth) {
        drawCover(canvas.getContext("2d"), img);
      }
    };

    window.addEventListener("resize", resize);
    resize();

    // Preload all frames
    const images = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = String(FRAME_START + i).padStart(5, "0");
      img.src = `/frames/${frameNum}.jpg`;
      img.onload = () => {
        if (i === 0) {
          resize();
          const ctx = canvas.getContext("2d");
          if (ctx) drawCover(ctx, img);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => window.removeEventListener("resize", resize);
  }, []);

  useMotionValueEvent(activeProgress, "change", (latest) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    const img = imagesRef.current[frameIndex];
    if (img && img.complete && img.naturalWidth) {
      const ctx = canvas.getContext("2d");
      if (ctx) drawCover(ctx, img);
    }
  });

  return (
    <div ref={wrapperRef} className="w-full h-full relative overflow-hidden rounded-2xl bg-black">
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
