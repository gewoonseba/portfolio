import { IconButton } from "@/app/ui/button/icon-button";

interface PlayButtonProps {
  onClick?: () => void;
  isPlaying: boolean;
}

export const PlayButton = ({ onClick, isPlaying }: PlayButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <title>{isPlaying ? "Pause" : "Play"}</title>
        <g fill="currentColor">
          {isPlaying ? (
            // Original pause icon with two rectangles
            <>
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </>
          ) : (
            // Original play icon with triangle path
            <path
              d="M6.5 4.5L18.5 12L6.5 19.5V4.5Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          )}
        </g>
      </svg>
    </IconButton>
  );
};
