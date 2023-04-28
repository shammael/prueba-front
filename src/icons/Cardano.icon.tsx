import { SVGProps } from "react";
const CardanoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    style={{
      //@ts-ignore
      enableBackground: "new 0 0 512 512",
    }}
    viewBox="0 0 32 32"
    {...props}
  >
    <g data-name="Layer 36">
      <circle cx={16} cy={16} r={13} fill="#fdc019" data-original="#fdc019" />
      <path
        fill="#fd9f0f"
        d="M16 3a13 13 0 0 1 0 26z"
        data-original="#fd9f0f"
      />
      <path
        fill="#fef6e3"
        d="M21 17h-1.39l-.364-1H21a1 1 0 0 0 0-2h-2.481L16.94 9.658a1 1 0 0 0-1.88 0L13.481 14H11a1 1 0 0 0 0 2h1.754l-.364 1H11a1 1 0 0 0 0 2h.663l-.603 1.658a1 1 0 0 0 1.88.684L13.791 19h4.418l.851 2.342a1 1 0 0 0 1.88-.684L20.337 19H21a1 1 0 0 0 0-2zm-5-4.074L16.39 14h-.78zM14.519 17l.363-1h2.236l.363 1z"
        data-original="#fef6e3"
      />
    </g>
  </svg>
);
export default CardanoIcon;
