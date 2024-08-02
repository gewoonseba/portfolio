import { IconButton } from "@/app/ui/button/icon-button";

interface MenuButtonProps {
  onClick?: () => void;
  isOpen: boolean;
}
export const MenuButton = ({ onClick, isOpen }: MenuButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{isOpen ? "Close" : "Menu"}</title>
        <g
          id="icon-/-menu"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinejoin="round"
        >
          <line
            x1="2"
            y1="12"
            x2="22"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-1"
            }`}
            style={{ transformOrigin: "center" }}
          />
          <line
            x1="2"
            y1="12"
            x2="22"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-1"
            }`}
            style={{ transformOrigin: "center" }}
          />
        </g>
      </svg>
    </IconButton>
  );
};
