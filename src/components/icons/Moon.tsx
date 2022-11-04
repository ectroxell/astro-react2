import { FunctionComponent } from 'react';

type IconProps = {
  width: string;
  height: string;
}
const MoonIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width= {props.width || "320pt"}
      height={props.height || "320pt"}
      viewBox="0 0 1280.000000 1277.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1277.000000) scale(0.100000,-0.100000)"
        fill="#7364c4"
        stroke="none"
      >
        <path
          d="M6455 11974 c-1577 -130 -2666 -545 -3649 -1390 -336 -289 -783 -767
     -981 -1050 -751 -1070 -1060 -2448 -870 -3874 40 -298 138 -727 230 -1010 276
     -847 694 -1560 1293 -2207 161 -174 608 -585 767 -705 769 -581 1810 -969
     2905 -1082 929 -96 1857 22 2664 341 547 216 1006 499 1516 937 152 130 529
     511 650 655 658 793 1031 1650 1194 2746 43 288 62 468 96 910 25 331 25 347
     -10 195 -329 -1462 -1508 -2919 -2925 -3615 -811 -398 -1692 -540 -2625 -425
     -970 121 -1866 519 -2504 1113 -154 143 -421 429 -543 582 -512 641 -853 1400
     -992 2210 -52 302 -65 473 -65 810 0 446 40 776 145 1200 122 492 350 1042
     561 1357 700 1048 1337 1655 2082 1984 323 142 703 249 1071 299 257 36 254
     41 -10 19z"
        />
      </g>
    </svg>
  )
}

export default MoonIcon
