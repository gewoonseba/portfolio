"use client";

import { PlayButton } from "@/app/ui/button/play-button";
import { useEffect, useRef, useState } from "react";

interface VideoAutoPlayerProps {
  src: string;
}

export default function VideoAutoPlayer({ src }: VideoAutoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const shouldAutoplay = !mediaQuery.matches;
    setIsPlaying(shouldAutoplay);

    if (videoRef.current) {
      videoRef.current.muted = true;
      if (shouldAutoplay) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const togglePlayPause = (e?: React.MouseEvent) => {
    // Prevent event from bubbling up to parent links
    e?.stopPropagation();

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full cursor-pointer" onClick={togglePlayPause}>
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="absolute bottom-4 right-4"
        onClick={(e) => e.stopPropagation()} // Prevent double-triggering when clicking the button
      >
        <PlayButton onClick={togglePlayPause} isPlaying={isPlaying} />
      </div>
    </div>
  );
}
