import * as React from 'react';
import { SVGProps } from 'react';

const GitLab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={100}
    height={94}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M50 93.059 68.413 36.39H31.587L50 93.059Z" fill="#E24329" />
    <path d="M50 93.058 31.587 36.39H5.782L50 93.06Z" fill="#FC6D26" />
    <path
      d="M5.782 36.39.187 53.61a3.812 3.812 0 0 0 1.384 4.262L50 93.059 5.782 36.389Z"
      fill="#FCA326"
    />
    <path
      d="M5.782 36.39h25.805L20.497 2.258c-.57-1.756-3.055-1.756-3.625 0L5.782 36.39Z"
      fill="#E24329"
    />
    <path d="M50 93.058 68.413 36.39h25.805L50 93.06Z" fill="#FC6D26" />
    <path
      d="m94.218 36.39 5.596 17.221a3.815 3.815 0 0 1-1.385 4.262L50 93.059l44.218-56.67Z"
      fill="#FCA326"
    />
    <path
      d="M94.218 36.39H68.413l11.09-34.132c.57-1.756 3.055-1.756 3.625 0l11.09 34.132Z"
      fill="#E24329"
    />
  </svg>
);

export default GitLab;
