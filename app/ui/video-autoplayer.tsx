"use client";

import { PlayButton } from "@/app/ui/button/play-button";
import { useEffect, useRef, useState } from "react";

interface VideoAutoPlayerProps {
  src: string;
}

export default function VideoAutoPlayer({ src }: VideoAutoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  const togglePlayPause = () => {
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
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-4 right-4">
        <PlayButton onClick={togglePlayPause} isPlaying={isPlaying} />
      </div>
    </div>
  );
}
