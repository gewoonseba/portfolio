"use client";

import { IconButton } from "@/app/ui/button/icon-button";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SimpleVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Mute the video to allow autoplay
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
    <div className="mx-auto mt-8 max-w-2xl">
      <div className="relative">
        <video ref={videoRef} autoPlay loop playsInline>
          <source src="/img/design/fluid-doc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-4 left-4">
          <IconButton
            onClick={togglePlayPause}
            className="bg-white/25 hover:bg-white/40 backdrop-blur-sm"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
