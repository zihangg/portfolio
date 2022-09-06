import * as React from 'react';
import { SVGProps } from 'react';

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={68}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.333 100C26.533 100 34 92.533 34 83.333V66.667H17.333c-9.2 0-16.666 7.466-16.666 16.666S8.133 100 17.333 100Z"
      fill="#0ACF83"
    />
    <path
      d="M.667 50c0-9.2 7.466-16.667 16.666-16.667H34v33.334H17.333C8.133 66.666.667 59.2.667 50Z"
      fill="#A259FF"
    />
    <path
      d="M.667 16.667C.667 7.467 8.133 0 17.333 0H34v33.333H17.333c-9.2 0-16.666-7.466-16.666-16.666Z"
      fill="#F24E1E"
    />
    <path
      d="M34 0h16.667c9.2 0 16.666 7.467 16.666 16.667 0 9.2-7.466 16.666-16.666 16.666H34V0Z"
      fill="#FF7262"
    />
    <path
      d="M67.333 50c0 9.2-7.466 16.666-16.666 16.666S34 59.2 34 50s7.467-16.667 16.667-16.667c9.2 0 16.666 7.467 16.666 16.667Z"
      fill="#1ABCFE"
    />
  </svg>
);

export default Figma;
