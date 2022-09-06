import * as React from 'react';
import { SVGProps } from 'react';

const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={100}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632Z"
      fill="#61DAFB"
    />
    <path
      d="M50 68.063c26.127 0 47.307-8.087 47.307-18.063 0-9.976-21.18-18.063-47.307-18.063-26.127 0-47.307 8.087-47.307 18.063 0 9.976 21.18 18.063 47.307 18.063Z"
      stroke="#61DAFB"
      strokeWidth={5}
    />
    <path
      d="M34.357 59.031C47.421 81.658 65.014 95.957 73.653 90.97c8.64-4.988 5.053-27.374-8.01-50C52.579 18.342 34.986 4.043 26.347 9.03c-8.64 4.988-5.053 27.374 8.01 50Z"
      stroke="#61DAFB"
      strokeWidth={5}
    />
    <path
      d="M34.357 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.639 4.988 26.232-9.311 39.296-31.938 13.063-22.626 16.65-45.012 8.01-50-8.639-4.988-26.232 9.311-39.296 31.938Z"
      stroke="#61DAFB"
      strokeWidth={5}
    />
  </svg>
);

export default ReactIcon;
